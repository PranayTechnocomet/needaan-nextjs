// hooks/useChatSocket.js
import { useEffect, useCallback } from "react";
import { useWebSocket } from "@/context/WebSocketContext";

export default function useChatSocket(session_id) {
  // Use centralized WebSocket context instead of creating own connection
  const { 
    messages, 
    sendMessage, 
    isSessionStarted, 
    connectionStatus, 
    error, 
    sessionId: wsSessionId,
    connectWebSocket,
    disconnect
  } = useWebSocket();

  // Send report request function using centralized WebSocket
  const sendReportRequest = useCallback(() => {
    if (sendMessage) {
      const reportRequest = {
        type: "generate_report",
        session_id: wsSessionId || session_id
      };
      console.log("📋 Sending report request:", reportRequest);
      return sendMessage(reportRequest);
    } else {
      console.error("❌ SendMessage function not available");
      return false;
    }
  }, [sendMessage, wsSessionId, session_id]);

  // Connection status helpers
  const isConnected = connectionStatus === 'connected';
  const isConnecting = connectionStatus === 'connecting';

  // Reconnect function (uses centralized reconnect logic)
  const reconnect = useCallback(() => {
    console.log("🔄 Manual reconnect requested via useChatSocket");
    connectWebSocket();
  }, [connectWebSocket]);

  // Log session information for debugging
  useEffect(() => {
    if (session_id) {
      console.log("🔗 useChatSocket hook initialized for session:", session_id);
      console.log("🔗 WebSocket session ID:", wsSessionId);
      console.log("🔗 Connection status:", connectionStatus);
    }
  }, [session_id, wsSessionId, connectionStatus]);

  return { 
    messages, 
    sendMessage, 
    sendReportRequest,
    isSessionStarted,
    isConnected,
    isConnecting,
    connectionStatus,
    error,
    reconnect
  };
}
