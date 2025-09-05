"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import React, { useState } from 'react'
import MedCareLogo from '../assets/image/MedCareLogo.png'
import '@/style/navbar.css'

export default function NavBar() {
    const router = useRouter();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <section className="header-section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="header-nav-block">
                        <div data-animation="over-left" data-collapse="medium" data-duration="400" data-easing="ease"
                            data-easing2="ease" role="banner" className="header-nav-inner-block w-nav">
                            <div className="header-navbar-wrapper"><Link href="/" className="navbar-logo w-nav-brand">
                                {/* <img
                                    src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65c9a4e9f78ae07595c9f519_medcare-logo.png"
                                    loading="lazy" alt="Logo Image" className="logo" /> */}
                                <Image src={MedCareLogo} alt="Logo Image" loading="lazy" className="logo" width={189} height={40} />
                            </Link>
                                <nav role="navigation" className={`nav-menu-wrap w-nav-menu ${isMobileMenuOpen ? 'w--open' : ''}`}>
                                    <div className="nav-menu-list-wrapper">
                                        <ul role="list" className="nav-menu w-list-unstyled">
                                            <li className="mobile-logo-wrap"><Link
                                                href="/" className="navbar-logo w-nav-brand">
                                                {/* <img
                                                    src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65c9a4e9f78ae07595c9f519_medcare-logo.png"
                                                    loading="lazy" alt="Logo Image" className="logo" /> */}
                                                    
                                                    <Image src={MedCareLogo} alt="Logo Image" loading="lazy" className="logo" width={189} height={40} />
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
                                        <div className="nav-menu-button-wrapper"><a href="#" className="button-outline w-button">Contact
                                            Us</a></div>
                                    </div>
                                </nav>
                                <div className="menu-button w-nav-button" onClick={toggleMobileMenu}>
                                    <div className="mobile-menu-icon">
                                        {isMobileMenuOpen ? (
                                            // Close icon (X)
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        ) : (
                                            // Custom toggle icon - you can replace this with any icon you want
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="3" y="6" width="18" height="2" rx="1" fill="currentColor"/>
                                                <rect x="3" y="11" width="18" height="2" rx="1" fill="currentColor"/>
                                                <rect x="3" y="16" width="18" height="2" rx="1" fill="currentColor"/>
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