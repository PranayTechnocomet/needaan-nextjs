"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Container, Card, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import '../style/chartbod.css'
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import { TbReportMedical } from "react-icons/tb";
import { useParams } from "next/navigation";
import useSessionStart from "@/app/hooks/useSessionStart";
import { useWebSocket } from "@/context/WebSocketContext";

// PDF Generation imports
let jsPDF, html2canvas;
if (typeof window !== 'undefined') {
  // Dynamic imports for client-side only
  import('jspdf').then(module => { jsPDF = module.default; });
  import('html2canvas').then(module => { html2canvas = module.default; });
}

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
    <circle cx="12" cy="12" r="10" opacity="0.25" />
    <path d="M21 12a9 9 0 11-6.219-8.56" strokeLinecap="round" />
  </svg>
);

// Gender Icons
const FemaleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="8" r="5" />
    <path d="M12 13v8" />
    <path d="M9 16h6" />
  </svg>
);

const MaleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="10" cy="14" r="5" />
    <path d="M15 9l6-6" />
    <path d="M21 3h-6v6" />
  </svg>
);

const TransIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="4" />
    <path d="M16 8l4-4" />
    <path d="M20 4h-4v4" />
    <path d="M8 16l-4 4" />
    <path d="M4 20h4v-4" />
    <path d="M12 8v8" />
    <path d="M8 12h8" />
  </svg>
);

