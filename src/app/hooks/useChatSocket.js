// hooks/useChatSocket.js
import { useEffect, useRef, useState, useCallback } from "react";

export default function useChatSocket(session_id) {
  const socketRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [isSessionStarted, setIsSessionStarted] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('disconnected');
  const [error, setError] = useState(null);
  const reconnectTimeoutRef = useRef(null);
  const reconnectAttemptsRef = useRef(0);
  const maxReconnectAttempts = 5;

  const connectWebSocket = useCallback(() => {
    if (!session_id) {
      console.warn("No session_id provided for WebSocket connection");
      return;
    }

    try {
      setConnectionStatus('connecting');
      setError(null);
      
      console.log(`Attempting to connect to WebSocket: ws://192.168.0.131:8000/ws/chat/`);
      
      // Create WebSocket connection
      const ws = new WebSocket(`ws://192.168.0.131:8000/ws/chat/`);

      ws.onopen = () => {
        console.log("WebSocket connected successfully for session:", session_id);
        setConnectionStatus('connected');
        setError(null);
        reconnectAttemptsRef.current = 0;

        // start session once connected - send only the required JSON format
        try {
          const sessionStartMessage = JSON.stringify({ type: "start_session" });
          console.log("Sending session start message:", sessionStartMessage);
          ws.send(sessionStartMessage);
        } catch (sendError) {
          console.error("Error sending session start message:", sendError);
        }
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          console.log("WebSocketdataMeassage:", data);

          // Handle different message types
          if (data.type === "session_started") {
            console.log("Session started successfully");
            setIsSessionStarted(true);
          } else if (data.type === "chat_response" || data.message) {
            // push chat messages to local state
            setMessages((prev) => [...prev, data]);
          } else {
            console.log("Unknown message type received:", data);
          }
        } catch (parseError) {
          console.error("Error parsing WebSocket message:", parseError, "Raw data:", event.data);
        }
      };

      ws.onclose = (event) => {
        console.log(`🔌 WebSocket closed - Code: ${event.code}, Reason: ${event.reason || 'No reason provided'}`);
        setConnectionStatus('disconnected');
        setIsSessionStarted(false);
        
        // Attempt to reconnect if not a normal closure
        if (event.code !== 1000 && reconnectAttemptsRef.current < maxReconnectAttempts) {
          const delay = Math.min(1000 * Math.pow(2, reconnectAttemptsRef.current), 30000);
          console.log(`Attempting to reconnect in ${delay}ms (attempt ${reconnectAttemptsRef.current + 1}/${maxReconnectAttempts})`);
          
          reconnectTimeoutRef.current = setTimeout(() => {
            reconnectAttemptsRef.current++;
            connectWebSocket();
          }, delay);
        }
      };
      
      ws.onerror = (errorEvent) => {
        console.error("WebSocket error occurred:", {
          type: errorEvent.type,
          target: errorEvent.target,
          readyState: errorEvent.target?.readyState,
          url: errorEvent.target?.url
        });
        
        setError(`Connection failed to ${errorEvent.target?.url || 'WebSocket server'}`);
        setConnectionStatus('error');
        setIsSessionStarted(false);
      };

      socketRef.current = ws;

    } catch (connectionError) {
      console.error("Failed to create WebSocket connection:", connectionError);
      setError(`Failed to create connection: ${connectionError.message}`);
      setConnectionStatus('error');
    }
  }, [session_id]);

  useEffect(() => {
    connectWebSocket();

    return () => {
      // Clear reconnection timeout
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      
      // Close WebSocket connection
      if (socketRef.current) {
        if (socketRef.current.readyState === WebSocket.OPEN) {
          socketRef.current.close(1000, 'Component unmounting');
        }
        socketRef.current = null;
      }
    };
  }, [connectWebSocket]);

  const sendMessage = useCallback((message) => {
    if (!socketRef.current) {
      console.warn("Cannot send message: No WebSocket connection");
      return false;
    }

    if (socketRef.current.readyState !== WebSocket.OPEN) {
      console.warn("Cannot send message: WebSocket not open. Current state:", socketRef.current.readyState);
      return false;
    }

    if (!isSessionStarted) {
      console.warn("Cannot send message: Session not started yet");
      return false;
    }

    try {
      const messagePayload = JSON.stringify({
        type: "chat",
        message: message
      });
      
      console.log("Sending message:", messagePayload);
      socketRef.current.send(messagePayload);
      return true;
    } catch (sendError) {
      console.error("Error sending message:", sendError);
      return false;
    }
  }, [isSessionStarted]);

  const reconnect = useCallback(() => {
    reconnectAttemptsRef.current = 0;
    connectWebSocket();
  }, [connectWebSocket]);

  return { 
    messages, 
    sendMessage, 
    isSessionStarted,
    isConnected: connectionStatus === 'connected',
    connectionStatus,
    error,
    reconnect
  };
}
