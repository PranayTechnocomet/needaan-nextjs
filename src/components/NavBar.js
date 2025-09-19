"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import MedCareLogo from '../assets/image/MedCareLogo.png'
import Needaan_Logo from '../assets/image/Needaan_Logo.png'
import '@/style/navbar.css'
import useSessionStart from '@/app/hooks/useSessionStart';
import { Button } from 'react-bootstrap';
import { useWebSocket } from '@/context/WebSocketContext';

export default function NavBar({ onResponse }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    // Use centralized WebSocket context
    const { 
        connectWebSocket, 
        sessionId, 
        connectionStatus, 
        isSessionStarted,
        error 
    } = useWebSocket();

    // const { createSecurity } = useSessionStart()

    // Handle automatic navigation when session is established
    useEffect(() => {
        console.log("🔍 587", { sessionId, isSessionStarted, isLoading, connectionStatus });
        if (sessionId && isSessionStarted && isLoading) {
            console.log("🎯 Auto-navigation: Session established, navigating to chat with ID:", sessionId);
            router.push(`/chatboad/${sessionId}`);
            setIsLoading(false);
        }
    }, [sessionId, isSessionStarted, isLoading, router, connectionStatus]);

    // Handle errors during loading
    useEffect(() => {
        if (error && isLoading) {
            console.error("❌ WebSocket error during loading:", error);
            const fallbackId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            console.log("🔄 Using error fallback session ID:", fallbackId);
            router.push(`/chatboad/${fallbackId}`);
            setIsLoading(false);
        }
    }, [error, isLoading, router]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleSubmit = async () => {
        // Set loading state to true when starting WebSocket connection
        setIsLoading(true);
        
        try {
            // Use centralized WebSocket connection
            console.log("🚀 Starting WebSocket connection from NavBar...");
            await connectWebSocket();
            
            // Set a timeout fallback in case session doesn't establish
            setTimeout(() => {
                if (isLoading) {
                    console.warn("⏰ Session establishment timeout, using fallback ID");
                    const fallbackId = `timeout_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
                    console.log("🔄 Using timeout fallback session ID:", fallbackId);
                    router.push(`/chatboad/${fallbackId}`);
                    setIsLoading(false);
                }
            }, 10000); // 10 second timeout
            
        } catch (connectionError) {
            console.error("❌ Failed to establish WebSocket connection:", connectionError);
            // Generate fallback ID on connection error
            const fallbackId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            console.log("🔄 Using connection error fallback session ID:", fallbackId);
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
            
            <section className="header-section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="header-nav-block">
                        <div data-animation="over-left" data-collapse="medium" data-duration="400" data-easing="ease"
                            data-easing2="ease" role="banner" className="header-nav-inner-block w-nav">
                            <div className="header-navbar-wrapper"><Link href="/" className="navbar-logo w-nav-brand">
                                {/* <img
                                    src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65c9a4e9f78ae07595c9f519_medcare-logo.png"
                                    loading="lazy" alt="Logo Image" className="logo" /> */}
                                {/* <Image src={MedCareLogo} alt="Logo Image" loading="lazy" className="logo" width={189} height={40} /> */}
                                <Image src={Needaan_Logo} alt="Logo Image" loading="lazy" className="logo" width={210} height={45} />
                            </Link>
                                <nav role="navigation" className={`nav-menu-wrap w-nav-menu ${isMobileMenuOpen ? 'w--open' : ''}`}>
                                    <div className="nav-menu-list-wrapper">
                                        <ul role="list" className="nav-menu w-list-unstyled">
                                            <li className="mobile-logo-wrap"><Link
                                                href="/" className="navbar-logo w-nav-brand">
                                                {/* <img
                                                    src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65c9a4e9f78ae07595c9f519_medcare-logo.png"
                                                    loading="lazy" alt="Logo Image" className="logo" /> */}

                                                {/* <Image src={MedCareLogo} alt="Logo Image" loading="lazy" className="logo" width={189} height={40} /> */}
                                                <Image src={Needaan_Logo} alt="Logo Image" loading="lazy" className="logo" width={210} height={45} />
                                            </Link></li>


                                            {/* <li className="menu-list">
                                                <div data-hover="false" data-delay="0" className="menu-link-dropdown w-dropdown">
                                                    <div className="nav-dropdown-toggle w-dropdown-toggle">
                                                        <div className="menu-text">Home</div>
                                                        <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                                                    </div>
                                                    <nav className="nav-dropdown-list home-page w-dropdown-list">
                                                        <div className="nav-dropdown-wrapper"><a href="#"
                                                            className="nav-dropdown-link w-dropdown-link">Home One</a><a href="home"
                                                                className="nav-dropdown-link w-dropdown-link">Home Two</a></div>
                                                    </nav>
                                                </div>
                                            </li> */}
                                            <li className="menu-list"><Link href="/" className={`menu-link ${pathname === '/' ? 'active-link' : ''}`} onClick={closeMobileMenu}>Home</Link></li>
                                            <li className="menu-list"><Link href="/aboutus" className={`menu-link ${pathname === '/aboutus' ? 'active-link' : ''}`} onClick={closeMobileMenu}>About</Link></li>
                                            <li className="menu-list"><Link href="/privecypolicy" className={`menu-link ${pathname === '/privecypolicy' ? 'active-link' : ''}`} onClick={closeMobileMenu}>Privacy Policy</Link></li>
                                            <li className="menu-list"><Link href="/termscondition" className={`menu-link ${pathname === '/termscondition' ? 'active-link' : ''}`} onClick={closeMobileMenu}>Terms & Conditions</Link></li>
                                            <li className="menu-list"><Link href="/cookies" className={`menu-link ${pathname === '/cookies' ? 'active-link' : ''}`} onClick={closeMobileMenu}>Cookie</Link></li>
                                            {/* <li className="menu-list">
                                                <div data-hover="false" data-delay="0" className="menu-link-dropdown w-dropdown">
                                                    <div className="nav-dropdown-toggle w-dropdown-toggle">
                                                        <div className="menu-text">Pages</div>
                                                        <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                                                    </div>
                                                    <nav className="nav-dropdown-list all-pages w-dropdown-list">
                                                        <div className="nav-dropdown-wrapper-flex">
                                                            <div className="nav-dropdown-list-wrap">
                                                                <div className="nav-dropdown-menu-text">Pages</div><a href="aboutus" aria-current="page"
                                                                    className="nav-dropdown-link w-dropdown-link ">About</a><a href="#"
                                                                        onClick={() => router.push('/aboutus')}
                                                                        className="nav-dropdown-link w-dropdown-link">Appointment</a><a href="#"
                                                                            className="nav-dropdown-link w-dropdown-link">Contact</a><a href="#"
                                                                                className="nav-dropdown-link w-dropdown-link">Doctors</a><a href="#"
                                                                                    className="nav-dropdown-link w-dropdown-link">Blog</a><a href="#"
                                                                                        className="nav-dropdown-link w-dropdown-link">Sign In</a><a href="#"
                                                                                            className="nav-dropdown-link w-dropdown-link">Sign Up</a><a href="#"
                                                                                                className="nav-dropdown-link w-dropdown-link">Forgot Password</a>
                                                            </div>
                                                            <div className="nav-dropdown-list-wrap">
                                                                <div className="nav-dropdown-menu-text">CMS Pages</div><a href="#"
                                                                    className="nav-dropdown-link w-dropdown-link">Service Single</a><a
                                                                        href="#"
                                                                        className="nav-dropdown-link w-dropdown-link">Blog Single</a><a
                                                                            href="#" className="nav-dropdown-link w-dropdown-link">Doctor
                                                                    Single</a>
                                                                <div className="nav-dropdown-menu-text">Utility Pages</div><a href="#"
                                                                    className="nav-dropdown-link w-dropdown-link">404 Page</a><a href="#"
                                                                        className="nav-dropdown-link w-dropdown-link">Password Protected</a>
                                                            </div>
                                                            <div className="nav-dropdown-list-wrap">
                                                                <div className="nav-dropdown-menu-text">Template Info</div><a
                                                                    href="#" className="nav-dropdown-link w-dropdown-link">Style
                                                                    Guide</a><a href="#"
                                                                        className="nav-dropdown-link w-dropdown-link">Licenses</a><a
                                                                            href="#"
                                                                            className="nav-dropdown-link w-dropdown-link">Changelog</a>
                                                            </div>
                                                        </div>
                                                    </nav>
                                                </div>
                                            </li> */}
                                        </ul>
                                        <div className="nav-menu-button-wrapper">
                                            <Button 
                                                onClick={handleSubmit} 
                                                className="button-outline w-button"
                                                disabled={isLoading}
                                                style={{
                                                    opacity: isLoading ? 0.6 : 1,
                                                    cursor: isLoading ? 'not-allowed' : 'pointer'
                                                }}
                                            > 
                                                {isLoading ? 'Connecting...' : 'Start Now'}
                                            </Button>
                                        </div>
                                    </div>
                                </nav>
                                <div className="menu-button w-nav-button" onClick={toggleMobileMenu}>
                                    <div className="mobile-menu-icon">
                                        {isMobileMenuOpen ? (
                                            // Close icon (X)
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        ) : (
                                            // Custom toggle icon - you can replace this with any icon you want
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="3" y="6" width="18" height="2" rx="1" fill="currentColor" />
                                                <rect x="3" y="11" width="18" height="2" rx="1" fill="currentColor" />
                                                <rect x="3" y="16" width="18" height="2" rx="1" fill="currentColor" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}