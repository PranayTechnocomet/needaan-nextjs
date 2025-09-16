// import React from 'react'

// export default function ChartBod() {
//     return (
//         <>
//             <div >
// <div id="Scroll-Top" className="page-wrapper">

//     <div className="main-wrapper">

//             <div className="w-layout-blockcontainer container w-container">
//                                <h1 >Chart Boad</h1>
//                             </div>

//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }



"use client";
import React, { useState, useEffect, useRef } from "react";
import { Container, Card, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import '../style/chartbod.css'
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import { TbReportMedical } from "react-icons/tb";
import { useParams } from "next/navigation";
import useSessionStart from "@/app/hooks/useSessionStart";
import useChatSocket from "@/app/hooks/useChatSocket";

// --- SVG Icons ---
const ShoppingCartIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const ImageIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </svg>
);

const PaperPlaneIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const DoubleCheckIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6 7 17l-5-5"></path>
    <path d="m22 6-11 11-5-5"></path>
  </svg>
);

const LoadingSpinner = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" opacity="0.25"/>
    <path d="M21 12a9 9 0 11-6.219-8.56" strokeLinecap="round"/>
  </svg>
);

// Gender Icons
const FemaleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="8" r="5"/>
    <path d="M12 13v8"/>
    <path d="M9 16h6"/>
  </svg>
);

const MaleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="10" cy="14" r="5"/>
    <path d="M15 9l6-6"/>
    <path d="M21 3h-6v6"/>
  </svg>
);

const TransIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="4"/>
    <path d="M16 8l4-4"/>
    <path d="M20 4h-4v4"/>
    <path d="M8 16l-4 4"/>
    <path d="M4 20h4v-4"/>
    <path d="M12 8v8"/>
    <path d="M8 12h8"/>
  </svg>
);

