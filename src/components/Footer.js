"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import FooterLogo from '../assets/image/FooterLogo.png'
// import FooterLogo from '../assets/image/Needaan_Logo.png'
import Image from 'next/image';
import '../style/global.css'
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { useWebSocket } from '@/context/WebSocketContext';

export default function Footer() {
    const router = useRouter();
    const year = new Date().getFullYear();
    const [isLoading, setIsLoading] = useState(false);
    
    // Use centralized WebSocket context
    const { 
        connectWebSocket, 
        sessionId, 
        connectionStatus, 
        isSessionStarted,
        error 
    } = useWebSocket();

    // Handle automatic navigation when session is established
    useEffect(() => {
        console.log("🔍 Footer WebSocket Status:", { sessionId, isSessionStarted, isLoading, connectionStatus });
        if (sessionId && isSessionStarted && isLoading) {
            console.log("🎯 Footer Auto-navigation: Session established, navigating to chat with ID:", sessionId);
            router.push(`/chatboad/${sessionId}`);
            setIsLoading(false);
        }
    }, [sessionId, isSessionStarted, isLoading, router, connectionStatus]);

    // Handle errors during loading
    useEffect(() => {
        if (error && isLoading) {
            console.error("❌ Footer WebSocket error during loading:", error);
            const fallbackId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            console.log("🔄 Footer Using error fallback session ID:", fallbackId);
            router.push(`/chatboad/${fallbackId}`);
            setIsLoading(false);
        }
    }, [error, isLoading, router]);
    
    const handleSubmit = async () => {
        // Set loading state to true when starting WebSocket connection
        setIsLoading(true);
        
        try {
            // Use centralized WebSocket connection
            console.log("🚀 Starting WebSocket connection from Footer...");
            await connectWebSocket();
            
            // Set a timeout fallback in case session doesn't establish
            setTimeout(() => {
                if (isLoading) {
                    console.warn("⏰ Footer Session establishment timeout, using fallback ID");
                    const fallbackId = `timeout_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
                    console.log("🔄 Footer Using timeout fallback session ID:", fallbackId);
                    router.push(`/chatboad/${fallbackId}`);
                    setIsLoading(false);
                }
            }, 10000); // 10 second timeout
            
        } catch (connectionError) {
            console.error("❌ Footer Failed to establish WebSocket connection:", connectionError);
            // Generate fallback ID on connection error
            const fallbackId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            console.log("🔄 Footer Using connection error fallback session ID:", fallbackId);
            router.push(`/chatboad/${fallbackId}`);
            setIsLoading(false);
        }
    };
    return (
        <>
            {/* Loading Overlay */}
            {isLoading && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 9999
                }}>
                    <div style={{
                        backgroundColor: 'transparent',
                        padding: '20px',
                        borderRadius: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '15px'
                    }}>
                        {/* Loading Spinner */}
                        <div style={{
                            width: '50px',
                            height: '50px',
                            border: '4px solid rgba(255, 255, 255, 0.3)',
                            borderTop: '4px solid #ffffff',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite'
                        }}></div>
                        <p style={{
                            color: '#ffffff',
                            margin: 0,
                            fontSize: '16px',
                            fontWeight: '500'
                        }}>Connecting to chat...</p>
                    </div>
                </div>
            )}
            
            <section className="footer-section two">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="footer-block-wrapper">
                        <div className="call-to-actions-wrap">
                            <h2 className="section-title cta-two">Ready to Turn Worry Into Clarity?</h2>
                            <div className="button-primary-wrap">
                                <Button 
                                    onClick={handleSubmit} 
                                    className="button-primary white w-button"
                                    disabled={isLoading}
                                    style={{
                                        opacity: isLoading ? 0.6 : 1,
                                        cursor: isLoading ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    {isLoading ? 'Connecting...' : 'Start Chat Now'}
                                </Button>
                            </div>
                        </div>
                        <div data-w-id="94547a58-0949-cde7-2711-4cc424047d44"
                            className="footer-content margin-top-60px">
                            <div id="w-node-_94547a58-0949-cde7-2711-4cc424047d45-b42bc025" className="footer-block"><Link href="/"
                                className="footer-logo-link-block w-inline-block">
                               
                                <Image src={FooterLogo} alt="Footer Logo" className="logo-image" width={189} height={40} />
                            </Link>
                                <div className="footer-address white-color">Clarity for your health concerns. Instant, anonymous, and free.</div>
                                {/* <div className="social-block"><a href="https://www.facebook.com/" target="_blank"
                                    className="footer-social-link-two w-inline-block">
                                    <img
                                        src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65caef5f57fd0cc188939b25_facebook.svg"
                                        loading="lazy" alt="Facebook Icon" className="social-image" /><img
                                        src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65caf2bd6ac28d88edb0269b_facebook-white.svg"
                                        loading="lazy" alt="Facebook Icon" className="social-image-white" /></a><a href="https://twitter.com/"
                                            target="_blank" className="footer-social-link-two w-inline-block"><img
                                            src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65caf1a53bcc792a5eb37255_twitter.svg"
                                            loading="lazy" alt="Twitter Icon" className="social-image" /><img
                                            src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65caef749128b2ae1a08b938_twitter-fill.svg"
                                            loading="lazy" alt="Twitter Icon" className="social-image-white" /></a><a
                                                href="https://www.linkedin.com/" target="_blank" className="footer-social-link-two w-inline-block"><img
                                            src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65caef3fef54fca04c9327c2_ri_linkedin-fill.svg"
                                            loading="lazy" alt="Linkdin" className="social-image" /><img
                                            src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65caf2da90c78bb550df41dc_linkedin-white.svg"
                                            loading="lazy" alt="Linkdin" className="social-image-white" /></a><a href="https://www.instagram.com/"
                                                target="_blank" className="footer-social-link-two w-inline-block"><img
                                            src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65caf1cdcf665b1c4ff072bb_instagram.svg"
                                            loading="lazy" alt="Instragram" className="social-image" /><img
                                            src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65caf2e967afff45c74d5c2a_instagram-white.svg"
                                            loading="lazy" alt="Instragram" className="social-image-white" /></a>
                                </div> */}
                            </div>
                            <div className="footer-block">
                                <div className="footer-title white-color">Menu</div>
                                <div className="footer-link-wrapper"><Link href="/" className="footer-link white-color">Home</Link><Link
                                    href="/aboutus" className="footer-link white-color">About</Link>
                                    {/* <a href="#" className="footer-link white-color">Features</a> */}
                                    {/* <a href="#" className="footer-link white-color">Doctors</a> */}
                                    <Link href="" className="footer-link white-color">Blog</Link></div>
                            </div>
                            <div className="footer-block">
                                <div className="footer-title white-color">Support</div>
                                <div className="footer-link-wrapper">
                                    {/* <a href="#" className="footer-link white-color">FAQ</a> */}
                                    <Link href="/privecypolicy" className="footer-link white-color">Privacy Policy</Link>
                                    <Link href="/termscondition" className="footer-link white-color">Terms & Conditions</Link>
                                    <Link href="/cookies" className="footer-link white-color">Cookie</Link>
                                    {/* <a href="#" className="footer-link white-color">Licenses</a>
                                    <a href="#" className="footer-link white-color">Change Log</a> */}
                                </div>
                            </div>
                            {/* <div className="footer-block">
                                <div className="footer-title white-color">Contact</div>
                                <div className="footer-link-wrapper">
                                    <div className="footer-contact-text white-color">3891 Ranch view Dr. Richardson, California 62639</div><a
                                        href="mailto:contact@medcare.com" className="footer-link white-color">contact@medcare.com</a><a
                                            href="tel:5055550125" className="footer-link white-color">(505) 555-0125</a>
                                </div>
                            </div> */}
                            <div className="footer-block">
                                <div className="footer-title white-color">Our Commitment</div>
                                <div className="footer-link-wrapper">
                                    <div className="footer-subscribe-text white-color">To demystify health information, reduce anxiety, and provide a clear, confidential path for you to take the right next step on your health journey.</div>
                                    <div className="newsletter-input-block-two" style={{ marginBottom: '0' }}>
                                        <div className="newsletter-form-block-two w-form" style={{ marginBottom: '0' }}>
                                            {/* <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                                className="newsletter-form-two" data-wf-page-id="65cdda3fef526fafb42bc025"
                                                data-wf-element-id="94547a58-0949-cde7-2711-4cc424047d76"><input
                                                    className="newsletter-input-field-two two w-input" maxLength="256" name="Email-4"
                                                    data-name="Email 4" placeholder="Your email" type="email" id="Email" required="" /><input
                                                    type="submit" data-wait="Please wait..." className="subscribe-button two w-button"
                                                    value="Subscribe" /></form> */}
                                            <div className="w-form-done" style={{ marginBottom: '0' }}>
                                                <div>Thank you! Your submission has been received!</div>
                                            </div>
                                            <div className="w-form-fail" style={{ marginBottom: '0' }}>
                                                <div>Oops! Something went wrong while submitting the form.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="copy-right-block two">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="footer-copyright-center white-color">Copyright © {year} <a href="https://needaan-nextjs.vercel.app/"
                        className="template-link white-color"> Needaan </a>| Devloped by <a href="https://technocometsolutions.com/" target="_blank"
                            className="brandbes-link white-color">Technoocomet Solutions </a>
                        {/* - Powered by <a
                            href="https://webflow.com/templates/designers/brandbes" target="_blank"
                            className="webflow-link white-color">Webflow</a> */}

                    </div>
                </div>
            </div>
        </>
    )
}
