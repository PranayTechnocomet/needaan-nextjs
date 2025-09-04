"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

export default function NavBar() {
    const router = useRouter();
    return (
        <>
            <section className="header-section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="header-nav-block">
                        <div data-animation="over-left" data-collapse="medium" data-duration="400" data-easing="ease"
                            data-easing2="ease" role="banner" className="header-nav-inner-block w-nav">
                            <div className="header-navbar-wrapper"><a href="home" className="navbar-logo w-nav-brand"><img
                                src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65c9a4e9f78ae07595c9f519_medcare-logo.png"
                                loading="lazy" alt="Logo Image" className="logo" /></a>
                                <nav role="navigation" className="nav-menu-wrap w-nav-menu">
                                    <div className="nav-menu-list-wrapper">
                                        <ul role="list" className="nav-menu w-list-unstyled">
                                            <li className="mobile-logo-wrap"><a href="#" className="navbar-logo w-nav-brand"><img
                                                src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65c9a4e9f78ae07595c9f519_medcare-logo.png"
                                                loading="lazy" alt="Logo Image" className="logo" /></a></li>
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
                                            <li className="menu-list"><a href="home" aria-current="page" className="menu-link ">Home</a></li>
                                            <li className="menu-list"><a href="aboutus" className="menu-link">About</a></li>
                                            <li className="menu-list"><a href="privecypolicy" className="menu-link">Privacy Policy</a></li>
                                            <li className="menu-list"><a href="termscondition" className="menu-link">Terms & Conditions</a></li>
                                            <li className="menu-list"><a href="cookies" className="menu-link">Cookie</a></li>
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
                                <div className="menu-button w-nav-button">
                                    <div className="mobile-menu-icon w-icon-nav-menu"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