// --- Main App Component ---
export default function App({ sessionId, onResponse, initialMessage }) {
  const params = useParams();
  const session_id = sessionId || params.id; // Use prop first, then URL parameters as fallback
  const [navBarResponse, setNavBarResponse] = useState("");
  const [chatResponses, setChatResponses] = useState("");
  
  // State for conditional UI elements
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [lastAiMessage, setLastAiMessage] = useState("");
  const [isGenderSelectionActive, setIsGenderSelectionActive] = useState(false);
  const [genderSelectionCompleted, setGenderSelectionCompleted] = useState(false);
  const [hasConnectedOnce, setHasConnectedOnce] = useState(false);
  
  // Define handleNavBarResponse function
  const handleNavBarResponse = (value) => {
    setNavBarResponse(value);
  };
  
  // Initialize WebSocket connection
  const { messages: socketMessages, sendMessage, isSessionStarted, isConnected, connectionStatus, error, reconnect } = useChatSocket(session_id);
  
  const [messages, setMessages] = useState([]);
  

  // Handle initial message from props
  useEffect(() => {
    if (initialMessage && messages.length === 0) {
      console.log("📨 Adding initial message from NavBar:", initialMessage);
      const initialMsg = {
        id: Math.random(),
        text: initialMessage,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        sender: "receiver",
        date: "Today",
        status: "received",
      };
      setMessages([initialMsg]);
      // Update last AI message for conditional UI
      setLastAiMessage(initialMessage);
    }
  }, [initialMessage, messages.length]);

  console.log(" ", navBarResponse);
  const { startChats } = useSessionStart();
  const [input, setInput] = useState("");
  // console.log("ThisIsInput", input);

  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle incoming WebSocket messages
  useEffect(() => {
    if (socketMessages && socketMessages.length > 0) {
      const latestMessage = socketMessages[socketMessages.length - 1];
      if (latestMessage && latestMessage.message) {
        const newMessage = {
          id: Date.now(),
          text: latestMessage.message,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          sender: "receiver",
          date: "Today",
          status: "received",
        };
        
        setMessages(prev => {
          // Check if message already exists to avoid duplicates
          const exists = prev.some(msg => msg.text === newMessage.text && msg.time === newMessage.time);
          if (!exists) {
            // Update last AI message for conditional UI
            setLastAiMessage(newMessage.text);
            
            // Check if this message requires gender selection (only for the first time)
            if (newMessage.text.toLowerCase().includes("gender") && !genderSelectionCompleted && !selectedGender) {
              setIsGenderSelectionActive(true);
            }
            
            // Mark as connected once we receive first message
            if (!hasConnectedOnce) {
              setHasConnectedOnce(true);
            }
            return [...prev, newMessage];
          }
          return prev;
        });
      }
    }
  }, [socketMessages, genderSelectionCompleted, selectedGender, hasConnectedOnce]);

  

  const handleSend = () => {
    if (input.trim() === "") return;
    
    // Check if WebSocket is connected and session is started
    if (!isConnected || !isSessionStarted) {
      console.warn("Cannot send message: WebSocket not connected or session not started");
      return;
    }

    // Add user message to local state
    const newMsg = {
      id: Date.now(),
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      sender: "sender",
      date: "Today",
      status: "sent",
    };
    
    setMessages(prevMessages => [...prevMessages, newMsg]);
    
    // Send message via WebSocket
    sendMessage(input);
    
    setInput("");
  };

  // Handle dropdown selections
  const handleAgeSelect = (age) => {
    setSelectedAge(age);
    // Auto-send the selected age
    if (age && isConnected && isSessionStarted) {
      const ageMsg = {
        id: Date.now(),
        text: age,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        sender: "sender",
        date: "Today",
        status: "sent",
      };
      setMessages(prevMessages => [...prevMessages, ageMsg]);
      sendMessage(age);
    }
  };

  const handleGenderSelect = (gender) => {
    if (genderSelectionCompleted) return; // Prevent multiple selections
    
    setSelectedGender(gender);
    setGenderSelectionCompleted(true);
    setIsGenderSelectionActive(false);
    
    // Auto-send the selected gender
    if (gender && isConnected && isSessionStarted) {
      const genderMsg = {
        id: Date.now(),
        text: gender,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        sender: "sender",
        date: "Today",
        status: "sent",
      };
      setMessages(prevMessages => [...prevMessages, genderMsg]);
      sendMessage(gender);
    }
  };

  const groupByDate = (messages) => {
    return messages.reduce((acc, msg) => {
      (acc[msg.date] = acc[msg.date] || []).push(msg);
      return acc;
    }, {});
  };

  const groupedMessages = groupByDate(messages);

  return (
    <>
      <div id="Scroll-Top" className="page-wrapper main-chatboad">

        <div className="main-wrapper">

          <div className="w-layout-blockcontainer container w-container">

            <Container fluid className="chat-container p-0">
              <Card className="chat-card" style={{ position: 'relative', overflow: 'hidden' }}>
                {/* Loading Overlay */}
                {(!isSessionStarted || (connectionStatus !== 'connected' && !hasConnectedOnce)) && (
                  <div className="loading-overlay" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000,
                    borderRadius: '0.375rem'
                  }}>
                    <LoadingSpinner className="loading-spinner" style={{
                      animation: 'spin 1s linear infinite',
                      color: '#43ba7f',
                      marginBottom: '20px',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                    }} />
                    <p style={{
                      fontSize: '18px',
                      color: '#333',
                      textAlign: 'center',
                      margin: 0,
                      fontWeight: '600',
                      textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                    }}>
                      {connectionStatus === 'connecting' ? 'Connecting to chat server...' :
                       connectionStatus === 'error' ? 'Connection failed. Retrying...' :
                       'Connected to chat server. Send a message to start chatting!'}
                    </p>
                  </div>
                )}
                
                {/* Header */}
                <Card.Header className="chat-header">
                  {/* <ShoppingCartIcon className="header-icon" /> */}
                  <h5 className="header-title mb-0">ChatBot</h5>
                </Card.Header>

                {/* Chat Body */}
                <Card.Body className="chat-body">
                  {Object.keys(groupedMessages).map((date) => (
                    <div key={date}>
                      <div className="date-separator-container">
                        {/* <div className="date-separator">{date}</div> */}
                      </div>
                      {groupedMessages[date].map((msg) => (
                        <div key={msg.id}>
                          <Row className={`message-row w-100 ${msg.sender === "sender" ? "message-end" : "message-start"}`}>
                            <Col xs="auto">
                              <div
                                className={`message-bubble ${msg.sender === "sender" ? "sender-msg" : "receiver-msg"}`}
                              >
                                <p>{msg.text}</p>
                                <div className="msg-time">
                                  {/* {msg.time} */}
                                  {/* {msg.sender === "sender" && msg.status === "read" && <DoubleCheckIcon className="read-receipt-icon" />} */}
                                </div>
                              </div>
                            </Col>
                          </Row>
                          
                          {/* Gender Selection UI - appears below AI messages containing "gender" */}
                          {msg.sender === "receiver" && msg.text.toLowerCase().includes("gender") && !genderSelectionCompleted && (
                            <div className="conditional-ui-container" style={{
                              padding: '20px',
                              margin: '10px 0',
                              borderRadius: '12px',
                              backgroundColor: '#f8f9fa',
                              border: '1px solid #e0e0e0'
                            }}>
                              <div style={{
                                display: 'flex',
                                gap: '15px',
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                              }}>
                                {/* Female Card */}
                                <div 
                                  onClick={() => handleGenderSelect('Female')}
                                  style={{
                                    width: '120px',
                                    height: '140px',
                                    border: selectedGender === 'Female' ? '2px solid #007bff' : '1px solid #ddd',
                                    borderRadius: '12px',
                                    backgroundColor: selectedGender === 'Female' ? '#f0f8ff' : '#fff',
                                    cursor: genderSelectionCompleted ? 'not-allowed' : 'pointer',
                                    opacity: genderSelectionCompleted && selectedGender !== 'Female' ? 0.5 : 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '15px',
                                    transition: 'all 0.2s ease',
                                    boxShadow: selectedGender === 'Female' ? '0 4px 12px rgba(0,123,255,0.2)' : '0 2px 4px rgba(0,0,0,0.1)'
                                  }}
                                  onMouseEnter={(e) => {
                                    if (selectedGender !== 'Female') {
                                      e.target.style.borderColor = '#007bff';
                                      e.target.style.backgroundColor = '#f8f9fa';
                                    }
                                  }}
                                  onMouseLeave={(e) => {
                                    if (selectedGender !== 'Female') {
                                      e.target.style.borderColor = '#ddd';
                                      e.target.style.backgroundColor = '#fff';
                                    }
                                  }}
                                >
                                  <div style={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    border: '2px solid #666',
                                    backgroundColor: selectedGender === 'Female' ? '#007bff' : 'transparent',
                                    marginBottom: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                  }}>
                                    {selectedGender === 'Female' && (
                                      <div style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        backgroundColor: '#fff'
                                      }} />
                                    )}
                                  </div>
                                  <FemaleIcon className="gender-icon" style={{ color: '#666', marginBottom: '10px' }} />
                                  <span style={{ 
                                    fontSize: '14px', 
                                    fontWeight: '500',
                                    color: selectedGender === 'Female' ? '#007bff' : '#666'
                                  }}>Female</span>
                                </div>

                                {/* Male Card */}
                                <div 
                                  onClick={() => handleGenderSelect('Male')}
                                  style={{
                                    width: '120px',
                                    height: '140px',
                                    border: selectedGender === 'Male' ? '2px solid #007bff' : '1px solid #ddd',
                                    borderRadius: '12px',
                                    backgroundColor: selectedGender === 'Male' ? '#f0f8ff' : '#fff',
                                    cursor: genderSelectionCompleted ? 'not-allowed' : 'pointer',
                                    opacity: genderSelectionCompleted && selectedGender !== 'Male' ? 0.5 : 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '15px',
                                    transition: 'all 0.2s ease',
                                    boxShadow: selectedGender === 'Male' ? '0 4px 12px rgba(0,123,255,0.2)' : '0 2px 4px rgba(0,0,0,0.1)'
                                  }}
                                  onMouseEnter={(e) => {
                                    if (selectedGender !== 'Male') {
                                      e.target.style.borderColor = '#007bff';
                                      e.target.style.backgroundColor = '#f8f9fa';
                                    }
                                  }}
                                  onMouseLeave={(e) => {
                                    if (selectedGender !== 'Male') {
                                      e.target.style.borderColor = '#ddd';
                                      e.target.style.backgroundColor = '#fff';
                                    }
                                  }}
                                >
                                  <div style={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    border: '2px solid #666',
                                    backgroundColor: selectedGender === 'Male' ? '#007bff' : 'transparent',
                                    marginBottom: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                  }}>
                                    {selectedGender === 'Male' && (
                                      <div style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        backgroundColor: '#fff'
                                      }} />
                                    )}
                                  </div>
                                  <MaleIcon className="gender-icon" style={{ color: '#666', marginBottom: '10px' }} />
                                  <span style={{ 
                                    fontSize: '14px', 
                                    fontWeight: '500',
                                    color: selectedGender === 'Male' ? '#007bff' : '#666'
                                  }}>Male</span>
                                </div>

                                {/* Trans/Other Card */}
                                <div 
                                  onClick={() => handleGenderSelect('Other')}
                                  style={{
                                    width: '120px',
                                    height: '140px',
                                    border: selectedGender === 'Other' ? '2px solid #007bff' : '1px solid #ddd',
                                    borderRadius: '12px',
                                    backgroundColor: selectedGender === 'Other' ? '#f0f8ff' : '#fff',
                                    cursor: genderSelectionCompleted ? 'not-allowed' : 'pointer',
                                    opacity: genderSelectionCompleted && selectedGender !== 'Other' ? 0.5 : 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '15px',
                                    transition: 'all 0.2s ease',
                                    boxShadow: selectedGender === 'Other' ? '0 4px 12px rgba(0,123,255,0.2)' : '0 2px 4px rgba(0,0,0,0.1)'
                                  }}
                                  onMouseEnter={(e) => {
                                    if (selectedGender !== 'Other') {
                                      e.target.style.borderColor = '#007bff';
                                      e.target.style.backgroundColor = '#f8f9fa';
                                    }
                                  }}
                                  onMouseLeave={(e) => {
                                    if (selectedGender !== 'Other') {
                                      e.target.style.borderColor = '#ddd';
                                      e.target.style.backgroundColor = '#fff';
                                    }
                                  }}
                                >
                                  <div style={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    border: '2px solid #666',
                                    backgroundColor: selectedGender === 'Other' ? '#007bff' : 'transparent',
                                    marginBottom: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                  }}>
                                    {selectedGender === 'Other' && (
                                      <div style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        backgroundColor: '#fff'
                                      }} />
                                    )}
                                  </div>
                                  <TransIcon className="gender-icon" style={{ color: '#666', marginBottom: '10px' }} />
                                  <span style={{ 
                                    fontSize: '14px', 
                                    fontWeight: '500',
                                    color: selectedGender === 'Other' ? '#007bff' : '#666'
                                  }}>Other</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </Card.Body>

                
                


                {/* Input Footer */}

                <Card.Footer className="chat-footer">
                  <div className="message-convertion-main">
                    <InputGroup>
                      {/* <Button variant="light" className="icon-btn">
                      <ImageIcon className="footer-icon" />
                    </Button> */}

                      <div className="message-convertion">
                        <Form.Control
                          type="text"
                          placeholder={
                            connectionStatus === 'connecting' ? "Connecting..." :
                            connectionStatus === 'error' ? "Connection failed - Click reconnect" :
                            isGenderSelectionActive ? "Please select your gender from the options above" :
                            isSessionStarted ? "Write what you wanna ask..." : "Starting session..."
                          }
                          className="chat-input"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && handleSend()}
                          disabled={!isSessionStarted || connectionStatus !== 'connected' || isGenderSelectionActive}
                        />
                        <div className="send-icon-main">
                          {connectionStatus === 'error' ? (
                            <Button 
                              className="icon-bt send-icon" 
                              onClick={reconnect}
                              variant="warning"
                            >
                              🔄
                            </Button>
                          ) : (
                            <Button 
                              className="icon-bt send-icon" 
                              onClick={handleSend} 
                              disabled={!input.trim() || !isSessionStarted || connectionStatus !== 'connected' || isGenderSelectionActive}
                            >
                              <FaArrowUp className="footer-icon" />
                            </Button>
                          )}
                        </div>

                      </div>



                    </InputGroup>
                    <div className="chat-main-btn ">
                      {/* <Button className="generate-report-btn ">Generate Report</Button> */}
                      <div className="nav-menu-button-wrapper">
                        <Link href="" className="button-outline-chat w-button">
                          <span className="generate-report-text">Generate Report</span>
                        </Link>
                        <div className="report-icon-wrapper">
                          <TbReportMedical className="report-icon" />
                        </div>
                      </div>

                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