// Inline icons for Report modal (no external icon deps inside the modal)
const IconDownload = ({ style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7,10 12,15 17,10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const IconPrint = ({ style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <polyline points="6,9 6,2 18,2 18,9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </svg>
);

const IconClose = ({ style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// Typing Indicator Component
const TypingIndicator = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#6c757d',
    fontStyle: 'italic',
    fontSize: '15px',
    padding: '12px 16px',
    backgroundColor: '#f8f9fa',
    borderRadius: '18px',
    margin: '8px 0',
    maxWidth: 'fit-content'
  }}>
    <span>Assistant is typing</span>
    <div style={{ display: 'flex', gap: '2px' }}>
      <span className="animate-bounce" style={{ animationDelay: '0s' }}>.</span>
      <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>.</span>
      <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
    </div>
  </div>
);

const IconBot = ({ style, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style} className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8" y2="16" />
    <line x1="16" y1="16" x2="16" y2="16" />
  </svg>
);

// PDF Report Component for rendering
const PDFReportComponent = ({ reportData }) => {
  if (!reportData?.report) return null;
  const { report } = reportData;

  const getUrgencyColor = (level) => {
    switch ((level || '').toUpperCase()) {
      case 'HIGH': return '#dc3545';
      case 'MEDIUM': return '#ffc107';
      case 'LOW': return '#28a745';
      default: return '#6c757d';
    }
  };

  const getUrgencyBg = (level) => {
    switch ((level || '').toUpperCase()) {
      case 'HIGH': return '#f8d7da';
      case 'MEDIUM': return '#fff3cd';
      case 'LOW': return '#d1e7dd';
      default: return '#e2e3e5';
    }
  };

  return (
    <div id="pdf-report-content" style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#ffffff',
      color: '#333333',
      lineHeight: '1.4'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '20px',
        borderBottom: '3px solid #22c17b',
        paddingBottom: '10px'
      }}>
        <h1 style={{
          color: '#22c17b',
          fontSize: '24px',
          fontWeight: '900',
          fontFamily: 'Arial, sans-serif',
          margin: '0 0 5px 0'
        }}>🩺 NEEDAAN HEALTH REPORT</h1>
        <p style={{
          color: '#666',
          fontSize: '14px',
          margin: 0
        }}>AI-Powered Medical Consultation Report</p>
      </div>

      {/* Report Meta Information */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '12px',
        borderRadius: '6px',
        marginBottom: '15px',
        border: '1px solid #e9ecef'
      }}>
        <h3 style={{
          color: '#495057',
          fontSize: '16px',
          marginBottom: '8px',
          borderBottom: '2px solid #22c17b',
          paddingBottom: '3px'
        }}>Report Information</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '10px'
        }}>
          <div>
            <strong style={{ color: '#6c757d', fontSize: '12px' }}>Report ID:</strong>
            <div style={{ fontFamily: 'monospace', fontSize: '12px' }}>{report.report_id}</div>
          </div>
          <div>
            <strong style={{ color: '#6c757d', fontSize: '12px' }}>Generated On:</strong>
            <div style={{ fontSize: '12px' }}>{new Date(report.generated_at).toLocaleString()}</div>
          </div>
          <div>
            <strong style={{ color: '#6c757d', fontSize: '12px' }}>Total Exchanges:</strong>
            <div style={{ fontSize: '12px' }}>{report.total_exchanges ?? '-'}</div>
          </div>
        </div>
      </div>

      {/* Urgency Assessment */}
      <div style={{
        backgroundColor: '#ffffff',
        border: '2px solid ' + getUrgencyColor(report.urgency_assessment?.level),
        borderRadius: '6px',
        marginBottom: '15px',
        overflow: 'hidden'
      }}>
        <div style={{
          backgroundColor: getUrgencyColor(report.urgency_assessment?.level),
          color: '#ffffff',
          padding: '8px 12px',
          fontSize: '14px',
          fontWeight: 'bold'
        }}>
          ⚠️
          URGENCY ASSESSMENT: {report.urgency_assessment?.level || 'N/A'}
        </div>
        <div style={{
          padding: '10px 12px',
          backgroundColor: getUrgencyBg(report.urgency_assessment?.level)
        }}>
          <p style={{ margin: 0, fontSize: '13px' }}>
            {report.urgency_assessment?.reasoning || 'No reasoning provided'}
          </p>
        </div>
      </div>

      {/* Patient Information */}
      <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid #dee2e6',
        borderRadius: '6px',
        marginBottom: '15px'
      }}>
        <div style={{
          backgroundColor: '#22c17b',
          color: '#ffffff',
          padding: '8px 12px',
          fontSize: '14px',
          fontWeight: 'bold'
        }}>
          👤
          Patient Information
        </div>
        <div style={{
          padding: '12px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px'
        }}>
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #e9ecef'
          }}>
            <strong style={{ color: '#6c757d', display: 'block', marginBottom: '3px', fontSize: '12px' }}>Age</strong>
            <span style={{ fontSize: '13px' }}>{report.patient_information?.age || 'Not provided'}</span>
          </div>
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #e9ecef'
          }}>
            <strong style={{ color: '#6c757d', display: 'block', marginBottom: '3px', fontSize: '12px' }}>Gender</strong>
            <span style={{ fontSize: '13px' }}>{report.patient_information?.gender || 'Not provided'}</span>
          </div>
        </div>
      </div>

      {/* Primary Symptoms */}
      <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid #dee2e6',
        borderRadius: '6px',
        marginBottom: '15px'
      }}>
        <div style={{
          backgroundColor: '#007bff',
          color: '#ffffff',
          padding: '8px 12px',
          fontSize: '14px',
          fontWeight: 'bold'
        }}>
          📊
          Primary Symptoms Analysis
        </div>
        <div style={{ padding: '12px' }}>
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#495057', marginBottom: '6px', display: 'block', fontSize: '12px' }}>Reported Symptoms:</strong>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              marginBottom: '10px'
            }}>
              {(report.symptom_analysis?.primary_symptoms || []).length > 0 ? (
                report.symptom_analysis.primary_symptoms.map((symptom, idx) => (
                  <span key={idx} style={{
                    backgroundColor: '#6c757d',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: '500'
                  }}>{symptom}</span>
                ))
              ) : (
                <span style={{ color: '#6c757d', fontSize: '12px' }}>No symptoms recorded</span>
              )}
            </div>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '8px'
          }}>
            <div style={{
              backgroundColor: '#f8f9fa',
              border: '1px solid #e9ecef',
              borderRadius: '4px',
              padding: '8px'
            }}>
              <span style={{ color: '#6c757d', fontSize: '11px' }}>Duration:</span>
              <div style={{ fontSize: '12px' }}>{report.symptom_analysis?.duration || 'Not specified'}</div>
            </div>
            <div style={{
              backgroundColor: '#f8f9fa',
              border: '1px solid #e9ecef',
              borderRadius: '4px',
              padding: '8px'
            }}>
              <span style={{ color: '#6c757d', fontSize: '11px' }}>Severity:</span>
              <div style={{ fontSize: '12px' }}>{report.symptom_analysis?.severity || 'Not specified'}</div>
            </div>
            <div style={{
              backgroundColor: '#f8f9fa',
              border: '1px solid #e9ecef',
              borderRadius: '4px',
              padding: '8px'
            }}>
              <strong style={{ color: '#6c757d', fontSize: '11px' }}>Location:</strong>
              <div style={{ fontSize: '12px' }}>{report.symptom_analysis?.location || 'Not specified'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Possible Conditions */}
      <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid #dee2e6',
        borderRadius: '6px',
        marginBottom: '15px'
      }}>
        <div style={{
          backgroundColor: '#ffc107',
          color: '#000000',
          padding: '8px 12px',
          fontSize: '14px',
          fontWeight: 'bold'
        }}>
          🔍
          Possible Conditions
        </div>
        <div style={{ padding: '12px' }}>
          {(report.possible_conditions || []).length > 0 ? (
            <ol style={{ margin: 0, paddingLeft: '16px' }}>
              {report.possible_conditions.map((condition, index) => (
                <li key={index} style={{
                  marginBottom: '4px',
                  fontSize: '13px',
                  lineHeight: '1.4'
                }}>{condition}</li>
              ))}
            </ol>
          ) : (
            <p style={{ color: '#6c757d', margin: 0, fontSize: '12px' }}>No conditions listed</p>
          )}
          <div style={{
            backgroundColor: '#e3f2fd',
            border: '1px solid #2196f3',
            borderRadius: '4px',
            padding: '8px',
            marginTop: '10px'
          }}>
            <strong style={{ color: '#1976d2', fontSize: '11px' }}>
              {/* ⚠️ */}
              Important Note:</strong>
            <p style={{ margin: '3px 0 0 0', color: '#1976d2', fontSize: '11px' }}>
              These are AI-generated suggestions based on reported symptoms. They are <strong>not medical diagnoses</strong> and should not replace professional medical consultation.
            </p>
          </div>
        </div>
      </div>

      {/* Contextual Information */}
      {report.contextual_information && (
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #dee2e6',
          borderRadius: '6px',
          marginBottom: '15px'
        }}>
          <div style={{
            backgroundColor: '#17a2b8',
            color: '#ffffff',
            padding: '8px 12px',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            📋
            Contextual Information
          </div>
          <div style={{ padding: '12px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '8px'
            }}>
              <div style={{
                backgroundColor: '#f8f9fa',
                border: '1px solid #e9ecef',
                borderRadius: '4px',
                padding: '8px'
              }}>
                <strong style={{ color: '#495057', fontSize: '11px' }}>Triggers:</strong>
                <div style={{ marginTop: '3px', fontSize: '12px' }}>{report.contextual_information.triggers || 'Not mentioned'}</div>
              </div>
              <div style={{
                backgroundColor: '#f8f9fa',
                border: '1px solid #e9ecef',
                borderRadius: '4px',
                padding: '8px'
              }}>
                <strong style={{ color: '#495057', fontSize: '11px' }}>Alleviating Factors:</strong>
                <div style={{ marginTop: '3px', fontSize: '12px' }}>{report.contextual_information.alleviating_factors || 'Not mentioned'}</div>
              </div>
            </div>
            <div style={{
              backgroundColor: '#f8f9fa',
              border: '1px solid #e9ecef',
              borderRadius: '4px',
              padding: '8px',
              marginTop: '8px'
            }}>
              <strong style={{ color: '#495057', fontSize: '11px' }}>Associated Symptoms:</strong>
              <div style={{ marginTop: '3px', fontSize: '12px' }}>{report.contextual_information.associated_symptoms || 'Not mentioned'}</div>
            </div>
          </div>
        </div>
      )}

      {/* Page Break Before Recommendations */}
      <div style={{
        pageBreakBefore: 'always',
        breakBefore: 'page',
        display: 'block',
        height: '1px',
        marginBottom: '20px'
      }}></div>

      {/* Recommendations */}
      <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid #dee2e6',
        borderRadius: '6px',
        marginBottom: '15px'
      }}>
        <div style={{
          backgroundColor: '#28a745',
          color: '#ffffff',
          padding: '8px 12px',
          fontSize: '14px',
          fontWeight: 'bold'
        }}>
          💡
          Medical Recommendations
        </div>
        <div style={{ padding: '12px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '12px',
            marginBottom: '8px'
          }}>
            <div>
              <h4 style={{
                color: '#007bff',
                marginBottom: '8px',
                fontSize: '13px'
              }}>Immediate Actions</h4>
              {(report.recommendations?.immediate_actions || []).length > 0 ? (
                <ul style={{ margin: 0, paddingLeft: '16px' }}>
                  {report.recommendations.immediate_actions.map((action, index) => (
                    <li key={index} style={{
                      marginBottom: '4px',
                      fontSize: '12px',
                      lineHeight: '1.4'
                    }}>{action}</li>
                  ))}
                </ul>
              ) : (
                <p style={{ color: '#6c757d', margin: 0, fontSize: '12px' }}>No immediate actions listed</p>
              )}
            </div>
            <div>
              <h4 style={{
                color: '#ffc107',
                marginBottom: '8px',
                fontSize: '13px'
              }}>When to Seek Care</h4>
              <div style={{
                backgroundColor: '#fff3cd',
                border: '1px solid #ffc107',
                borderRadius: '4px',
                padding: '8px'
              }}>
                <p style={{ margin: 0, fontSize: '11px' }}>
                  {report.recommendations?.when_to_seek_care || 'No specific guidance provided'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div style={{
        backgroundColor: '#fff3cd',
        border: '2px solid #ffc107',
        borderRadius: '6px',
        padding: '12px',
        marginBottom: '15px'
      }}>
        <h4 style={{
          color: '#856404',
          marginBottom: '6px',
          fontSize: '13px'
        }}>⚠️ Important Medical Disclaimer</h4>
        <p style={{
          color: '#856404',
          margin: 0,
          fontSize: '11px',
          lineHeight: '1.4'
        }}>
          {report.medical_disclaimer || 'This report is generated by AI and is for informational purposes only. It should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare providers with any questions you may have regarding a medical condition.'}
        </p>
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        borderTop: '2px solid #22c17b',
        paddingTop: '10px',
        color: '#6c757d',
        fontSize: '10px'
      }}>
        <p style={{ margin: 0 }}>Generated by Needaan AI Health Assistant</p>
        <p style={{ margin: '3px 0 0 0' }}>Report ID: {report.report_id} | {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

// Report Modal (pure CSS, inline icons)
const ReportModal = ({ reportData, show, onHide, onDownload, onShare }) => {
  const [showConversationLog, setShowConversationLog] = useState(false);

  const getUrgencyColor = (level) => {
    switch ((level || '').toUpperCase()) {
      case 'HIGH': return '#dc3545';
      case 'MEDIUM': return '#ffc107';
      case 'LOW': return '#28a745';
      default: return '#6c757d';
    }
  };

  const getUrgencyBg = (level) => {
    switch ((level || '').toUpperCase()) {
      case 'HIGH': return '#f8d7da';
      case 'MEDIUM': return '#fff3cd';
      case 'LOW': return '#d1e7dd';
      default: return '#e2e3e5';
    }
  };


  if (!show || !reportData?.report) return null;
  const { report } = reportData;


  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', borderRadius: '8px', maxWidth: '95%', maxHeight: '95%', width: '1200px', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
        {/* Header */}
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #dee2e6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', color: '#495057' }}>
            <IconBot style={{ marginRight: '10px', color: '#007bff' }} />
            Health Assessment Report
          </h3>
          <button onClick={onHide} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#6c757d' }}>
            <IconClose />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: 0, overflowY: 'auto', flex: 1 }}>
          <div style={{ backgroundColor: '#22c17b', color: '#fff', padding: '14px 24px', borderBottom: '1px solid #dee2e6' }}>
            <h4 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>🩺 Health Consultation Report</h4>
          </div>
          <div style={{ backgroundColor: '#f8f9fa', padding: '14px 24px', borderBottom: '1px solid #dee2e6' }}>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <div><span style={{ color: '#6c757d', fontWeight: 600, marginRight: 6 }}>Report ID:</span><code style={{ fontSize: '0.85rem' }}>{report.report_id}</code></div>
              <div><span style={{ color: '#6c757d', fontWeight: 600, marginRight: 6 }}>Generated:</span><span>{new Date(report.generated_at).toLocaleString()}</span></div>
              <div><span style={{ color: '#6c757d', fontWeight: 600, marginRight: 6 }}>Total Exchanges:</span><span>{report.total_exchanges ?? '-'}</span></div>
            </div>
          </div>

          {/* Conversation Log */}
          <div style={{ backgroundColor: 'white', border: '1px solid #dee2e6', borderRadius: '8px', marginBottom: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <div 
              style={{ 
                padding: '16px 20px', 
                borderBottom: showConversationLog ? '1px solid #dee2e6' : 'none', 
                backgroundColor: '#fff',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setShowConversationLog(!showConversationLog)}
            >
              <h6 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>💬 Conversation Log</h6>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                color: '#6c757d',
                fontSize: '14px'
              }}>
                <span style={{ fontSize: '16px' }}>
                  {showConversationLog ? 'Hide' : 'Show'} ({(report.conversation_log || []).length} messages)
                </span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  style={{ 
                    transform: showConversationLog ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </div>
            </div>
            {showConversationLog && (
              <div style={{ padding: '20px', maxHeight: '400px', overflowY: 'auto' }}>
                {(report.conversation_log || []).length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {report.conversation_log.map((entry, index) => (
                      <div key={index} style={{
                        display: 'flex',
                        flexDirection: entry.type === 'user' ? 'row-reverse' : 'row',
                        alignItems: 'flex-start',
                        gap: '12px'
                      }}>
                        {/* Message Bubble */}
                        <div style={{
                          maxWidth: '70%',
                          padding: '12px 16px',
                          borderRadius: '18px',
                          backgroundColor: entry.type === 'user' ? '#007bff' : '#f8f9fa',
                          color: entry.type === 'user' ? 'white' : '#333',
                          border: entry.type === 'assistant' ? '1px solid #e9ecef' : 'none',
                          wordWrap: 'break-word'
                        }}>
                          <div style={{ fontSize: '14px', lineHeight: '1.4' }}>
                            {entry.content}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', color: '#6c757d', padding: '20px' }}>
                    <p style={{ margin: 0 }}>No conversation log available</p>
                  </div>
                )}
              </div>
            )}
          </div>
          <div style={{ padding: '24px' }}>
            {/* Urgency */}
            <div style={{ backgroundColor: 'white', border: '1px solid #dee2e6', borderRadius: '8px', marginBottom: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <div style={{ padding: '16px 20px', borderBottom: '1px solid #dee2e6', backgroundColor: '#fff' }}>
                <h5 style={{ margin: 0, display: 'flex', alignItems: 'center' }}>
                  <span style={{ backgroundColor: getUrgencyColor(report.urgency_assessment?.level), color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600', marginRight: '12px' }}>
                    {report.urgency_assessment?.level || 'N/A'} URGENCY
                  </span>
                  <h6 style={{ fontSize: '16px', fontWeight: '600' }}>
                  Urgency Assessment
                  </h6>
                </h5>
              </div>
              <div style={{ padding: '20px' }}>
                <div style={{ backgroundColor: getUrgencyBg(report.urgency_assessment?.level), border: `1px solid ${getUrgencyColor(report.urgency_assessment?.level)}`, padding: '16px', borderRadius: '6px', color: '#495057' }}>
                  <span>Assessment:</span> {report.urgency_assessment?.reasoning || 'No reasoning provided'}
                </div>
              </div>
            </div>


            {/* Patient Info & Symptoms */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px', marginBottom: '24px' }}>
              <div style={{ backgroundColor: 'white', border: '1px solid #dee2e6', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <div style={{ padding: '16px 20px', borderBottom: '1px solid #dee2e6', backgroundColor: '#fff' }}>
                  <h6 style={{ margin: 0, fontWeight: '600', fontSize: '16px' }}>Patient Information</h6>
                </div>
                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div style={{ padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '6px', border: '1px solid #e9ecef' }}>
                      <span style={{ display: 'block', color: '#6c757d', fontSize: '0.9rem' }}>Age</span>
                      <span>{report.patient_information?.age || 'Not provided'}</span>
                    </div>
                    <div style={{ padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '6px', border: '1px solid #e9ecef' }}>
                      <span style={{ display: 'block', color: '#6c757d', fontSize: '0.9rem' }}>Gender</span>
                      <span>{report.patient_information?.gender || 'Not provided'}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ backgroundColor: 'white', border: '1px solid #dee2e6', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <div style={{ padding: '16px 20px', borderBottom: '1px solid #dee2e6', backgroundColor: '#fff' }}>
                  <h6 style={{ margin: 0, fontWeight: '600', fontSize: '16px' }}>Primary Symptoms</h6>
                </div>
                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                    {(report.symptom_analysis?.primary_symptoms || []).length > 0 ? (
                      report.symptom_analysis.primary_symptoms.map((symptom, idx) => (
                        <span key={idx} style={{ backgroundColor: '#6c757d', color: 'white', padding: '6px 12px', borderRadius: '16px', fontSize: '0.85rem', fontWeight: '500' }}>{symptom}</span>
                      ))
                    ) : (
                      <span style={{ color: '#6c757d' }}>No symptoms recorded</span>
                    )}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '8px' }}>
                    <div style={{ background: '#f8f9fa', border: '1px solid #e9ecef', borderRadius: '6px', padding: '10px' }}>
                      <span style={{ color: '#6c757d' }}>Duration:</span> {report.symptom_analysis?.duration || '-'}
                    </div>
                    <div style={{ background: '#f8f9fa', border: '1px solid #e9ecef', borderRadius: '6px', padding: '10px' }}>
                      <span style={{ color: '#6c757d' }}>Severity:</span> {report.symptom_analysis?.severity || '-'}
                    </div>
                  </div>
                  <div style={{ background: '#f8f9fa', border: '1px solid #e9ecef', borderRadius: '6px', padding: '10px', marginTop: '12px' }}>
                    <span style={{ color: '#6c757d' }}>Location:</span> {report.symptom_analysis?.location || 'Not specified'}
                  </div>
                </div>
              </div>
            </div>

            {/* Possible Conditions */}
            <div style={{ backgroundColor: 'white', border: '1px solid #dee2e6', borderRadius: '8px', marginBottom: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <div style={{ padding: '16px 20px', borderBottom: '1px solid #dee2e6', backgroundColor: '#fff' }}>
                <h6 style={{ margin: 0, fontWeight: '600', fontSize: '16px' }}>Possible Conditions</h6>
              </div>
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                  {(report.possible_conditions || []).length > 0 ? (
                    report.possible_conditions.map((condition, index) => (
                      <div key={index} style={{ padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '6px', border: '1px solid #e9ecef' }}>
                        <span style={{ fontWeight: '500' }}>{condition}</span>
                      </div>
                    ))
                  ) : (
                    <span style={{ color: '#6c757d' }}>No conditions listed</span>
                  )}
                </div>
                <div style={{ color: '#0d6efd', fontSize: '0.9rem', marginTop: '8px' }}>These are AI suggestions only </div>
              </div>
            </div>

            {/* Contextual Information */}
            <div style={{ backgroundColor: 'white', border: '1px solid #dee2e6', borderRadius: '8px', marginBottom: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <div style={{ padding: '16px 20px', borderBottom: '1px solid #dee2e6', backgroundColor: '#fff' }}>
                <h6 style={{ margin: 0, fontWeight: '600', fontSize: '16px' }}>Contextual Information</h6>
              </div>
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
                  <div style={{ background: '#f8f9fa', border: '1px solid #e9ecef', borderRadius: '6px', padding: '12px' }}>
                    <span>Triggers:</span>
                    <div>{report.contextual_information?.triggers || 'Not mentioned'}</div>
                  </div>
                  <div style={{ background: '#f8f9fa', border: '1px solid #e9ecef', borderRadius: '6px', padding: '12px' }}>
                    <span>Alleviating Factors:</span>
                    <div>{report.contextual_information?.alleviating_factors || 'Not mentioned'}</div>
                  </div>
                </div>
                <div style={{ background: '#f8f9fa', border: '1px solid #e9ecef', borderRadius: '6px', padding: '12px', marginTop: '12px' }}>
                  <span>Associated Symptoms:</span>
                  <div>{report.contextual_information?.associated_symptoms || 'Not mentioned'}</div>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div style={{ backgroundColor: 'white', border: '1px solid #dee2e6', borderRadius: '8px', marginBottom: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <div style={{ padding: '16px 20px', borderBottom: '1px solid #dee2e6', backgroundColor: '#fff' }}>
                <h6 style={{ margin: 0, fontWeight: '600', fontSize: '16px' }}>Recommendations</h6>
              </div>
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
                  <div>
                    <h5 style={{ color: '#007bff', marginBottom: '12px',fontSize: '18px',fontWeight: '500' }}>Immediate Actions</h5>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {(report.recommendations?.immediate_actions || []).length > 0 ? (
                        report.recommendations.immediate_actions.map((action, index) => (
                          <li key={index} style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start' }}>
                            <span style={{ color: '#28a745', marginRight: '8px', marginTop: '2px' }}>✓</span>
                            {action}
                          </li>
                        ))
                      ) : (
                        <li style={{ color: '#6c757d' }}>No immediate actions listed</li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h5 style={{ color: '#ffc107', marginBottom: '12px',fontSize: '18px',fontWeight: '500' }}>When to Seek Care</h5>
                    <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '6px', border: '1px solid #e9ecef' }}>
                      <small>{report.recommendations?.when_to_seek_care || 'No specific guidance provided'}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            {/* Action Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
              <button onClick={onDownload} style={{ background: '#6f42c1', color: '#fff', border: 'none', padding: '4px 12px', borderRadius: '8px', cursor: 'pointer', boxShadow: '0 6px 16px rgba(111,66,193,0.3)', fontWeight: 400 }}>
                <IconDownload style={{ marginRight: '4px' }} />
                Download Report
              </button>
              {/* <button onClick={onShare} style={{ background: '#28a745', color: '#fff', border: 'none', padding: '4px 12px', borderRadius: '8px', cursor: 'pointer', boxShadow: '0 6px 16px rgba(40,167,69,0.3)', fontWeight: 400 }}>
                <IconPrint style={{ marginRight: '4px' }} />
                Share Report
              </button> */}
            </div>

            {/* Disclaimer */}
            <div style={{ backgroundColor: '#fff3cd', border: '1px solid #ffc107', borderRadius: '8px', padding: '20px', marginBottom: 0 }}>
              <h5 style={{ color: '#856404', marginBottom: '8px',fontSize: '18px',fontWeight: '500' }}>⚠️ Important Medical Disclaimer</h5>
              <small style={{ color: '#856404' }}>{report.medical_disclaimer}</small>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: '16px 24px', borderTop: '1px solid #dee2e6', display: 'flex', justifyContent: 'space-between', backgroundColor: '#f8f9fa' }}>
          <div />
          <button onClick={onHide} style={{ backgroundColor: '#6c757d', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.9rem' }}>
            <IconClose style={{ marginRight: '6px' }} /> Close
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App({ sessionId, onResponse }) {
  const params = useParams();
  const session_id = sessionId || params.id; // Use prop first, then URL parameters as fallback
  const [navBarResponse, setNavBarResponse] = useState("");
  const [chatResponses, setChatResponses] = useState("");

  // SSR-safe mounting system
  const [isMounted, setIsMounted] = useState(false);
  const isClient = typeof window !== 'undefined';

  // State for conditional UI elements
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [lastAiMessage, setLastAiMessage] = useState("");
  const [isGenderSelectionActive, setIsGenderSelectionActive] = useState(false);
  const [genderSelectionCompleted, setGenderSelectionCompleted] = useState(false);
  const [hasConnectedOnce, setHasConnectedOnce] = useState(false);

  // Typing indicator state
  const [isTyping, setIsTyping] = useState(false);

  // Report state with modal control
  const [reportData, setReportData] = useState(null); // expects full payload with { type, message, report }
  const [showReportModal, setShowReportModal] = useState(false);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);

  // Conversation count state for button control
  const [conversationCount, setConversationCount] = useState(0);
  const [showInputAfterCount, setShowInputAfterCount] = useState(false);

  // Define handleNavBarResponse function
  const handleNavBarResponse = (value) => {
    setNavBarResponse(value);
  };

  // Use centralized WebSocket connection (always call hook)
  const webSocketContext = useWebSocket();
  const {
    messages: socketMessages = [],
    sendMessage = () => {},
    isSessionStarted = false,
    connectionStatus = 'disconnected',
    error = null,
    sessionId: wsSessionId = session_id,
    initialMessage = null,
    connectWebSocket = () => {}
  } = isMounted ? webSocketContext : {};

  // SessionStorage helper functions
  const getStorageKey = useCallback((key) => {
    return `needaan_chartbod_${key}_${wsSessionId || session_id}`;
  }, [wsSessionId, session_id]);

  const loadFromStorage = useCallback((key, defaultValue) => {
    if (!isClient || !isMounted) return defaultValue;
    try {
      const item = sessionStorage.getItem(getStorageKey(key));
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn(`Failed to load ${key} from storage:`, error);
      return defaultValue;
    }
  }, [getStorageKey, isClient, isMounted]);

  const saveToStorage = useCallback((key, value) => {
    if (!isClient || !isMounted) return;
    try {
      sessionStorage.setItem(getStorageKey(key), JSON.stringify(value));
    } catch (error) {
      console.warn(`Failed to save ${key} to storage:`, error);
    }
  }, [getStorageKey, isClient, isMounted]);

  const clearStorageForSession = useCallback(() => {
    if (!isClient || !isMounted) return;
    try {
      const keys = Object.keys(sessionStorage);
      const sessionKeys = keys.filter(key => key.includes(`_${wsSessionId || session_id}`));
      sessionKeys.forEach(key => sessionStorage.removeItem(key));
    } catch (error) {
      console.warn('Failed to clear session storage:', error);
    }
  }, [isClient, isMounted, wsSessionId, session_id]);

  // Create isConnected helper from connectionStatus
  const isConnected = connectionStatus === 'connected';

  const [messages, setMessages] = useState([]);

  // Enhanced state setters with automatic persistence
  const setSelectedAgeWithStorage = useCallback((value) => {
    setSelectedAge(value);
    saveToStorage('selectedAge', value);
  }, [saveToStorage]);

  const setSelectedGenderWithStorage = useCallback((value) => {
    setSelectedGender(value);
    saveToStorage('selectedGender', value);
  }, [saveToStorage]);

  const setLastAiMessageWithStorage = useCallback((value) => {
    setLastAiMessage(value);
    saveToStorage('lastAiMessage', value);
  }, [saveToStorage]);

  const setIsGenderSelectionActiveWithStorage = useCallback((value) => {
    setIsGenderSelectionActive(value);
    saveToStorage('isGenderSelectionActive', value);
  }, [saveToStorage]);

  const setGenderSelectionCompletedWithStorage = useCallback((value) => {
    setGenderSelectionCompleted(value);
    saveToStorage('genderSelectionCompleted', value);
  }, [saveToStorage]);

  const setHasConnectedOnceWithStorage = useCallback((value) => {
    setHasConnectedOnce(value);
    saveToStorage('hasConnectedOnce', value);
  }, [saveToStorage]);

  const setConversationCountWithStorage = useCallback((value) => {
    setConversationCount(value);
    saveToStorage('conversationCount', value);
  }, [saveToStorage]);

  const setShowInputAfterCountWithStorage = useCallback((value) => {
    setShowInputAfterCount(value);
    saveToStorage('showInputAfterCount', value);
  }, [saveToStorage]);

  const setReportDataWithStorage = useCallback((value) => {
    setReportData(value);
    saveToStorage('reportData', value);
  }, [saveToStorage]);

  const setMessagesWithStorage = useCallback((value) => {
    setMessages(value);
    saveToStorage('messages', value);
  }, [saveToStorage]);

  // SSR-safe mounting effect
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // State restoration system
  useEffect(() => {
    if (!isMounted) return;

    // Restore all critical states from sessionStorage
    const restoredSelectedAge = loadFromStorage('selectedAge', '');
    const restoredSelectedGender = loadFromStorage('selectedGender', '');
    const restoredLastAiMessage = loadFromStorage('lastAiMessage', '');
    const restoredIsGenderSelectionActive = loadFromStorage('isGenderSelectionActive', false);
    const restoredGenderSelectionCompleted = loadFromStorage('genderSelectionCompleted', false);
    const restoredHasConnectedOnce = loadFromStorage('hasConnectedOnce', false);
    const restoredConversationCount = loadFromStorage('conversationCount', 0);
    const restoredShowInputAfterCount = loadFromStorage('showInputAfterCount', false);
    const restoredReportData = loadFromStorage('reportData', null);
    const restoredMessages = loadFromStorage('messages', []);

    // Apply restored states
    if (restoredSelectedAge) setSelectedAge(restoredSelectedAge);
    if (restoredSelectedGender) setSelectedGender(restoredSelectedGender);
    if (restoredLastAiMessage) setLastAiMessage(restoredLastAiMessage);
    setIsGenderSelectionActive(restoredIsGenderSelectionActive);
    setGenderSelectionCompleted(restoredGenderSelectionCompleted);
    setHasConnectedOnce(restoredHasConnectedOnce);
    setConversationCount(restoredConversationCount);
    setShowInputAfterCount(restoredShowInputAfterCount);
    if (restoredReportData) setReportData(restoredReportData);
    if (restoredMessages && restoredMessages.length > 0) setMessages(restoredMessages);

    console.log('✅ State restored from sessionStorage:', {
      selectedAge: restoredSelectedAge,
      selectedGender: restoredSelectedGender,
      conversationCount: restoredConversationCount,
      messagesCount: restoredMessages?.length || 0
    });
  }, [isMounted, loadFromStorage]);

  // All remaining hooks must be called before any conditional logic
  const { startChats } = useSessionStart();
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Handle initial message from WebSocket context
  useEffect(() => {
    if (!isMounted) return;
    
    // Check if we have initial message from context and no messages yet
    if (initialMessage && messages.length === 0) {
      console.log("📨 Received initial message from WebSocket context:", initialMessage);
      
      // Create initial message object
      const initialMessageObj = {
        id: `initial-${Date.now()}-${Math.random()}`,
        text: initialMessage,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        sender: "receiver",
        date: "Today",
        status: "received",
        type: "initial"
      };
      
      // Add initial message to messages state with persistence
      setMessagesWithStorage([initialMessageObj]);
      setLastAiMessageWithStorage(initialMessage);
      
      // Check if this initial message requires gender selection
      if (initialMessage.toLowerCase().includes("gender") && !genderSelectionCompleted && !selectedGender) {
        setIsGenderSelectionActiveWithStorage(true);
      }
      
      // Mark as connected once we have initial message
      setHasConnectedOnceWithStorage(true);
      
      console.log("✅ Initial message added to chat:", initialMessageObj);
    }
  }, [isMounted, initialMessage, messages.length, genderSelectionCompleted, selectedGender, setMessagesWithStorage, setLastAiMessageWithStorage, setIsGenderSelectionActiveWithStorage, setHasConnectedOnceWithStorage]);

  // Helper: derive total exchanges from current chat messages
  const computeExchangesFromMessages = useCallback((msgs) => {
    try {
      return (msgs || []).filter(m => m && (m.sender === 'sender' || m.sender === 'receiver')).length;
    } catch (_) {
      return (msgs || []).length || 0;
    }
  }, []);

  // Handle incoming WebSocket messages
  useEffect(() => {
    if (!isMounted) return;
    
    if (socketMessages && socketMessages.length > 0) {
      const latestMessage = socketMessages[socketMessages.length - 1];

      // Validate latestMessage structure to prevent server errors
      if (!latestMessage || typeof latestMessage !== 'object') {
        console.warn("⚠️ Invalid message format received:", latestMessage);
        return;
      }

      // If server sent a report, show it in modal instead of inline
      if (latestMessage && latestMessage.type === 'report_generated') {
        // Prefer backend count; fallback to current chat-derived count
        const backendCount = latestMessage?.report?.total_exchanges;
        const derivedCount = computeExchangesFromMessages(messages);
        const total_exchanges = typeof backendCount === 'number' ? backendCount : derivedCount;

        const reportWithCount = {
          ...latestMessage.report,
          total_exchanges,
        };

        // Set report data and show modal with persistence
        setReportDataWithStorage({
          type: 'report_generated',
          message: latestMessage.message,
          report: reportWithCount
        });
        setShowReportModal(true);
        setIsGeneratingReport(false);

        console.log("📋 Report received, showing modal:", reportWithCount);
        return;
      }
      
      // Handle chat type messages with the new format
      if (latestMessage && (latestMessage.type === 'chat' || latestMessage.type === 'chat_response' || latestMessage.message)) {
        // Extract conversation count from WebSocket response with persistence
        if (typeof latestMessage.conversation_count === 'number') {
          setConversationCountWithStorage(latestMessage.conversation_count);
          console.log("📊 Conversation count updated:", latestMessage.conversation_count);
        }

        // Safely extract message text to prevent server errors
        let messageText;
        if (latestMessage.type === 'chat' || latestMessage.type === 'chat_response') {
          messageText = typeof latestMessage.message === 'string' ? latestMessage.message :
            typeof latestMessage.message === 'object' ? JSON.stringify(latestMessage.message) :
              String(latestMessage.message || 'Empty message');
        } else {
          messageText = typeof latestMessage.message === 'string' ? latestMessage.message :
            typeof latestMessage.message === 'object' ? JSON.stringify(latestMessage.message) :
              String(latestMessage.message || 'Empty message');
        }

        const newMessage = {
          id: `ws-${Date.now()}-${Math.random()}`,
          text: messageText,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          sender: "receiver",
          date: "Today",
          status: "received",
          type: latestMessage.type || "chat"
        };

        setMessages(prev => {
          // Check if message already exists to avoid duplicates
          const exists = prev.some(msg => msg.text === newMessage.text && msg.time === newMessage.time);
          if (!exists) {
            // Update last AI message for conditional UI with persistence
            setLastAiMessageWithStorage(newMessage.text);

            // Check if this message requires gender selection (only for the first time)
            if (newMessage.text.toLowerCase().includes("gender") && !genderSelectionCompleted && !selectedGender) {
              setIsGenderSelectionActiveWithStorage(true);
            }

            // Mark as connected once we receive first message
            if (!hasConnectedOnce) {
              setHasConnectedOnceWithStorage(true);
            }

            // Hide typing indicator when response arrives
            setIsTyping(false);

            const updatedMessages = [...prev, newMessage];
            // Save to storage
            saveToStorage('messages', updatedMessages);
            return updatedMessages;
          }
          return prev;
        });
        console.log("set-2");
      }
    }
  }, [isMounted, socketMessages, genderSelectionCompleted, selectedGender, hasConnectedOnce, messages, setLastAiMessageWithStorage, setIsGenderSelectionActiveWithStorage, setHasConnectedOnceWithStorage, setConversationCountWithStorage, setReportDataWithStorage, saveToStorage, computeExchangesFromMessages]);

  // Create sendReportRequest function using centralized WebSocket
  const sendReportRequest = useCallback(() => {
    if (!isMounted) return;
    
    // Check if conversation count is sufficient
    if (conversationCount < 5) {
      console.warn(`⚠️ Cannot generate report: Need at least 5 conversations (current: ${conversationCount})`);
      return;
    }

    if (sendMessage) {
      setIsGeneratingReport(true);
      const reportRequest = {
        type: "get_report"
      };
      console.log("📋 Sending report request:", reportRequest);
      sendMessage(reportRequest);
    } else {
      console.error("❌ SendMessage function not available");
    }
  }, [isMounted, conversationCount, sendMessage]);

  // Handle send message function
  const handleSend = useCallback(() => {
    if (!isMounted) return;
    if (input.trim() === "") return;

    // Check if WebSocket is connected and session is started
    if (!isConnected || !isSessionStarted) {
      console.warn("Cannot send message: WebSocket not connected or session not started");
      return;
    }

    // Add user message to local state
    const newMsg = {
      id: `user-${Date.now()}-${Math.random()}`,
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      sender: "sender",
      date: "Today",
      status: "sent",
    };

    setMessages(prevMessages => {
      const updatedMessages = [...prevMessages, newMsg];
      saveToStorage('messages', updatedMessages);
      return updatedMessages;
    });
    console.log("set-3");

    // Show typing indicator when sending message
    setIsTyping(true);

    // Send message via WebSocket
    sendMessage(input);

    setInput("");
  }, [isMounted, input, isConnected, isSessionStarted, sendMessage, saveToStorage]);

  // Handle dropdown selections
  const handleAgeSelect = useCallback((age) => {
    if (!isMounted) return;
    setSelectedAgeWithStorage(age);
    // Auto-send the selected age
    if (age && isConnected && isSessionStarted) {
      const ageMsg = {
        id: `age-${Date.now()}-${Math.random()}`,
        text: age,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        sender: "sender",
        date: "Today",
        status: "sent",
      };
      setMessages(prevMessages => {
        const updatedMessages = [...prevMessages, ageMsg];
        saveToStorage('messages', updatedMessages);
        return updatedMessages;
      });
      console.log("set-4");

      // Show typing indicator when sending age
      setIsTyping(true);

      sendMessage(age);
    }
  }, [isMounted, isConnected, isSessionStarted, sendMessage, setSelectedAgeWithStorage, saveToStorage]);

  const handleGenderSelect = useCallback((gender) => {
    if (!isMounted) return;
    if (genderSelectionCompleted) return; // Prevent multiple selections

    setSelectedGenderWithStorage(gender);
    setGenderSelectionCompletedWithStorage(true);
    setIsGenderSelectionActiveWithStorage(false);

    // Auto-send the selected gender
    if (gender && isConnected && isSessionStarted) {
      const genderMsg = {
        id: `gender-${Date.now()}-${Math.random()}`,
        text: gender,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        sender: "sender",
        date: "Today",
        status: "sent",
      };
      setMessages(prevMessages => {
        const updatedMessages = [...prevMessages, genderMsg];
        saveToStorage('messages', updatedMessages);
        return updatedMessages;
      });
      console.log("set-5");

      // Show typing indicator when sending gender
      setIsTyping(true);

      sendMessage(gender);
    }
  }, [isMounted, genderSelectionCompleted, isConnected, isSessionStarted, sendMessage, setSelectedGenderWithStorage, setGenderSelectionCompletedWithStorage, setIsGenderSelectionActiveWithStorage, saveToStorage]);

  const groupByDate = useCallback((messages) => {
    return messages.reduce((acc, msg) => {
      (acc[msg.date] = acc[msg.date] || []).push(msg);
      return acc;
    }, {});
  }, []);

  // Early return with loading state if not mounted (SSR safety)
  if (!isMounted) {
    return (
      <div className="page-wrapper main-chatboad">
        <div className="main-wrapper">
          <div className="w-layout-blockcontainer container w-container">
            <Container fluid className="chat-container p-0">
              <Card className="chat-card">
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '400px',
                  flexDirection: 'column'
                }}>
                  <LoadingSpinner className="loading-spinner" style={{
                    animation: 'spin 1s linear infinite',
                    color: '#43ba7f',
                    marginBottom: '20px'
                  }} />
                  <p>Loading chat...</p>
                </div>
              </Card>
            </Container>
          </div>
        </div>
      </div>
    );
  }


  // Functions to handle report modal
  const handleDownloadReport = async () => {
    if (!reportData?.report) {
      console.error('No report data available for download');
      return;
    }

    try {
      // Wait for libraries to load if not already loaded
      if (!jsPDF || !html2canvas) {
        const [jsPDFModule, html2canvasModule] = await Promise.all([
          import('jspdf'),
          import('html2canvas')
        ]);
        jsPDF = jsPDFModule.default;
        html2canvas = html2canvasModule.default;
      }

      // Create a temporary container for the PDF content
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '0';
      tempContainer.style.width = '800px';
      tempContainer.style.backgroundColor = '#ffffff';
      document.body.appendChild(tempContainer);

      // Create React element and render it
      const { createRoot } = await import('react-dom/client');
      const root = createRoot(tempContainer);

      // Render the PDF component
      const PDFComponent = React.createElement(PDFReportComponent, { reportData });
      root.render(PDFComponent);

      // Wait for rendering to complete
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Generate canvas from the rendered content
      const canvas = await html2canvas(tempContainer.firstChild, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: 800,
        windowWidth: 800,
        height: tempContainer.firstChild.scrollHeight
      });

      // Calculate PDF dimensions
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Create PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Find page break elements to determine where to split
      const pageBreakElements = tempContainer.querySelectorAll('[style*="pageBreakBefore"], [style*="breakBefore"]');
      
      if (pageBreakElements.length > 0) {
        // Calculate the position of the page break using offsetTop
        const pageBreakElement = pageBreakElements[0];
        const breakPosition = pageBreakElement.offsetTop;
        
        // Calculate the break position in the canvas
        const canvasBreakPosition = Math.max(0, (breakPosition / tempContainer.firstChild.scrollHeight) * canvas.height);
        
        // Ensure we have a valid break position
        if (canvasBreakPosition > 0 && canvasBreakPosition < canvas.height) {
          // First page - content before the break
          const firstPageHeight = (canvasBreakPosition * imgWidth) / canvas.width;
          const firstPageCanvas = document.createElement('canvas');
          const firstPageCtx = firstPageCanvas.getContext('2d');
          firstPageCanvas.width = canvas.width;
          firstPageCanvas.height = Math.floor(canvasBreakPosition);
          
          if (firstPageCtx && firstPageCanvas.height > 0) {
            firstPageCtx.drawImage(canvas, 0, 0, canvas.width, Math.floor(canvasBreakPosition), 0, 0, canvas.width, Math.floor(canvasBreakPosition));
            
            pdf.addImage(firstPageCanvas.toDataURL('image/png'), 'PNG', 0, 0, imgWidth, firstPageHeight);
            
            // Second page - content after the break
            const remainingHeight = canvas.height - canvasBreakPosition;
            const secondPageHeight = (remainingHeight * imgWidth) / canvas.width;
            const secondPageCanvas = document.createElement('canvas');
            const secondPageCtx = secondPageCanvas.getContext('2d');
            secondPageCanvas.width = canvas.width;
            secondPageCanvas.height = Math.floor(remainingHeight);
            
            if (secondPageCtx && remainingHeight > 0) {
              secondPageCtx.drawImage(canvas, 0, Math.floor(canvasBreakPosition), canvas.width, Math.floor(remainingHeight), 0, 0, canvas.width, Math.floor(remainingHeight));
              
              pdf.addPage();
              pdf.addImage(secondPageCanvas.toDataURL('image/png'), 'PNG', 0, 0, imgWidth, secondPageHeight);
              
              // Add more pages if the second page is still too long
              let heightLeft = secondPageHeight - pageHeight;
              let position = pageHeight - secondPageHeight;
              
              while (heightLeft >= 0) {
                pdf.addPage();
                pdf.addImage(secondPageCanvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, secondPageHeight);
                heightLeft -= pageHeight;
                position -= pageHeight;
              }
            }
          }
        } else {
          // Use fallback method if break position is invalid
          let heightLeft = imgHeight;
          let position = 0;

          pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;

          while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }
        }
      } else {
        // Fallback to original method if no page breaks found
        let heightLeft = imgHeight;
        let position = 0;

        // Add first page
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Add additional pages if needed
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
      }

      // Download the PDF
      const fileName = `needaan-medical-report-${reportData.report.report_id || 'unknown'}.pdf`;
      pdf.save(fileName);

      // Cleanup
      root.unmount();
      document.body.removeChild(tempContainer);

      console.log('✅ PDF generated and downloaded successfully');
    } catch (error) {
      console.error('❌ Error generating PDF:', error);

      // Fallback to JSON download if PDF generation fails
      const dataStr = JSON.stringify(reportData.report, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
      const exportFileDefaultName = `medical-report-${reportData.report.report_id || 'unknown'}.json`;

      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();

      alert('PDF generation failed. Downloaded as JSON instead.');
    }
  };

  const handleShareReport = async () => {
    if (reportData?.report) {
      const shareData = {
        title: 'Medical Report',
        text: `Medical Report - ${reportData.report.report_id}`,
        url: window.location.href
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          console.log('Error sharing:', err);
        }
      } else {
        // Fallback to clipboard
        try {
          await navigator.clipboard.writeText(JSON.stringify(reportData.report, null, 2));
          alert('Report copied to clipboard!');
        } catch (err) {
          console.log('Error copying to clipboard:', err);
        }
      }
    }
  };

  // Function to render report inline in chat
  const renderReportInline = (report) => {
    const getUrgencyColor = (level) => {
      switch ((level || '').toUpperCase()) {
        case 'HIGH': return '#dc3545';
        case 'MEDIUM': return '#ffc107';
        case 'LOW': return '#28a745';
        default: return '#6c757d';
      }
    };

    const getUrgencyBg = (level) => {
      switch ((level || '').toUpperCase()) {
        case 'HIGH': return '#f8d7da';
        case 'MEDIUM': return '#fff3cd';
        case 'LOW': return '#d1e7dd';
        default: return '#e2e3e5';
      }
    };

    return (
      <div style={{
        border: '1px solid #dee2e6',
        borderRadius: '12px',
        overflow: 'hidden',
        marginTop: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(90deg, #0c9a63, #22c17b)',
          color: '#fff',
          padding: '16px 20px'
        }}>
          <h4 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            🩺 Health Consultation Report
          </h4>
        </div>

        {/* Meta Info */}
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '14px 20px',
          borderBottom: '1px solid #dee2e6'
        }}>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '0.9rem' }}>
            <div>
              <span style={{ color: '#6c757d', fontWeight: 600, marginRight: 6 }}>Report ID:</span>
              <code style={{ fontSize: '0.85rem' }}>{report.report_id}</code>
            </div>
            <div>
              <span style={{ color: '#6c757d', fontWeight: 600, marginRight: 6 }}>Generated:</span>
              <span>{new Date(report.generated_at).toLocaleString()}</span>
            </div>
            <div>
              <span style={{ color: '#6c757d', fontWeight: 600, marginRight: 6 }}>Total Exchanges:</span>
              <span>{report.total_exchanges ?? '-'}</span>
            </div>
          </div>
        </div>

        <div style={{ padding: '20px' }}>
          {/* Urgency Assessment */}
          <div style={{ marginBottom: '20px' }}>
            <h5 style={{
              margin: '0 0 10px 0',
              display: 'flex',
              alignItems: 'center',
              fontSize: '1.1rem'
            }}>
              <span style={{
                backgroundColor: getUrgencyColor(report.urgency_assessment?.level),
                color: 'white',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: '600',
                marginRight: '12px'
              }}>
                {report.urgency_assessment?.level || 'N/A'} URGENCY
              </span>
              Urgency Assessment
            </h5>
            <div style={{
              backgroundColor: getUrgencyBg(report.urgency_assessment?.level),
              border: `1px solid ${getUrgencyColor(report.urgency_assessment?.level)}`,
              padding: '12px',
              borderRadius: '6px',
              fontSize: '0.9rem'
            }}>
              {report.urgency_assessment?.reasoning || 'No reasoning provided'}
            </div>
          </div>

          {/* Patient Information */}
          <div style={{ marginBottom: '20px' }}>
            <h5 style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>👤 Patient Information</h5>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{
                backgroundColor: '#f8f9fa',
                border: '1px solid #e9ecef',
                padding: '10px',
                borderRadius: '6px',
                fontSize: '0.9rem',
               
              }}>
                <span >Age:</span> {report.patient_information?.age || '-'}
              </div>
              <div style={{
                backgroundColor: '#f8f9fa',
                border: '1px solid #e9ecef',
                padding: '10px',
                borderRadius: '6px',
                fontSize: '0.9rem'
              }}>
                <span>Gender:</span> {report.patient_information?.gender || '-'}
              </div>
            </div>
          </div>

          {/* Primary Symptoms */}
          <div style={{ marginBottom: '20px' }}>
            <h5 style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>📊 Primary Symptoms</h5>
            <div style={{ marginBottom: '10px' }}>
              {(report.symptom_analysis?.primary_symptoms || []).map((symptom, index) => (
                <span key={index} style={{
                  display: 'inline-block',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  marginRight: '6px',
                  marginBottom: '6px',
                  fontSize: '0.8rem'
                }}>
                  {symptom}
                </span>
              ))}
            </div>
          </div>

          {/* Possible Conditions */}
          <div style={{ marginBottom: '20px' }}>
            <h5 style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>🔎 Possible Conditions</h5>
            <div style={{
              backgroundColor: '#f8f9fa',
              border: '1px solid #e9ecef',
              padding: '12px',
              borderRadius: '6px'
            }}>
              <ul style={{ margin: '0 0 0 18px', fontSize: '0.9rem' }}>
                {(report.possible_conditions || []).map((condition, index) => (
                  <li key={index}>{condition}</li>
                ))}
              </ul>
              <div style={{ color: '#0d6efd', fontSize: '0.8rem', marginTop: '8px' }}>
                These are AI suggestions only
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div style={{ marginBottom: '20px' }}>
            <h5 style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>💡 Recommendations</h5>
            <div style={{
              backgroundColor: '#eaf8f0',
              border: '1px solid #b7ebc6',
              padding: '12px',
              borderRadius: '6px',
              marginBottom: '10px'
            }}>
              <strong>Immediate Actions:</strong>
              <ul style={{ margin: '8px 0 0 18px', fontSize: '0.9rem' }}>
                {(report.recommendations?.immediate_actions || []).map((action, index) => (
                  <li key={index}>{action}</li>
                ))}
              </ul>
            </div>
            <div style={{
              backgroundColor: '#fff3cd',
              border: '1px solid #ffe08a',
              padding: '12px',
              borderRadius: '6px'
            }}>
              <strong>When to Seek Care:</strong>
              <div style={{ marginTop: '6px', fontSize: '0.9rem' }}>
                {report.recommendations?.when_to_seek_care || '-'}
              </div>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div style={{
            backgroundColor: '#fff3cd',
            border: '1px solid #ffc107',
            padding: '12px',
            borderRadius: '6px',
            fontSize: '0.85rem'
          }}>
            <strong>⚠️ Medical Disclaimer:</strong> {report.medical_disclaimer || 'This report is for informational purposes only and should not replace professional medical advice.'}
          </div>
        </div>
      </div>
    );
  };




  const groupedMessages = groupByDate(messages);

  return (
    <>
      <div id="Scroll-Top" className="page-wrapper main-chatboad">

        <div className="main-wrapper">

          <div className="w-layout-blockcontainer container w-container">

            <Container fluid className="chat-container p-0">
              <Card className="chat-card" style={{ position: 'relative', overflow: 'hidden' }}>
                {/* Loading Overlay - Only show when actually connecting for the first time */}
                {(!isMounted || (connectionStatus === 'connecting' && !hasConnectedOnce)) && (
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
                      {!isMounted ? 'Loading chat...' : 'Connecting...'}
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
                          {/* Handle Report Type Messages */}
                          {msg.type === "report" ? (
                            <div className="message-row w-100 message-start">
                              <Col xs={12}>
                                {renderReportInline(msg.reportData)}
                              </Col>
                            </div>
                          ) : (
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
                          )}

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

                  {/* Typing Indicator */}
                  {isTyping && (
                    <Row className="message-row w-100 message-start">
                      <Col xs="auto">
                        <TypingIndicator />
                      </Col>
                    </Row>
                  )}

                  <div ref={chatEndRef} />
                </Card.Body>




                {/* Input Footer - Hidden when report modal is active */}

                {!showReportModal && (
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
                        {/* <Button 
                        className="generate-report-btn" 
                        onClick={() => sendReportRequest()}
                        disabled={!isSessionStarted || connectionStatus !== 'connected'}
                      >
                        <TbReportMedical className="me-2" />
                        Generate Report
                      </Button> */}
                        <div className="nav-menu-button-wrapper">
                          <Link href="" className={`button-outline-chat w-button ${conversationCount < 5 ? 'disabled' : ''}`}>
                            <span className="generate-report-text"
                              onClick={conversationCount >= 5 ? () => sendReportRequest() : undefined}
                              style={{
                                opacity: conversationCount < 5 ? 0.5 : 1,
                                cursor: conversationCount < 5 ? 'not-allowed' : 'pointer'
                              }}>
                              {isGeneratingReport ? 'Generating...' :
                                conversationCount < 5 ? `Generate Report` : 'Generate Report'}
                            </span>
                          </Link>
                          <div className="report-icon-wrapper">
                            {isGeneratingReport ? (
                              <LoadingSpinner className="report-icon loading-spinner" />
                            ) : (
                              <TbReportMedical
                                onClick={conversationCount >= 5 ? () => sendReportRequest() : undefined}
                                className="report-icon"
                                style={{
                                  opacity: conversationCount < 5 ? 0.5 : 1,
                                  cursor: conversationCount < 5 ? 'not-allowed' : 'pointer'
                                }} />
                            )}
                          </div>
                        </div>

                      </div>
                    </div>
                  </Card.Footer>
                )}
              </Card>
            </Container>
          </div>
        </div>
      </div>

      {/* Report Modal */}
      <ReportModal
        reportData={reportData}
        show={showReportModal}
        onHide={() => setShowReportModal(false)}
        onDownload={handleDownloadReport}
        onShare={handleShareReport}
      />
    </>
  );
}
