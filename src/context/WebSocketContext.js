"use client";
import React, { createContext, useContext, useRef, useState, useCallback, useEffect } from 'react';

const WebSocketContext = createContext();

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }
  return context;
};

export const WebSocketProvider = ({ children }) => {
  const socketRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [isSessionStarted, setIsSessionStarted] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('disconnected');
  const [error, setError] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [initialMessage, setInitialMessage] = useState(null);
  const reconnectTimeoutRef = useRef(null);
  const reconnectAttemptsRef = useRef(0);
  const isConnectingRef = useRef(false);
  const maxReconnectAttempts = 5;

  // Function to connect WebSocket
  const connectWebSocket = useCallback(() => {
    // Check if we're already in the process of connecting
    if (isConnectingRef.current) {
      console.log("Already connecting, skipping duplicate connection attempt");
      return Promise.resolve();
    }

    // Check if WebSocket already exists and is connecting/open
    if (socketRef.current && 
        (socketRef.current.readyState === WebSocket.CONNECTING || 
         socketRef.current.readyState === WebSocket.OPEN)) {
      console.log("WebSocket already exists and is active, skipping connection");
      return Promise.resolve();
    }

    // Close existing connection if it exists
    if (socketRef.current) {
      console.log("Closing existing WebSocket connection before creating new one");
      socketRef.current.close();
      socketRef.current = null;
    }

    // Mark that we're connecting
    isConnectingRef.current = true;

    return new Promise((resolve, reject) => {
      try {
        setConnectionStatus('connecting');
        setError(null);
        
        console.log(`🔌 Attempting to connect to WebSocket: ws://192.168.0.106:8000/ws/chat/`);
        
        // Create WebSocket connection
        const ws = new WebSocket(`ws://192.168.0.106:8000/ws/chat/`);

        ws.onopen = () => {
          console.log("✅ WebSocket connected successfully");
          setConnectionStatus('connected');
          setError(null);
          reconnectAttemptsRef.current = 0;
          isConnectingRef.current = false;
          socketRef.current = ws;
          
          resolve(ws);
        };

        ws.onmessage = (event) => {
          // Log raw data for debugging
          console.log("📨 Raw WebSocket data received:", event.data);
          
          try {
            // Check if data is empty or null
            if (!event.data || event.data.trim() === '') {
              console.warn("⚠️ Received empty WebSocket message");
              return;
            }

            // Try to parse JSON
            let data;
            try {
              data = JSON.parse(event.data);
            } catch (jsonError) {
              console.error("❌ Invalid JSON format received:", {
                error: jsonError.message,
                rawData: event.data,
                dataType: typeof event.data,
                dataLength: event.data.length
              });
              
              // Try to handle non-JSON responses
              if (typeof event.data === 'string') {
                // If it's a plain text message, create a simple message object
                data = {
                  type: "text_message",
                  message: event.data,
                  timestamp: new Date().toISOString()
                };
                console.log("🔄 Converted text message to object:", data);
              } else {
                console.error("❌ Cannot handle non-string, non-JSON data");
                return;
              }
            }

            console.log("📨 Parsed WebSocket message:", data);

            // Handle different message types
            if (data.type === "connection_established") {
              console.log("🔗 Connection established");
              // Send start_session message immediately after connection is established
              try {
                const sessionStartMessage = JSON.stringify({ type: "start_session" });
                console.log("📤 Sending session start message after connection established:", sessionStartMessage);
                ws.send(sessionStartMessage);
              } catch (sendError) {
                console.error("❌ Error sending session start message:", sendError);
              }
            } else if (data.type === "session_started" && data.session_id) {
              console.log("🎉 Session started successfully with ID:", data.session_id);
              setIsSessionStarted(true);
              setSessionId(data.session_id);
              
              // Store initial message in state if present
              if (data.message) {
                setInitialMessage(data.message);
                console.log("💾 Stored initial message in state:", data.message);
              }
            } else if (data.type === "report_generated") {
              console.log("📋 Report generated received:", data);
              setMessages((prev) => [...prev, data]);
            } else if (data.type === "chat") {
              // Handle chat type messages with specific format
              console.log("💬 Chat message received:", data);
              
              // Validate that data.message exists and is a string
              const messageText = typeof data.message === 'string' ? data.message : 
                                 typeof data.message === 'object' ? JSON.stringify(data.message) :
                                 String(data.message || 'Empty message');
              
              const chatMessage = {
                id: `chat-${Date.now()}-${Math.random()}`,
                text: messageText,
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                sender: "receiver",
                date: "Today",
                status: "received",
                type: "chat"
              };
              setMessages((prev) => [...prev, chatMessage]);
            } else if (data.type === "chat_response" || data.message) {
              // Add other chat messages to local state
              setMessages((prev) => [...prev, data]);
            } else if (data.type === "text_message") {
              // Handle converted text messages
              console.log("📝 Text message received:", data.message);
              setMessages((prev) => [...prev, {
                id: `text-${Date.now()}-${Math.random()}`,
                text: data.message,
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                sender: "receiver",
                date: "Today",
                status: "received"
              }]);
            } else {
              console.log("❓ Unknown message type received:", data);
              // Still add unknown messages to prevent data loss
              setMessages((prev) => [...prev, {
                id: `unknown-${Date.now()}-${Math.random()}`,
                text: JSON.stringify(data),
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                sender: "receiver",
                date: "Today",
                status: "received"
              }]);
            }
          } catch (generalError) {
            console.error("❌ General error processing WebSocket message:", generalError, "Raw data:", event.data);
            setError(`Message processing error: ${generalError.message}`);
          }
        };

        ws.onclose = (event) => {
          console.log(`🔌 WebSocket closed - Code: ${event.code}, Reason: ${event.reason || 'No reason provided'}`);
          setConnectionStatus('disconnected');
          setIsSessionStarted(false);
          isConnectingRef.current = false;
          socketRef.current = null;
          
          // Attempt to reconnect if not a normal closure
          if (event.code !== 1000 && reconnectAttemptsRef.current < maxReconnectAttempts) {
            const delay = Math.min(1000 * Math.pow(2, reconnectAttemptsRef.current), 30000);
            console.log(`🔄 Attempting to reconnect in ${delay}ms (attempt ${reconnectAttemptsRef.current + 1}/${maxReconnectAttempts})`);
            
            reconnectTimeoutRef.current = setTimeout(() => {
              reconnectAttemptsRef.current++;
              connectWebSocket();
            }, delay);
          } else if (reconnectAttemptsRef.current >= maxReconnectAttempts) {
            console.error("❌ Max reconnection attempts reached");
            setError("Failed to reconnect after multiple attempts");
          }
          
          reject(new Error(`WebSocket closed with code ${event.code}`));
        };

        ws.onerror = (error) => {
          console.error("❌ WebSocket error:", error);
          setError("WebSocket connection error");
          setConnectionStatus('error');
          isConnectingRef.current = false;
          reject(error);
        };

      } catch (connectionError) {
        console.error("❌ Error creating WebSocket connection:", connectionError);
        setError("Failed to create WebSocket connection");
        setConnectionStatus('error');
        isConnectingRef.current = false;
        reject(connectionError);
      }
    });
  }, []);

  // Function to send messages
  const sendMessage = useCallback((message) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      try {
        let messageToSend;
        
        // Ensure proper JSON formatting and prevent server errors
        if (typeof message === 'string') {
          // If it's already a string, check if it's valid JSON
          try {
            const parsed = JSON.parse(message);
            // Validate the parsed object has required fields
            if (typeof parsed === 'object' && parsed !== null) {
              messageToSend = message; // It's valid JSON string
            } else {
              throw new Error('Invalid JSON object');
            }
          } catch {
            // It's a plain text string, wrap it in the expected chat format
            messageToSend = JSON.stringify({
              type: "chat",
              message: message,
              session_id: sessionId || "unknown",
              timestamp: new Date().toISOString()
            });
          }
        } else if (typeof message === 'object' && message !== null) {
          // It's an object, ensure it has proper structure
          const messageObj = {
            type: message.type || "chat",
            message: message.message || (typeof message.text === 'string' ? message.text : JSON.stringify(message)),
            session_id: message.session_id || sessionId || "unknown",
            timestamp: message.timestamp || new Date().toISOString()
          };
          
          // Add any additional fields from the original message
          Object.keys(message).forEach(key => {
            if (!messageObj.hasOwnProperty(key) && typeof message[key] !== 'function') {
              messageObj[key] = message[key];
            }
          });
          
          messageToSend = JSON.stringify(messageObj);
        } else if (typeof message === 'number') {
          // Handle numbers specifically to prevent server errors
          messageToSend = JSON.stringify({
            type: "chat",
            message: message.toString(),
            session_id: sessionId || "unknown",
            timestamp: new Date().toISOString()
          });
        } else {
          // Convert other types to string and wrap in chat format
          messageToSend = JSON.stringify({
            type: "chat",
            message: String(message),
            session_id: sessionId || "unknown",
            timestamp: new Date().toISOString()
          });
        }
        
        console.log("📤 Sending formatted message:", messageToSend);
        socketRef.current.send(messageToSend);
        return true;
      } catch (error) {
        console.error("❌ Error sending message:", error);
        setError("Failed to send message");
        return false;
      }
    } else {
      console.warn("⚠️ WebSocket is not connected. Cannot send message:", message);
      setError("WebSocket is not connected");
      return false;
    }
  }, [sessionId]);

  // Function to disconnect WebSocket
  const disconnect = useCallback(() => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }
    
    if (socketRef.current) {
      console.log("🔌 Manually disconnecting WebSocket");
      socketRef.current.close(1000, "Manual disconnect");
      socketRef.current = null;
    }
    
    setConnectionStatus('disconnected');
    setIsSessionStarted(false);
    setSessionId(null);
    setInitialMessage(null);
    setMessages([]);
    setError(null);
    isConnectingRef.current = false;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      disconnect();
    };
  }, [disconnect]);

  const value = {
    // State
    messages,
    isSessionStarted,
    connectionStatus,
    error,
    sessionId,
    initialMessage,
    
    // Actions
    connectWebSocket,
    sendMessage,
    disconnect,
    
    // Direct socket access (use carefully)
    socket: socketRef.current,
    
    // Message management
    setMessages,
    clearMessages: () => setMessages([]),
  };

  return (
    <WebSocketContext.Provider value={value}>
      {children}
    </WebSocketContext.Provider>
  );
};
