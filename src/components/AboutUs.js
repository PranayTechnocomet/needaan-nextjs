"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import Footer from './Footer';
import NavBar from './NavBar';

export default function AboutUs() {
    const router = useRouter();

    return (
        <>
            <div id="Scroll-Top" className="page-wrapper">
                <NavBar />
                <div className="main-wrapper">
                    <section className="breadcrumb-section">
                        <div className="w-layout-blockcontainer container w-container">
                            <div className="breadcrumb-wrapper">
                                <div className="breadcrumb-title-block">
                                    <h1 className="breadcumb-title">About Us</h1>
                                    <div className="home-page-back-link-wrap"><a href="home" className="page-link">Home</a>
                                        <div className="divider">/</div>
                                        <div className="page-name">About Us</div>
                                    </div>
                                </div>
                                <div data-w-id="edb8d2b1-a65e-64c1-2ee4-696f2e07ae41" className="breadcrumb-shape-block">
                                    <div className="inside-vector-wrap"><img
                                        src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65c9e13f750e419cee597826_Inside-vector-semi-small.svg"
                                        loading="lazy" alt="Vector" className="inside-vector-semi-small" /><img
                                            src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65c9de018f2da12e347fcd04_Inside-vector-small.svg"
                                            loading="lazy" alt="Vector" className="inside-vector-small" /><img
                                            src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65c9e204960864bf2bf89d45_Inside-vector-medium.svg"
                                            loading="lazy" alt="Vector" className="inside-vector-medium" /><img
                                            src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65c9e2c5ec86042bc9b16610_Inside-vector-large.svg"
                                            loading="lazy" alt="Vector" className="inside-vector-large" /><img
                                            src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65c9e4d5c6aa622c9820a98d_Inside-vector-semi-large.svg"
                                            loading="lazy" alt="Vector" className="inside-vector-semi-large" /></div>
                                </div>
                            </div>
                        </div><img
                            src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65c9da79c4f7ccc63241e432_Outside-vector-large.svg"
                            loading="lazy" alt="Vector" className="outside-vector-large" />
                    </section>
                    <section className="about-hero-section section-gap-y-axis-140px">
                        <div className="w-layout-blockcontainer container w-container">
                            <div className="about-hero-wrapper">
                                <h2 className="section-title about-hero">AI Health Guidance: Bridging the Gap Between Worry and Wellness</h2>
                                <p data-w-id="27e0852a-c8d0-6d59-dc4b-c74a8e684451" className="about-hero-description"> In a world flooded with conflicting health information, finding a clear first step can feel impossible. The anxiety of an unknown symptom is often made worse by online searches. needan was born from a simple idea: to provide a smart and reliable tool for AI health guidance that cuts through the noise.</p>
                                <div data-w-id="6a9c1d10-f8a2-ce17-91ee-d9d49218fad6"
                                    className="about-hero-banner-image-wrap margin-top-60px"><img
                                        src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65d31a6be16ba1bfa68c9874_About-hero-banner.jpg"
                                        loading="lazy"
                                        sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 690px, (max-width: 1279px) 960px, (max-width: 1439px) 1170px, (max-width: 1919px) 1250px, 1438px"
                                        srcSet="https://assets-global.website-files.com/65c992c37023d69385565acc/65d31a6be16ba1bfa68c9874_About-hero-banner-p-500.jpg 500w, https://assets-global.website-files.com/65c992c37023d69385565acc/65d31a6be16ba1bfa68c9874_About-hero-banner-p-800.jpg 800w, https://assets-global.website-files.com/65c992c37023d69385565acc/65d31a6be16ba1bfa68c9874_About-hero-banner-p-1080.jpg 1080w, https://assets-global.website-files.com/65c992c37023d69385565acc/65d31a6be16ba1bfa68c9874_About-hero-banner.jpg 1438w"
                                        alt="About Hero Banner" className="about-hero-banner-image" /></div>
                                {/* <div data-w-id="2a718b0e-baab-41f0-5a2b-918f370b855b" 
                                    className="about-us-countdown-wrap margin-top-60px">
                                    <div id="w-node-fdbbc786-fde4-4f77-76ba-4640cc2a180d-d496e63b" className="our-service-count-block about">
                                        <div data-w-id="fdbbc786-fde4-4f77-76ba-4640cc2a180e" className="our-service-counter-number-wrapper about">
                                            <div
                                                className="counter-number-block lower-movement">
                                                <div className="counter-number our-service">0</div>
                                                <div className="counter-number our-service">1</div>
                                                <div className="counter-number our-service">2</div>
                                                <div className="counter-number our-service">3</div>
                                                <div className="counter-number our-service">4</div>
                                                <div className="counter-number our-service">5</div>
                                            </div>
                                            <div
                                                className="counter-number-block upper-movement">
                                                <div className="counter-number our-service">0</div>
                                                <div className="counter-number our-service">1</div>
                                                <div className="counter-number our-service">2</div>
                                                <div className="counter-number our-service">3</div>
                                                <div className="counter-number our-service">4</div>
                                                <div className="counter-number our-service">5</div>
                                            </div>
                                            <div className="counter-heading our-service primary-color">+</div>
                                        </div>
                                        <div className="our-service-count-title">Years Experience</div>
                                    </div>
                                    <div className="top-align-border"></div>
                                    <div className="our-service-count-block about">
                                        <div data-w-id="fdbbc786-fde4-4f77-76ba-4640cc2a17e1" className="our-service-counter-number-wrapper about">
                                            <div
                                                className="counter-number-block lower-movement">
                                                <div className="counter-number our-service">5</div>
                                                <div className="counter-number our-service">4</div>
                                                <div className="counter-number our-service">3</div>
                                                <div className="counter-number our-service">2</div>
                                                <div className="counter-number our-service">1</div>
                                                <div className="counter-number our-service">0</div>
                                            </div>
                                            <div
                                                className="counter-number-block upper-movement">
                                                <div className="counter-number our-service">5</div>
                                                <div className="counter-number our-service">4</div>
                                                <div className="counter-number our-service">3</div>
                                                <div className="counter-number our-service">2</div>
                                                <div className="counter-number our-service">1</div>
                                                <div className="counter-number our-service">0</div>
                                            </div>
                                            <div
                                                className="counter-number-block lower-movement">
                                                <div className="counter-number our-service">0</div>
                                                <div className="counter-number our-service">1</div>
                                                <div className="counter-number our-service">2</div>
                                                <div className="counter-number our-service">3</div>
                                                <div className="counter-number our-service">4</div>
                                                <div className="counter-number our-service">5</div>
                                            </div>
                                            <div className="counter-heading our-service primary-color">+</div>
                                        </div>
                                        <div className="our-service-count-title">Positive Review</div>
                                    </div>
                                    <div className="top-align-border"></div>
                                    <div className="our-service-count-block about">
                                        <div data-w-id="dfea43df-dfd1-0a8c-0894-7a863f382143" className="our-service-counter-number-wrapper about">
                                            <div
                                                className="counter-number-block lower-movement">
                                                <div className="counter-number our-service">2</div>
                                                <div className="counter-number our-service">3</div>
                                                <div className="counter-number our-service">4</div>
                                                <div className="counter-number our-service">5</div>
                                                <div className="counter-number our-service">6</div>
                                            </div>
                                            <div
                                                className="counter-number-block upper-movement">
                                                <div className="counter-number our-service">0</div>
                                                <div className="counter-number our-service">1</div>
                                                <div className="counter-number our-service">2</div>
                                                <div className="counter-number our-service">3</div>
                                                <div className="counter-number our-service">4</div>
                                            </div>
                                            <div className="counter-heading our-service">/</div>
                                            <div
                                                className="counter-number-block upper-movement">
                                                <div className="counter-number our-service">0</div>
                                                <div className="counter-number our-service">1</div>
                                                <div className="counter-number our-service">2</div>
                                                <div className="counter-number our-service">3</div>
                                                <div className="counter-number our-service">4</div>
                                                <div className="counter-number our-service">5</div>
                                                <div className="counter-number our-service">6</div>
                                                <div className="counter-number our-service">7</div>
                                            </div>
                                        </div>
                                        <div className="our-service-count-title">Service Provided</div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </section>
                    <section className="our-mission-section padding-bottom-140px">
                        <div className="w-layout-blockcontainer container w-container">
                            <div className="our-mission-wrapper">
                                <div className="our-mission-content-wrap">
                                    <h2 className="section-title">Our Mission</h2>
                                    <p data-w-id="1a65df36-3903-2dfc-5604-88d7e56abc95" className="mission-description">Our mission is to empower individuals everywhere by making AI health guidance accessible to all. We leverage the power of artificial intelligence to help you understand your symptoms, reduce your anxiety, and find the right path forward to getting the proper care.
                                    </p>
                                    <ul data-w-id="6e14bf8e-b11d-7c72-9972-854920b6aecd" role="list"
                                        className="our-misson-item-list-wrap">
                                        <li className="our-mission-list-item">Empower users with instant AI health guidance.</li>
                                        <li className="our-mission-list-item">Reduce health anxiety through clear information.</li>
                                        <li className="our-mission-list-item">Guide users toward the correct medical specialist.</li>
                                        <li className="our-mission-list-item">Uphold absolute user privacy and anonymity.</li>
                                        <li className="our-mission-list-item">Make the first step in healthcare simple and free.</li>
                                    </ul><a data-w-id="2ce5961f-57e4-6920-6580-d6901d287cd0" href="appointment.html"
                                        className="button-outline margin-top-60px w-button">Book Appointment</a>
                                </div>
                                <div id="w-node-_109d2318-2215-b080-3ffc-73dd27e469e9-d496e63b"
                                    data-w-id="109d2318-2215-b080-3ffc-73dd27e469e9" className="our-mission-banner-wrap"><img
                                        src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65d3267a24fcd687ca14f71d_our-mission-banner.jpg"
                                        loading="lazy"
                                        sizes="(max-width: 767px) 94vw, (max-width: 991px) 630px, (max-width: 1279px) 455px, (max-width: 1439px) 575px, (max-width: 1919px) 615px, 700px"
                                        srcSet="https://assets-global.website-files.com/65c992c37023d69385565acc/65d3267a24fcd687ca14f71d_our-mission-banner-p-500.jpg 500w, https://assets-global.website-files.com/65c992c37023d69385565acc/65d3267a24fcd687ca14f71d_our-mission-banner.jpg 700w"
                                        alt="Our Mission Banner Image" className="our-mission-banner-image" /></div>
                            </div>
                        </div>
                    </section>
                    <section className="our-apart-section padding-bottom-140px">
                        <div className="w-layout-blockcontainer container w-container">
                            <div className="our-apart-wrapper">
                                <div id="w-node-_96715956-8efd-2c0a-1f7c-b4a55c3efb61-d496e63b"
                                    data-w-id="96715956-8efd-2c0a-1f7c-b4a55c3efb61" className="our-apart-image-wrap"><img
                                        src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65d32b5ace27c11e4d4f9e86_our-apart-banner.jpg"
                                        loading="lazy"
                                        sizes="(max-width: 767px) 94vw, (max-width: 991px) 620px, (max-width: 1279px) 465px, (max-width: 1439px) 565px, (max-width: 1919px) 600px, 680px"
                                        srcSet="https://assets-global.website-files.com/65c992c37023d69385565acc/65d32b5ace27c11e4d4f9e86_our-apart-banner-p-500.jpg 500w, https://assets-global.website-files.com/65c992c37023d69385565acc/65d32b5ace27c11e4d4f9e86_our-apart-banner.jpg 680w"
                                        alt="Apart Banner" className="our-apart-banner-image" /></div>
                                <div className="our-apart-content-wrap">
                                    <h2 className="section-title apart">Our Guiding Principles</h2>
                                    <div data-w-id="03a139c9-5571-4afd-2260-3060f9930141" className="our-apart-content-block">
                                        <h3 className="our-apart-sub-title">Data-Driven Trust</h3>
                                        <p className="our-apart-description">Our AI symptom checker isn't based on opinion. It's built on a vast, continuously updated knowledge base of verified medical data, ensuring the AI health guidance you receive is objective and reliable.</p>
                                        <h3 className="our-apart-sub-title">Simplicity and Speed</h3>
                                        <p className="our-apart-description">Health concerns are stressful enough. Our platform is designed to be incredibly simple and fast. Get the insights you need in minutes without any complicated steps or technical jargon.
                                        </p>
                                        <h3 className="our-apart-sub-title">Absolute Anonymity</h3>
                                        <p className="our-apart-description">Your privacy is fundamental to our mission. We do not require sign-ups, accounts, or personal details. Your session is entirely anonymous, providing a safe and secure space for your health questions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="doctor-section section-gap-y-axis-140px">
                        <div className="w-layout-blockcontainer container w-container">
                            <div className="doctors-wrapper">
                                <div className="section-header-wrap d-flex">
                                    <div className="section-title-wrap">
                                        <div className="section-sub-title">Our Doctors</div>
                                        <h2 className="section-title doctor">Get Service From Our Quality Doctors</h2>
                                    </div><a data-w-id="f4a26092-f7c5-d567-4937-d00af6c4534a" href="about-us.html"
                                        aria-current="page" className="button-outline w-button w--current">Learn More</a>
                                </div>
                                <div data-w-id="f4a26092-f7c5-d567-4937-d00af6c4534c"
                                    className="doctor-card-grid-block margin-top-60px">
                                    <div className="doctor-collection-list-wrapper w-dyn-list">
                                        <div role="list" className="doctor-collection-list w-dyn-items">
                                            <div role="listitem" className="doctor-card-item w-dyn-item">
                                                <div className="doctor-card-wrap"><a href="doctors/dr-david-martin.html"
                                                    className="dr-image-link w-inline-block"><img alt="Doctor Image"
                                                        src="https://cdn.prod.website-files.com/65cb4d1ed2f90340ed5047d9/65cc8aacf3278495aac9c380_dr-david-martin.png"
                                                        loading="lazy" className="dr-image" /></a>
                                                    <div className="doctor-info-wrap"><a href="doctor-specialty/ophthalmologist.html"
                                                        className="doctor-designation-link w-inline-block">
                                                        <div className="doctor-designation">Ophthalmologist</div>
                                                    </a><a href="doctors/dr-david-martin.html" className="doctor-name-link w-inline-block">
                                                            <div className="doctor-name">Dr. David Martin</div>
                                                        </a>
                                                        <div className="review-block">
                                                            <div className="start-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="18"
                                                                viewBox="0 0 19 18" fill="none">
                                                                <path
                                                                    d="M9.02447 0.463526C9.17415 0.0028708 9.82585 0.00287008 9.97553 0.463525L11.7451 5.90983C11.8121 6.11584 12.0041 6.25532 12.2207 6.25532H17.9473C18.4316 6.25532 18.633 6.87513 18.2411 7.15983L13.6082 10.5258C13.433 10.6532 13.3597 10.8788 13.4266 11.0848L15.1962 16.5312C15.3459 16.9918 14.8187 17.3749 14.4268 17.0902L9.79389 13.7242C9.61865 13.5968 9.38135 13.5968 9.20611 13.7242L4.5732 17.0902C4.18135 17.3749 3.65411 16.9918 3.80378 16.5312L5.57339 11.0848C5.64033 10.8788 5.567 10.6532 5.39176 10.5258L0.758856 7.15983C0.366999 6.87513 0.568387 6.25532 1.05275 6.25532H6.77933C6.99594 6.25532 7.18792 6.11584 7.25486 5.90983L9.02447 0.463526Z"
                                                                    fill="#43BA7F" />
                                                            </svg></div>
                                                            <div className="patient-review">4.8 (112 Review)</div>
                                                        </div><a href="appointment.html" className="book-appoinment-link-wrap w-inline-block">
                                                            <div className="book-appointment-link-text">Book Appointment</div>
                                                            <div className="learn-more-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                height="20" viewBox="0 0 20 20" fill="none">
                                                                <path
                                                                    d="M13.3341 10C13.3348 10.1097 13.3138 10.2184 13.2723 10.32C13.2308 10.4215 13.1697 10.5138 13.0925 10.5917L8.09247 15.5917C7.93555 15.7486 7.72272 15.8368 7.50081 15.8368C7.27889 15.8368 7.06606 15.7486 6.90914 15.5917C6.75222 15.4348 6.66406 15.222 6.66406 15C6.66406 14.7781 6.75222 14.5653 6.90914 14.4084L11.3258 10L6.91747 5.59172C6.78095 5.4323 6.70961 5.22723 6.71771 5.0175C6.72581 4.80777 6.81276 4.60882 6.96117 4.46041C7.10958 4.312 7.30853 4.22506 7.51826 4.21696C7.72799 4.20886 7.93305 4.28019 8.09247 4.41672L13.0925 9.41672C13.2464 9.57193 13.3332 9.78143 13.3341 10Z"
                                                                    fill="currentcolor" />
                                                            </svg></div>
                                                        </a>
                                                    </div>
                                                    <div className="doctor-card-hover-shadow"></div>
                                                </div>
                                            </div>
                                            <div role="listitem" className="doctor-card-item w-dyn-item">
                                                <div className="doctor-card-wrap"><a href="doctors/dr-robert-jackson.html"
                                                    className="dr-image-link w-inline-block"><img alt="Doctor Image"
                                                        src="https://cdn.prod.website-files.com/65cb4d1ed2f90340ed5047d9/65cc8a4f6f2babb31de67957_dr-robert-jackson.png"
                                                        loading="lazy" className="dr-image" /></a>
                                                    <div className="doctor-info-wrap"><a href="doctor-specialty/neurologist.html"
                                                        className="doctor-designation-link w-inline-block">
                                                        <div className="doctor-designation">Neurologist</div>
                                                    </a><a href="doctors/dr-robert-jackson.html" className="doctor-name-link w-inline-block">
                                                            <div className="doctor-name">Dr. Robert Jackson</div>
                                                        </a>
                                                        <div className="review-block">
                                                            <div className="start-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="18"
                                                                viewBox="0 0 19 18" fill="none">
                                                                <path
                                                                    d="M9.02447 0.463526C9.17415 0.0028708 9.82585 0.00287008 9.97553 0.463525L11.7451 5.90983C11.8121 6.11584 12.0041 6.25532 12.2207 6.25532H17.9473C18.4316 6.25532 18.633 6.87513 18.2411 7.15983L13.6082 10.5258C13.433 10.6532 13.3597 10.8788 13.4266 11.0848L15.1962 16.5312C15.3459 16.9918 14.8187 17.3749 14.4268 17.0902L9.79389 13.7242C9.61865 13.5968 9.38135 13.5968 9.20611 13.7242L4.5732 17.0902C4.18135 17.3749 3.65411 16.9918 3.80378 16.5312L5.57339 11.0848C5.64033 10.8788 5.567 10.6532 5.39176 10.5258L0.758856 7.15983C0.366999 6.87513 0.568387 6.25532 1.05275 6.25532H6.77933C6.99594 6.25532 7.18792 6.11584 7.25486 5.90983L9.02447 0.463526Z"
                                                                    fill="#43BA7F" />
                                                            </svg></div>
                                                            <div className="patient-review">4.8 (135 Review)</div>
                                                        </div><a href="appointment.html" className="book-appoinment-link-wrap w-inline-block">
                                                            <div className="book-appointment-link-text">Book Appointment</div>
                                                            <div className="learn-more-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                height="20" viewBox="0 0 20 20" fill="none">
                                                                <path
                                                                    d="M13.3341 10C13.3348 10.1097 13.3138 10.2184 13.2723 10.32C13.2308 10.4215 13.1697 10.5138 13.0925 10.5917L8.09247 15.5917C7.93555 15.7486 7.72272 15.8368 7.50081 15.8368C7.27889 15.8368 7.06606 15.7486 6.90914 15.5917C6.75222 15.4348 6.66406 15.222 6.66406 15C6.66406 14.7781 6.75222 14.5653 6.90914 14.4084L11.3258 10L6.91747 5.59172C6.78095 5.4323 6.70961 5.22723 6.71771 5.0175C6.72581 4.80777 6.81276 4.60882 6.96117 4.46041C7.10958 4.312 7.30853 4.22506 7.51826 4.21696C7.72799 4.20886 7.93305 4.28019 8.09247 4.41672L13.0925 9.41672C13.2464 9.57193 13.3332 9.78143 13.3341 10Z"
                                                                    fill="currentcolor" />
                                                            </svg></div>
                                                        </a>
                                                    </div>
                                                    <div className="doctor-card-hover-shadow"></div>
                                                </div>
                                            </div>
                                            <div role="listitem" className="doctor-card-item w-dyn-item">
                                                <div className="doctor-card-wrap"><a href="doctors/dr-sarah-davis.html"
                                                    className="dr-image-link w-inline-block"><img alt="Doctor Image"
                                                        src="https://cdn.prod.website-files.com/65cb4d1ed2f90340ed5047d9/65cc8a2143e4ccf99672dab2_dr-sarah-davis.png"
                                                        loading="lazy" className="dr-image" /></a>
                                                    <div className="doctor-info-wrap"><a href="doctor-specialty/gynecologist.html"
                                                        className="doctor-designation-link w-inline-block">
                                                        <div className="doctor-designation">Gynecologist</div>
                                                    </a><a href="doctors/dr-sarah-davis.html" className="doctor-name-link w-inline-block">
                                                            <div className="doctor-name">Dr. Sarah Davis</div>
                                                        </a>
                                                        <div className="review-block">
                                                            <div className="start-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="18"
                                                                viewBox="0 0 19 18" fill="none">
                                                                <path
                                                                    d="M9.02447 0.463526C9.17415 0.0028708 9.82585 0.00287008 9.97553 0.463525L11.7451 5.90983C11.8121 6.11584 12.0041 6.25532 12.2207 6.25532H17.9473C18.4316 6.25532 18.633 6.87513 18.2411 7.15983L13.6082 10.5258C13.433 10.6532 13.3597 10.8788 13.4266 11.0848L15.1962 16.5312C15.3459 16.9918 14.8187 17.3749 14.4268 17.0902L9.79389 13.7242C9.61865 13.5968 9.38135 13.5968 9.20611 13.7242L4.5732 17.0902C4.18135 17.3749 3.65411 16.9918 3.80378 16.5312L5.57339 11.0848C5.64033 10.8788 5.567 10.6532 5.39176 10.5258L0.758856 7.15983C0.366999 6.87513 0.568387 6.25532 1.05275 6.25532H6.77933C6.99594 6.25532 7.18792 6.11584 7.25486 5.90983L9.02447 0.463526Z"
                                                                    fill="#43BA7F" />
                                                            </svg></div>
                                                            <div className="patient-review">4.8 (147 Review)</div>
                                                        </div><a href="appointment.html" className="book-appoinment-link-wrap w-inline-block">
                                                            <div className="book-appointment-link-text">Book Appointment</div>
                                                            <div className="learn-more-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                height="20" viewBox="0 0 20 20" fill="none">
                                                                <path
                                                                    d="M13.3341 10C13.3348 10.1097 13.3138 10.2184 13.2723 10.32C13.2308 10.4215 13.1697 10.5138 13.0925 10.5917L8.09247 15.5917C7.93555 15.7486 7.72272 15.8368 7.50081 15.8368C7.27889 15.8368 7.06606 15.7486 6.90914 15.5917C6.75222 15.4348 6.66406 15.222 6.66406 15C6.66406 14.7781 6.75222 14.5653 6.90914 14.4084L11.3258 10L6.91747 5.59172C6.78095 5.4323 6.70961 5.22723 6.71771 5.0175C6.72581 4.80777 6.81276 4.60882 6.96117 4.46041C7.10958 4.312 7.30853 4.22506 7.51826 4.21696C7.72799 4.20886 7.93305 4.28019 8.09247 4.41672L13.0925 9.41672C13.2464 9.57193 13.3332 9.78143 13.3341 10Z"
                                                                    fill="currentcolor" />
                                                            </svg></div>
                                                        </a>
                                                    </div>
                                                    <div className="doctor-card-hover-shadow"></div>
                                                </div>
                                            </div>
                                            <div role="listitem" className="doctor-card-item w-dyn-item">
                                                <div className="doctor-card-wrap"><a href="doctors/dr-jessica-white.html"
                                                    className="dr-image-link w-inline-block"><img alt="Doctor Image"
                                                        src="https://cdn.prod.website-files.com/65cb4d1ed2f90340ed5047d9/65cc89f6ac1c58da55ccfbbc_dr-jessica-white.png"
                                                        loading="lazy" className="dr-image" /></a>
                                                    <div className="doctor-info-wrap"><a href="doctor-specialty/pediatrician.html"
                                                        className="doctor-designation-link w-inline-block">
                                                        <div className="doctor-designation">Pediatrician</div>
                                                    </a><a href="doctors/dr-jessica-white.html" className="doctor-name-link w-inline-block">
                                                            <div className="doctor-name">Dr. Jessica White</div>
                                                        </a>
                                                        <div className="review-block">
                                                            <div className="start-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="18"
                                                                viewBox="0 0 19 18" fill="none">
                                                                <path
                                                                    d="M9.02447 0.463526C9.17415 0.0028708 9.82585 0.00287008 9.97553 0.463525L11.7451 5.90983C11.8121 6.11584 12.0041 6.25532 12.2207 6.25532H17.9473C18.4316 6.25532 18.633 6.87513 18.2411 7.15983L13.6082 10.5258C13.433 10.6532 13.3597 10.8788 13.4266 11.0848L15.1962 16.5312C15.3459 16.9918 14.8187 17.3749 14.4268 17.0902L9.79389 13.7242C9.61865 13.5968 9.38135 13.5968 9.20611 13.7242L4.5732 17.0902C4.18135 17.3749 3.65411 16.9918 3.80378 16.5312L5.57339 11.0848C5.64033 10.8788 5.567 10.6532 5.39176 10.5258L0.758856 7.15983C0.366999 6.87513 0.568387 6.25532 1.05275 6.25532H6.77933C6.99594 6.25532 7.18792 6.11584 7.25486 5.90983L9.02447 0.463526Z"
                                                                    fill="#43BA7F" />
                                                            </svg></div>
                                                            <div className="patient-review">4.8 (150 Review)</div>
                                                        </div><a href="appointment.html" className="book-appoinment-link-wrap w-inline-block">
                                                            <div className="book-appointment-link-text">Book Appointment</div>
                                                            <div className="learn-more-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                height="20" viewBox="0 0 20 20" fill="none">
                                                                <path
                                                                    d="M13.3341 10C13.3348 10.1097 13.3138 10.2184 13.2723 10.32C13.2308 10.4215 13.1697 10.5138 13.0925 10.5917L8.09247 15.5917C7.93555 15.7486 7.72272 15.8368 7.50081 15.8368C7.27889 15.8368 7.06606 15.7486 6.90914 15.5917C6.75222 15.4348 6.66406 15.222 6.66406 15C6.66406 14.7781 6.75222 14.5653 6.90914 14.4084L11.3258 10L6.91747 5.59172C6.78095 5.4323 6.70961 5.22723 6.71771 5.0175C6.72581 4.80777 6.81276 4.60882 6.96117 4.46041C7.10958 4.312 7.30853 4.22506 7.51826 4.21696C7.72799 4.20886 7.93305 4.28019 8.09247 4.41672L13.0925 9.41672C13.2464 9.57193 13.3332 9.78143 13.3341 10Z"
                                                                    fill="currentcolor" />
                                                            </svg></div>
                                                        </a>
                                                    </div>
                                                    <div className="doctor-card-hover-shadow"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="cta-section padding-bottom-140px">
                        <div className="w-layout-blockcontainer container w-container">
                            <div data-w-id="b3185ae5-db1f-0c33-7963-6e702b7e32dc" className="cta-wrapper center">
                                <div className="cta-banner-image-wrap"><img
                                    src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65cca34667321a9a91919866_CTA-banner.jpg"
                                    loading="lazy"
                                    sizes="(max-width: 479px) 94vw, (max-width: 767px) 450px, (max-width: 991px) 331.1875px, (max-width: 1279px) 460.796875px, (max-width: 1439px) 561.59375px, (max-width: 1919px) 600px, 691.1875px"
                                    srcSet="https://assets-global.website-files.com/65c992c37023d69385565acc/65cca34667321a9a91919866_CTA-banner-p-500.jpg 500w, https://assets-global.website-files.com/65c992c37023d69385565acc/65cca34667321a9a91919866_CTA-banner.jpg 700w"
                                    alt="CTA Banner" className="cta-banner-image" /></div>
                                <div className="cta-content-wrap">
                                    <div className="cta-content">
                                        <h2 className="cta-section-title cta">Get Appointment For Your Medical Service</h2>
                                        <div className="button-primary-wrap"><a href="appointment.html" className="button-primary white w-button">Book
                                            Appointment</a></div>
                                    </div><img
                                        src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65d2f7ff8848a6206e4f1a66_CTA-bottom-pluse-vector.svg"
                                        loading="lazy" alt="Vector" className="cta-vector-shape" /><img
                                        src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65d2f8650e915364420906c0_CTA-top-ellipse-shape.svg"
                                        loading="lazy" alt="Ellipse Shape" className="cta-ellipse-shape" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* <section className="footer-section">
                    <div className="w-layout-blockcontainer container w-container">
                        <div className="footer-block-wrapper">
                            <div data-w-id="930cbbf2-e22c-508e-4443-ba9f31767a12" className="footer-content">
                                <div id="w-node-_930cbbf2-e22c-508e-4443-ba9f31767a13-31767a0f" className="footer-block"><a
                                    href="home-page/home-one.html" className="footer-logo-link-block w-inline-block"><img
                                        src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65c9a4e9f78ae07595c9f519_medcare-logo.png"
                                        loading="lazy" alt="Footer Logo" className="logo-image" /></a>
                                    <div className="footer-address">Empowering wellness through knowledge and care</div>
                                    <div className="social-block"><a href="https://www.facebook.com/" target="_blank"
                                        className="footer-social-link w-inline-block"><img
                                            src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65caef5f57fd0cc188939b25_facebook.svg"
                                            loading="lazy" alt="Facebook Icon" className="social-image" /><img
                                            src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65caf2bd6ac28d88edb0269b_facebook-white.svg"
                                            loading="lazy" alt="Facebook Icon" className="social-image-white" /></a><a href="https://twitter.com/"
                                                target="_blank" className="footer-social-link w-inline-block"><img
                                                src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65caf1a53bcc792a5eb37255_twitter.svg"
                                                loading="lazy" alt="Twitter Icon" className="social-image" /><img
                                                src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65caef749128b2ae1a08b938_twitter-fill.svg"
                                                loading="lazy" alt="Twitter Icon" className="social-image-white" /></a><a
                                                    href="https://www.linkedin.com/" target="_blank" className="footer-social-link w-inline-block"><img
                                                src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65caef3fef54fca04c9327c2_ri_linkedin-fill.svg"
                                                loading="lazy" alt="Linkdin" className="social-image" /><img
                                                src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65caf2da90c78bb550df41dc_linkedin-white.svg"
                                                loading="lazy" alt="Linkdin" className="social-image-white" /></a><a href="https://www.instagram.com/"
                                                    target="_blank" className="footer-social-link w-inline-block"><img
                                                src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65caf1cdcf665b1c4ff072bb_instagram.svg"
                                                loading="lazy" alt="Instragram" className="social-image" /><img
                                                src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65caf2e967afff45c74d5c2a_instagram-white.svg"
                                                loading="lazy" alt="Instragram" className="social-image-white" /></a></div>
                                </div>
                                <div className="footer-block">
                                    <div className="footer-title">Menu</div>
                                    <div className="footer-link-wrapper"><a href="home-page/home-one.html" className="footer-link">Home</a><a
                                        href="about-us.html" aria-current="page" className="footer-link w--current">About</a><a href="blog.html"
                                            className="footer-link">Blog</a><a href="doctors.html" className="footer-link">Doctors</a><a
                                                href="contact-us.html" className="footer-link">Contact</a></div>
                                </div>
                                <div className="footer-block">
                                    <div className="footer-title">Utility pages</div>
                                    <div className="footer-link-wrapper"><a href="401.html" className="footer-link">Password Protected</a><a
                                        href="404.html" className="footer-link">404 Not Found</a><a href="template-info/style-guide.html"
                                            className="footer-link">Style Guide</a><a href="template-info/licenses.html"
                                                className="footer-link">Licenses</a><a href="template-info/changelog.html" className="footer-link">Change
                                                    Log</a></div>
                                </div>
                                <div className="footer-block">
                                    <div className="footer-title">Contact</div>
                                    <div className="footer-link-wrapper">
                                        <div className="footer-contact-text">3891 Ranch view Dr. Richardson, California 62639</div><a
                                            href="mailto:contact@medcare.com" className="footer-link">contact@medcare.com</a><a href="tel:5055550125"
                                                className="footer-link">(505) 555-0125</a>
                                    </div>
                                </div>
                                <div className="footer-block">
                                    <div className="footer-title">Subscribe Now</div>
                                    <div className="footer-link-wrapper">
                                        <div className="footer-subscribe-text">Stay informed and inspired with our newsletter</div>
                                        <div className="newsletter-input-block-two">
                                            <div className="newsletter-form-block-two w-form">
                                                <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                                    className="newsletter-form-two" data-wf-page-id="65d30c478bc666f7d496e63b"
                                                    data-wf-element-id="930cbbf2-e22c-508e-4443-ba9f31767a44"><input
                                                        className="newsletter-input-field-two w-input" maxlength="256" name="Email" data-name="Email"
                                                        placeholder="Your email" type="email" id="Email" required="" /><input type="submit"
                                                            data-wait="Please wait..." className="subscribe-button w-button" value="Subscribe" /></form>
                                                <div className="w-form-done">
                                                    <div>Thank you! Your submission has been received!</div>
                                                </div>
                                                <div className="w-form-fail">
                                                    <div>Oops! Something went wrong while submitting the form.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-w-id="930cbbf2-e22c-508e-4443-ba9f31767a4d" className="copy-right-block">
                                <div className="footer-copyright-center">Copyright © <a href="home-page/home-one.html"
                                    className="template-link">MedCare </a>| Designed by <a href="https://brandbes.com/" target="_blank"
                                        className="brandbes-link">Brandbes </a>- Powered by <a
                                            href="https://webflow.com/templates/designers/brandbes" target="_blank" className="webflow-link">Webflow</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <Footer />
            </div>
        </>
    )
}
