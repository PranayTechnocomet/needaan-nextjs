"use client";
import Script from "next/script";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import '@/style/yourself.css'
import '@/style/home.css'
import '@/style/global.css'

import Footer from "./Footer";
import NavBar from "./NavBar";
import Image from "next/image";
import Doctor from '../assets/image/Doctor.png'
import AboutUs from '../assets/image/AboutUs.jpg'
import Cards1 from '../assets/image/Cards1.png'
import Cards2 from '../assets/image/Cards2.png'
import Cards3 from '../assets/image/Cards3.png'
import Cards4 from '../assets/image/Cards4.png'
import Doctors1 from '../assets/image/Doctors1.jpg'
import Doctors2 from '../assets/image/Doctors2.jpg'
import Doctors3 from '../assets/image/Doctors3.jpg'
import Doctors4 from '../assets/image/Doctors4.jpg'
import Doctors5 from '../assets/image/Doctors5.jpg'
import Doctors6 from '../assets/image/Doctors6.jpg'
import Start from '../assets/image/Start.png'
import StartBlank from '../assets/image/StarBlank.png'
import CardsSine from '../assets/image/CardsSine.png'
import WorriesMind from '../assets/image/WorriesMind.webp'
import TestimonialSlider from "./TestimonialsSlider";





export default function Home() {



    return (

        <>
            <main id="Scroll-Top" className="page-wrapper">
                {/* <NavBar /> */}
                <main className="main-wrapper">
                    <section className="hero-section-two ">
                        <div className="w-layout-blockcontainer container w-container">
                            <div className="hero-section-two-wrapper">
                                <div className="hero-one-content-wrap">
                                    <h2 data-w-id="a383da0b-f6f3-e922-ba61-f758fca78f6e" className="hero-title two">Stop Guessing <span className="hero-title-span">Start Knowing </span>Your Very Own AI Symptom Checker.</h2>
                                    <p data-w-id="a383da0b-f6f3-e922-ba61-f758fca78f73" className="hero-title-description">
                                        Our advanced AI analyzes your symptoms in seconds to suggest possible causes and tells you exactly which type of doctor you need to see.</p>
                                    <div data-w-id="a383da0b-f6f3-e922-ba61-f758fca78f75" className="appointment-button-wrap"><a
                                        href="#" className="button-primary w-inline-block">
                                        <div className="button-primary-text">Start Chat Now</div>
                                        <div className="w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M16.9998 11.9922C17.0007 12.1567 16.9692 12.3198 16.907 12.472C16.8448 12.6243 16.7532 12.7628 16.6373 12.8796L9.1384 20.3785C8.90306 20.6139 8.58386 20.7461 8.25103 20.7461C7.9182 20.7461 7.599 20.6139 7.36366 20.3785C7.12831 20.1432 6.99609 19.824 6.99609 19.4912C6.99609 19.1583 7.12831 18.8391 7.36366 18.6038L13.9877 11.9922L7.37615 5.38068C7.1714 5.14158 7.06441 4.83403 7.07656 4.51948C7.08871 4.20494 7.2191 3.90655 7.44169 3.68397C7.66428 3.46138 7.96266 3.33098 8.27721 3.31883C8.59176 3.30668 8.89931 3.41368 9.1384 3.61843L16.6373 11.1174C16.8682 11.3501 16.9984 11.6644 16.9998 11.9922Z"
                                                fill="currentcolor" />
                                        </svg></div>
                                    </a></div>
                                    {/* <img
                                        src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65cb058791aadd6db3939a36_dr-cart.png"
                                        loading="lazy"  data-w-id="a383da0b-f6f3-e922-ba61-f758fca78f7a" alt="Doctor Card"
                                        className="dr-list-card two" /><img
                                        src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65cb0bea9128b2ae1a18b940_hero-oneround-shape.svg"
                                        loading="lazy"  data-w-id="a383da0b-f6f3-e922-ba61-f758fca78f7b" alt="Rounded Shape"
                                        className="hero-two-rounded-shape" /> */}
                                    <div data-w-id="a7f9d8f0-cfe9-f2c1-eb23-f69e114b89d5" className="dr-dropdown-serach-wrap">
                                        {/* <div className="dr-dropdown-serach-form-wrap w-form">
                                            <form id="Email-Form" name="wf-form-Email-Form" data-name="Email Form" method="get"
                                                className="dr-dropdown-serach-form" data-wf-page-id="65cdda3fef526fafb42bc025"
                                                data-wf-element-id="a7f9d8f0-cfe9-f2c1-eb23-f69e114b89d7">
                                                <div className="location-block">
                                                    <div className="location-icon-wrap"><img loading="lazy"
                                                        src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65cb24b4f3d8650c8892e5a6_location.svg"
                                                        alt="Location Icon" className="location-icon" /></div><select id="Field-2" name="Field-2"
                                                            data-name="Field 2" className="dr-dropdown-select-field curso-pointer w-select">
                                                        <option value="">Location</option>
                                                        <option value="First">Los Angeles, USA</option>
                                                        <option value="Second">New York City, USA</option>
                                                        <option value="Third">Chicago, USA</option>
                                                    </select>
                                                </div>
                                                <div className="doctor-block">
                                                    <div className="dr-icon-wrap"><img loading="lazy"
                                                        src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65cb24f45d745af651685712_dr-icon.svg"
                                                        alt="Location Icon" className="dr-icon" /></div><select id="field-2" name="field-2"
                                                            data-name="Field 2" className="dr-dropdown-select-field curso-pointer w-select">
                                                        <option value="">Doctor</option>
                                                        <option value="First">Gynecology</option>
                                                        <option value="Second">Cardiologist</option>
                                                        <option value="Third">Oncology</option>
                                                        <option value="Fourth">Neurology</option>
                                                        <option value="Sixth">Pediatrics</option>
                                                    </select>
                                                </div><input type="submit" data-wait="Please wait..." className="dr-serach-button w-button" value="" />
                                            </form>
                                            <div className="w-form-done">
                                                <div>Thank you! Your submission has been received!</div>
                                            </div>
                                            <div className="w-form-fail">
                                                <div>Oops! Something went wrong while submitting the form.</div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div id="w-node-a383da0b-f6f3-e922-ba61-f758fca78fa1-b42bc025"
                                    data-w-id="a383da0b-f6f3-e922-ba61-f758fca78fa1" className="hero-two-banner-wrap">
                                    <div data-w-id="65f2a5bc-ad83-81e7-d4e6-35d3482a1567" className="home-two-banner-bg">
                                        <div className="hero-image-block-two"><Image width={500} height={608}
                                            src={Doctor}
                                            loading="lazy" alt="Hero Image" className="hero-image-two" /></div>
                                    </div>
                                    {/* <Image height={120} width={105}
                                        src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65cdeabade11b1fef5a973bc_Hero-two-dotted-shape.svg"
                                        loading="lazy" data-w-id="1dc80929-60cb-8bbe-1aa6-9ee890dd6f0d" alt="Dotted Shape"
                                        className="hero-two-dotted-shape" /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="166" height="146" alt="Dotted Shape"
                                        className="hero-two-dotted-shape" viewBox="0 0 166 146" fill="none">
                                        <g opacity="0.5">
                                            <circle cx="161.804" cy="141.964" r="3.75615" transform="rotate(-180 161.804 141.964)" fill="#43BA7F" />
                                            <circle cx="161.804" cy="114.452" r="3.75615" transform="rotate(-180 161.804 114.452)" fill="#43BA7F" />
                                            <circle cx="161.804" cy="86.9397" r="3.75615" transform="rotate(-180 161.804 86.9397)" fill="#43BA7F" />
                                            <circle cx="161.804" cy="59.4274" r="3.75615" transform="rotate(-180 161.804 59.4274)" fill="#43BA7F" />
                                            <circle cx="161.804" cy="31.9152" r="3.75615" transform="rotate(-180 161.804 31.9152)" fill="#43BA7F" />
                                            <circle cx="161.804" cy="4.40278" r="3.75615" transform="rotate(-180 161.804 4.40278)" fill="#43BA7F" />
                                            <circle cx="122.293" cy="141.964" r="3.75615" transform="rotate(-180 122.293 141.964)" fill="#43BA7F" />
                                            <circle cx="122.293" cy="114.452" r="3.75615" transform="rotate(-180 122.293 114.452)" fill="#43BA7F" />
                                            <circle cx="122.293" cy="86.9397" r="3.75615" transform="rotate(-180 122.293 86.9397)" fill="#43BA7F" />
                                            <circle cx="122.293" cy="59.4274" r="3.75615" transform="rotate(-180 122.293 59.4274)" fill="#43BA7F" />
                                            <circle cx="122.293" cy="31.9152" r="3.75615" transform="rotate(-180 122.293 31.9152)" fill="#43BA7F" />
                                            <circle cx="122.293" cy="4.40278" r="3.75615" transform="rotate(-180 122.293 4.40278)" fill="#43BA7F" />
                                            <circle cx="82.779" cy="141.964" r="3.75615" transform="rotate(-180 82.779 141.964)" fill="#43BA7F" />
                                            <circle cx="82.781" cy="114.452" r="3.75615" transform="rotate(-180 82.781 114.452)" fill="#43BA7F" />
                                            <circle cx="82.779" cy="86.9397" r="3.75615" transform="rotate(-180 82.779 86.9397)" fill="#43BA7F" />
                                            <circle cx="82.779" cy="59.4274" r="3.75615" transform="rotate(-180 82.779 59.4274)" fill="#43BA7F" />
                                            <circle cx="82.781" cy="31.9152" r="3.75615" transform="rotate(-180 82.781 31.9152)" fill="#43BA7F" />
                                            <circle cx="82.781" cy="4.40303" r="3.75615" transform="rotate(-180 82.781 4.40303)" fill="#43BA7F" />
                                            <circle cx="43.2673" cy="141.964" r="3.75615" transform="rotate(-180 43.2673 141.964)" fill="#43BA7F" />
                                            <circle cx="43.2673" cy="114.452" r="3.75615" transform="rotate(-180 43.2673 114.452)" fill="#43BA7F" />
                                            <circle cx="43.2673" cy="86.9397" r="3.75615" transform="rotate(-180 43.2673 86.9397)" fill="#43BA7F" />
                                            <circle cx="43.2673" cy="59.4274" r="3.75615" transform="rotate(-180 43.2673 59.4274)" fill="#43BA7F" />
                                            <circle cx="43.2673" cy="31.9152" r="3.75615" transform="rotate(-180 43.2673 31.9152)" fill="#43BA7F" />
                                            <circle cx="43.2673" cy="4.40303" r="3.75615" transform="rotate(-180 43.2673 4.40303)" fill="#43BA7F" />
                                            <circle cx="3.75557" cy="141.964" r="3.75615" transform="rotate(-180 3.75557 141.964)" fill="#43BA7F" />
                                            <circle cx="3.75557" cy="114.452" r="3.75615" transform="rotate(-180 3.75557 114.452)" fill="#43BA7F" />
                                            <circle cx="3.75557" cy="86.9394" r="3.75615" transform="rotate(-180 3.75557 86.9394)" fill="#43BA7F" />
                                            <circle cx="3.75557" cy="59.4272" r="3.75615" transform="rotate(-180 3.75557 59.4272)" fill="#43BA7F" />
                                            <circle cx="3.75557" cy="31.915" r="3.75615" transform="rotate(-180 3.75557 31.915)" fill="#43BA7F" />
                                            <circle cx="3.75557" cy="4.40278" r="3.75615" transform="rotate(-180 3.75557 4.40278)" fill="#43BA7F" />
                                        </g>
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="about-us-section section-gap-y-axis-120px">
                        <div className="w-layout-blockcontainer container w-container">
                            <div className="about-us-wrapper">
                                <div className="home-about-content-wrap">
                                    <div className="section-sub-title">Our Purpose</div>
                                    <h2 className="section-title about">Clear Answers from Our AI Symptom Checker</h2>
                                    <p data-w-id="3f77d7a6-5a54-74bf-8be2-5fb34c970a1c" className="about-description">At needan, our mission is to provide instant clarity. Our AI symptom checker uses advanced technology to analyze your symptoms, demystify medical information, and guide you confidently toward the right care.
                                    </p>
                                    <div data-w-id="3f77d7a6-5a54-74bf-8be2-5fb34c970a1e" className="our-service-count-wrap">
                                        {/* <div className="our-service-count-block">
                                            <div data-w-id="9b722d5f-6aeb-de24-59c0-773ae4f1a9c4" className="our-service-counter-number-wrapper">
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
                                                <div className="counter-heading our-service">+</div>
                                            </div>
                                            <div className="our-service-count-title">Recover Patient</div>
                                        </div> */}
                                        {/* <div id="w-node-ddf7f92b-b702-3b21-024a-94dd706c2ea9-b42bc025" className="our-service-count-block">
                                            <div data-w-id="ddf7f92b-b702-3b21-024a-94dd706c2eaa" className="our-service-counter-number-wrapper">
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
                                                <div className="counter-heading our-service">+</div>
                                            </div>
                                            <div className="our-service-count-title">Years Experience</div>
                                        </div> */}
                                    </div><a data-w-id="3f77d7a6-5a54-74bf-8be2-5fb34c970a8e" href="#"
                                        className="button-outline margin-top-60px w-button">See How It Works</a>
                                </div>
                                <div id="w-node-f2cecc8a-2cdc-f642-d55c-2ee7f6f22443-b42bc025"
                                    data-w-id="f2cecc8a-2cdc-f642-d55c-2ee7f6f22443" className="about-us-banner-image-two-wrap">
                                    <Image
                                        src={AboutUs}
                                        height={645} width={594}
                                        loading="lazy"
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 77vw, (max-width: 991px) 552px, (max-width: 1279px) 440px, (max-width: 1439px) 555.75px, (max-width: 1919px) 593.75px, 623px"
                                        srcSet="https://assets-global.website-files.com/65c992c37023d69385565acc/65d18632757eed4184b5f9b1_about-banner-p-500.jpg 500w, https://assets-global.website-files.com/65c992c37023d69385565acc/65d18632757eed4184b5f9b1_about-banner.jpg 623w"
                                        alt="Banner Image" className="about-us-banner-image" />

                                    {/* <img
                                        src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65d186e76ca432aa06097fd7_Top-to-right-stroke.svg"
                                        loading="lazy" alt="Border Stroke" className="top-to-right-border-stroke" /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="335" height="288" loading="lazy" alt="Border Stroke" className="top-to-right-border-stroke" viewBox="0 0 335 288" fill="none">
                                        <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M262.978 43.0321H4.10156C1.89242 43.0321 0.101562 41.2412 0.101562 39.0321V4C0.101562 1.79086 1.89243 0 4.10156 0H262.978C302.754 0 334.999 28.8992 334.999 64.5481V283.239C334.999 285.448 333.208 287.239 330.999 287.239H290.985C288.776 287.239 286.985 285.448 286.985 283.239V64.5481C286.985 52.6651 276.237 43.0321 262.978 43.0321Z" fill="#43BA7F" />
                                    </svg>
                                    {/* <img
                                        src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65d187e1602917df17114820_Left-to-bottom-stroke.svg"
                                        loading="lazy" alt="Border Stroke" className="left-to-bottom-border-stroke" /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="335" height="288" loading="lazy" alt="Border Stroke" className="left-to-bottom-border-stroke" viewBox="0 0 335 288" fill="none">
                                        <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M72.0221 244.968L330.898 244.968C333.108 244.968 334.898 246.759 334.898 248.968L334.898 284C334.898 286.209 333.108 288 330.898 288L72.0221 288C32.2461 288 0.00122352 259.101 0.001227 223.452L0.00124833 4.76114C0.00124855 2.55201 1.79211 0.761143 4.00125 0.761144L44.0152 0.761147C46.2243 0.761147 48.0152 2.55201 48.0152 4.76115L48.0151 223.452C48.0151 235.335 58.7634 244.968 72.0221 244.968Z" fill="#43BA7F" />
                                    </svg>
                                    {/* <img
                                        src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65d18bc014a8e354f16c8427_about-us-banner-dotted.svg"
                                        loading="lazy" alt="Dotted Shape" className="about-banner-dotter-shape" /> */}

                                    <svg xmlns="http://www.w3.org/2000/svg" width="166" height="146" viewBox="0 0 166 146" loading="lazy" alt="Dotted Shape" className="about-banner-dotter-shape" fill="none">
                                        <g opacity="0.5">
                                            <circle cx="161.804" cy="142.23" r="3.75615" transform="rotate(-180 161.804 142.23)" fill="#43BA7F" />
                                            <circle cx="161.804" cy="114.721" r="3.75615" transform="rotate(-180 161.804 114.721)" fill="#43BA7F" />
                                            <circle cx="161.804" cy="87.2115" r="3.75615" transform="rotate(-180 161.804 87.2115)" fill="#43BA7F" />
                                            <circle cx="161.804" cy="59.702" r="3.75615" transform="rotate(-180 161.804 59.702)" fill="#43BA7F" />
                                            <circle cx="161.804" cy="32.1926" r="3.75615" transform="rotate(-180 161.804 32.1926)" fill="#43BA7F" />
                                            <circle cx="161.804" cy="4.68294" r="3.75615" transform="rotate(-180 161.804 4.68294)" fill="#43BA7F" />
                                            <circle cx="122.293" cy="142.23" r="3.75615" transform="rotate(-180 122.293 142.23)" fill="#43BA7F" />
                                            <circle cx="122.293" cy="114.721" r="3.75615" transform="rotate(-180 122.293 114.721)" fill="#43BA7F" />
                                            <circle cx="122.293" cy="87.2115" r="3.75615" transform="rotate(-180 122.293 87.2115)" fill="#43BA7F" />
                                            <circle cx="122.293" cy="59.702" r="3.75615" transform="rotate(-180 122.293 59.702)" fill="#43BA7F" />
                                            <circle cx="122.293" cy="32.1926" r="3.75615" transform="rotate(-180 122.293 32.1926)" fill="#43BA7F" />
                                            <circle cx="122.293" cy="4.68294" r="3.75615" transform="rotate(-180 122.293 4.68294)" fill="#43BA7F" />
                                            <circle cx="82.779" cy="142.23" r="3.75615" transform="rotate(-180 82.779 142.23)" fill="#43BA7F" />
                                            <circle cx="82.781" cy="114.721" r="3.75615" transform="rotate(-180 82.781 114.721)" fill="#43BA7F" />
                                            <circle cx="82.779" cy="87.2115" r="3.75615" transform="rotate(-180 82.779 87.2115)" fill="#43BA7F" />
                                            <circle cx="82.779" cy="59.702" r="3.75615" transform="rotate(-180 82.779 59.702)" fill="#43BA7F" />
                                            <circle cx="82.781" cy="32.1926" r="3.75615" transform="rotate(-180 82.781 32.1926)" fill="#43BA7F" />
                                            <circle cx="82.779" cy="4.68294" r="3.75615" transform="rotate(-180 82.779 4.68294)" fill="#43BA7F" />
                                            <circle cx="43.2673" cy="142.23" r="3.75615" transform="rotate(-180 43.2673 142.23)" fill="#43BA7F" />
                                            <circle cx="43.2673" cy="114.721" r="3.75615" transform="rotate(-180 43.2673 114.721)" fill="#43BA7F" />
                                            <circle cx="43.2673" cy="87.2115" r="3.75615" transform="rotate(-180 43.2673 87.2115)" fill="#43BA7F" />
                                            <circle cx="43.2673" cy="59.702" r="3.75615" transform="rotate(-180 43.2673 59.702)" fill="#43BA7F" />
                                            <circle cx="43.2673" cy="32.1926" r="3.75615" transform="rotate(-180 43.2673 32.1926)" fill="#43BA7F" />
                                            <circle cx="43.2673" cy="4.68294" r="3.75615" transform="rotate(-180 43.2673 4.68294)" fill="#43BA7F" />
                                            <circle cx="3.75557" cy="142.23" r="3.75615" transform="rotate(-180 3.75557 142.23)" fill="#43BA7F" />
                                            <circle cx="3.75557" cy="114.721" r="3.75615" transform="rotate(-180 3.75557 114.721)" fill="#43BA7F" />
                                            <circle cx="3.75557" cy="87.2113" r="3.75615" transform="rotate(-180 3.75557 87.2113)" fill="#43BA7F" />
                                            <circle cx="3.75557" cy="59.7017" r="3.75615" transform="rotate(-180 3.75557 59.7017)" fill="#43BA7F" />
                                            <circle cx="3.75557" cy="32.1923" r="3.75615" transform="rotate(-180 3.75557 32.1923)" fill="#43BA7F" />
                                            <circle cx="3.75557" cy="4.68269" r="3.75615" transform="rotate(-180 3.75557 4.68269)" fill="#43BA7F" />
                                        </g>
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <section className="brand-logo-section padding-bottom-140px">
                        <div className="w-layout-blockcontainer container w-container">
                            <div data-w-id="42a7c389-563e-ef81-e875-b06e8f208986" className="brand-logo-main-wrapper">
                                <div className="brand-logo-animation-wrapper">
                                    <div className="brand-logo-block">
                                        <div className="brand-logo-wrapper">
                                            <div className="company-logo-block"><img
                                                src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65cda6374db29f47bae474d8_Asprotec.svg"
                                                loading="lazy" alt="Company Logo" className="company-logo" /></div>
                                            <div className="company-logo-block"><img
                                                src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65cda6767cfa50e206786c24_Hyposis.svg"
                                                loading="lazy" alt="Company Logo" className="company-logo" /></div>
                                            <div className="company-logo-block"><img
                                                src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65cda68ba87fbf277fc01366_promptyl.svg"
                                                loading="lazy" alt="Company Logo" className="company-logo" /></div>
                                            <div className="company-logo-block"><img
                                                src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65cda6a44db29f47bae49fa2_strequary.svg"
                                                loading="lazy" alt="Company Logo" className="company-logo" /></div>
                                            <div className="company-logo-block"><img
                                                src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65cda6bea80f1552a72a1b3a_Translic.svg"
                                                loading="lazy" alt="Company Logo" className="company-logo" /></div>
                                            <div className="company-logo-block"><img
                                                src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65cda6374db29f47bae474d8_Asprotec.svg"
                                                loading="lazy" alt="Company Logo" className="company-logo" /></div>
                                            <div className="company-logo-block"><img
                                                src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65cda6767cfa50e206786c24_Hyposis.svg"
                                                loading="lazy" alt="Company Logo" className="company-logo" /></div>
                                            <div className="company-logo-block"><img
                                                src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65cda6bea80f1552a72a1b3a_Translic.svg"
                                                loading="lazy" alt="Company Logo" className="company-logo" /></div>
                                            <div className="company-logo-block"><img
                                                src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65cda6a44db29f47bae49fa2_strequary.svg"
                                                loading="lazy" alt="Company Logo" className="company-logo" /></div>
                                            <div className="company-logo-block"><img
                                                src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65cda68ba87fbf277fc01366_promptyl.svg"
                                                loading="lazy" alt="Company Logo" className="company-logo" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    <section className="service-section padding-bottom-120px">
                        <div className="w-layout-blockcontainer container w-container">
                            <div className="service-section-wrapper">
                                <div className="section-title-wrap center margin-bottom-60px">
                                    <div className="section-sub-title">Features</div>
                                    <h2 className="section-title service service-card-content-main-cards">Features of Our AI Symptom Checker</h2>
                                </div>
                                <div className="services-grid-container services-responsive-grid  ">
                                    <div className="service-slider-item-two w-slide gynecology-card">
                                        <div className="department-slider-list-wrapper-two w-dyn-list">
                                            <div role="list" className="department-slider-list-two w-dyn-items">
                                                <div role="listitem" className="service-slider-list-item w-dyn-item">
                                                    <div className="department-slider-card-two">
                                                        <div className="department-slider-card-two-wrap">
                                                            <div style={{ borderColor: "#3e87fa" }} className="department-icon-wrapper-two">
                                                                <Image height={40} width={40}
                                                                    alt="Department Icon" loading="lazy"
                                                                    src={Cards1}
                                                                    className="department-icon" />
                                                                <div style={{ backgroundColor: "#3e87fa", }}
                                                                    className="department-icon-bg-color"></div>
                                                            </div>
                                                            <div className="department-slider-content"><a href="#"
                                                                className="department-name-link w-inline-block">
                                                                <h3 className="department-name">Instant Symptom Analysis</h3>
                                                            </a>
                                                                <p className="department-short-details two features-details-description">Our AI symptom checker processes your health concerns in real-time, providing you insights into potential causes from a vast database.
                                                                </p>
                                                                <div className="learn-more-wrap"><a href="#"
                                                                    className="learn-more-link-wrap w-inline-block">
                                                                    <div className="department-link-text">Start Your Analysis</div>
                                                                    <div className="learn-more-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg"
                                                                        width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                        <path
                                                                            d="M13.3341 10C13.3348 10.1097 13.3138 10.2184 13.2723 10.32C13.2308 10.4215 13.1697 10.5138 13.0925 10.5917L8.09247 15.5917C7.93555 15.7486 7.72272 15.8368 7.50081 15.8368C7.27889 15.8368 7.06606 15.7486 6.90914 15.5917C6.75222 15.4348 6.66406 15.222 6.66406 15C6.66406 14.7781 6.75222 14.5653 6.90914 14.4084L11.3258 10L6.91747 5.59172C6.78095 5.4323 6.70961 5.22723 6.71771 5.0175C6.72581 4.80777 6.81276 4.60882 6.96117 4.46041C7.10958 4.312 7.30853 4.22506 7.51826 4.21696C7.72799 4.20886 7.93305 4.28019 8.09247 4.41672L13.0925 9.41672C13.2464 9.57193 13.3332 9.78143 13.3341 10Z"
                                                                            fill="currentcolor" />
                                                                    </svg></div>
                                                                </a></div>
                                                            </div>
                                                        </div>
                                                        <div className="department-card-hover-shadow"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="service-slider-item-two w-slide gynecology-card">
                                        <div className="department-slider-list-wrapper-two w-dyn-list">
                                            <div role="list" className="department-slider-list-two w-dyn-items">
                                                <div role="listitem" className="service-slider-list-item w-dyn-item">
                                                    <div className="department-slider-card-two">
                                                        <div className="department-slider-card-two-wrap">
                                                            <div style={{ borderColor: "#43ba7f" }} className="department-icon-wrapper-two"><Image height={40} width={40}
                                                                alt="Department Icon" loading="lazy"
                                                                src={Cards2}
                                                                className="department-icon" />
                                                                <div style={{ backgroundColor: "#43ba7f" }} className="department-icon-bg-color"></div>
                                                            </div>
                                                            <div className="department-slider-content"><a href="#"
                                                                className="department-name-link w-inline-block">
                                                                <h3 className="department-name">Find the Right Doctor</h3>
                                                            </a>
                                                                <p className="department-short-details two features-details-description">After checking symptoms, our AI quickly recommends the right type of medical specialist, taking the guesswork out of your next crucial step.
                                                                </p>
                                                                <div className="learn-more-wrap"><a href="#"
                                                                    className="learn-more-link-wrap w-inline-block">
                                                                    <div className="department-link-text">Discover  Next Step</div>
                                                                    <div className="learn-more-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg"
                                                                        width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                        <path
                                                                            d="M13.3341 10C13.3348 10.1097 13.3138 10.2184 13.2723 10.32C13.2308 10.4215 13.1697 10.5138 13.0925 10.5917L8.09247 15.5917C7.93555 15.7486 7.72272 15.8368 7.50081 15.8368C7.27889 15.8368 7.06606 15.7486 6.90914 15.5917C6.75222 15.4348 6.66406 15.222 6.66406 15C6.66406 14.7781 6.75222 14.5653 6.90914 14.4084L11.3258 10L6.91747 5.59172C6.78095 5.4323 6.70961 5.22723 6.71771 5.0175C6.72581 4.80777 6.81276 4.60882 6.96117 4.46041C7.10958 4.312 7.30853 4.22506 7.51826 4.21696C7.72799 4.20886 7.93305 4.28019 8.09247 4.41672L13.0925 9.41672C13.2464 9.57193 13.3332 9.78143 13.3341 10Z"
                                                                            fill="currentcolor" />
                                                                    </svg></div>
                                                                </a></div>
                                                            </div>
                                                        </div>
                                                        <div className="department-card-hover-shadow"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="service-slider-item-two w-slide gynecology-card ophthalmology-main">
                                        <div className="department-slider-list-wrapper-two w-dyn-list">
                                            <div role="list" className="department-slider-list-two w-dyn-items">
                                                <div role="listitem" className="service-slider-list-item w-dyn-item">
                                                    <div className="department-slider-card-two">
                                                        <div className="department-slider-card-two-wrap">
                                                            <div style={{ borderColor: "#fe706d" }} className="department-icon-wrapper-two"><Image height={40} width={40}
                                                                alt="Department Icon" loading="lazy"
                                                                src={Cards3}
                                                                className="department-icon" />
                                                                <div style={{ backgroundColor: "#fe706d" }} className="department-icon-bg-color"></div>
                                                            </div>

                                                            <div className="department-slider-content"><a href="#"
                                                                className="department-name-link w-inline-block">
                                                                <h3 className="department-name"> Your Private Checker </h3>
                                                            </a>
                                                                <p className="department-short-details two features-details-description">This AI symptom checker is 100% completely private. No accounts or sign-ups are ever needed, ensuring all of your personal health queries remain confidential.
                                                                </p>
                                                                <div className="learn-more-wrap"><a href="#"
                                                                    className="learn-more-link-wrap w-inline-block">
                                                                    <div className="department-link-text">Discover  Next Step</div>
                                                                    <div className="learn-more-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg"
                                                                        width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                        <path
                                                                            d="M13.3341 10C13.3348 10.1097 13.3138 10.2184 13.2723 10.32C13.2308 10.4215 13.1697 10.5138 13.0925 10.5917L8.09247 15.5917C7.93555 15.7486 7.72272 15.8368 7.50081 15.8368C7.27889 15.8368 7.06606 15.7486 6.90914 15.5917C6.75222 15.4348 6.66406 15.222 6.66406 15C6.66406 14.7781 6.75222 14.5653 6.90914 14.4084L11.3258 10L6.91747 5.59172C6.78095 5.4323 6.70961 5.22723 6.71771 5.0175C6.72581 4.80777 6.81276 4.60882 6.96117 4.46041C7.10958 4.312 7.30853 4.22506 7.51826 4.21696C7.72799 4.20886 7.93305 4.28019 8.09247 4.41672L13.0925 9.41672C13.2464 9.57193 13.3332 9.78143 13.3341 10Z"
                                                                            fill="currentcolor" />
                                                                    </svg></div>
                                                                </a></div>
                                                            </div>
                                                        </div>
                                                        <div className="department-card-hover-shadow"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="service-slider-item-two w-slide ophthalmology-main">
                                        <div className="department-slider-list-wrapper-two w-dyn-list">
                                            <div role="list" className="department-slider-list-two w-dyn-items">
                                                <div role="listitem" className="service-slider-list-item w-dyn-item">
                                                    <div className="department-slider-card-two">
                                                        <div style={{ borderColor: "#fe706d" }} className="department-slider-card-two-wrap">
                                                            <div className="department-icon-wrapper-two"><img
                                                                alt="Department Icon" loading="lazy"
                                                                src="https://cdn.prod.website-files.com/65cb4d1ed2f90340ed5047d9/65cb4f183241e07919c515dd_ophthalmology.png"
                                                                className="department-icon" />
                                                                <div style={{ backgroundColor: "#fe706d" }} className="department-icon-bg-color"></div>
                                                            </div>
                                                            <div className="department-slider-content"><a href="#"
                                                                className="department-name-link w-inline-block">
                                                                <h3 className="department-name">Anonymous Symptom Checker</h3>
                                                            </a>
                                                                <p className="department-short-details two">This AI symptom checker is 100% private and free. No accounts or sign-ups are ever needed, ensuring your health queries remain confidential.</p>
                                                                <div className="learn-more-wrap"><a href="#"
                                                                    className="learn-more-link-wrap w-inline-block">
                                                                    <div className="department-link-text">Use Anonymously</div>
                                                                    <div className="learn-more-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg"
                                                                        width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                        <path
                                                                            d="M13.3341 10C13.3348 10.1097 13.3138 10.2184 13.2723 10.32C13.2308 10.4215 13.1697 10.5138 13.0925 10.5917L8.09247 15.5917C7.93555 15.7486 7.72272 15.8368 7.50081 15.8368C7.27889 15.8368 7.06606 15.7486 6.90914 15.5917C6.75222 15.4348 6.66406 15.222 6.66406 15C6.66406 14.7781 6.75222 14.5653 6.90914 14.4084L11.3258 10L6.91747 5.59172C6.78095 5.4323 6.70961 5.22723 6.71771 5.0175C6.72581 4.80777 6.81276 4.60882 6.96117 4.46041C7.10958 4.312 7.30853 4.22506 7.51826 4.21696C7.72799 4.20886 7.93305 4.28019 8.09247 4.41672L13.0925 9.41672C13.2464 9.57193 13.3332 9.78143 13.3341 10Z"
                                                                            fill="currentcolor" />
                                                                    </svg></div>
                                                                </a></div>
                                                            </div>
                                                        </div>
                                                        <div className="department-card-hover-shadow"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="service-slider-item-two w-slide gynecology-card ophthalmology-main">
                                        <div className="department-slider-list-wrapper-two w-dyn-list">
                                            <div role="list" className="department-slider-list-two w-dyn-items">
                                                <div role="listitem" className="service-slider-list-item w-dyn-item">
                                                    <div className="department-slider-card-two">
                                                        <div className="department-slider-card-two-wrap">
                                                            <div style={{ borderColor: "#2bb6f2" }} className="department-icon-wrapper-two"><Image height={40} width={40}
                                                                alt="Department Icon" loading="lazy"
                                                                src={Cards4}
                                                                className="department-icon" />
                                                                <div style={{ backgroundColor: "#2bb6f2" }} className="department-icon-bg-color"></div>
                                                            </div>
                                                            <div className="department-slider-content"><a href="#"
                                                                className="department-name-link w-inline-block">
                                                                <h3 className="department-name">Clear & Simple Explanations</h3>
                                                            </a>
                                                                <p className="department-short-details two features-details-description">Our free symptom checker translates confusing medical jargon into plain language, empowering you with information you can understand and act on.
                                                                </p>
                                                                <div className="learn-more-wrap"><a href="#"
                                                                    className="learn-more-link-wrap w-inline-block">
                                                                    <div className="department-link-text">Get Clear Answers</div>
                                                                    <div className="learn-more-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg"
                                                                        width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                        <path
                                                                            d="M13.3341 10C13.3348 10.1097 13.3138 10.2184 13.2723 10.32C13.2308 10.4215 13.1697 10.5138 13.0925 10.5917L8.09247 15.5917C7.93555 15.7486 7.72272 15.8368 7.50081 15.8368C7.27889 15.8368 7.06606 15.7486 6.90914 15.5917C6.75222 15.4348 6.66406 15.222 6.66406 15C6.66406 14.7781 6.75222 14.5653 6.90914 14.4084L11.3258 10L6.91747 5.59172C6.78095 5.4323 6.70961 5.22723 6.71771 5.0175C6.72581 4.80777 6.81276 4.60882 6.96117 4.46041C7.10958 4.312 7.30853 4.22506 7.51826 4.21696C7.72799 4.20886 7.93305 4.28019 8.09247 4.41672L13.0925 9.41672C13.2464 9.57193 13.3332 9.78143 13.3341 10Z"
                                                                            fill="currentcolor" />
                                                                    </svg></div>
                                                                </a></div>
                                                            </div>
                                                        </div>
                                                        <div className="department-card-hover-shadow"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="department-slider-arrow left w-slider-arrow-left">
                                    <div className="department-slider-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                        height="20" viewBox="0 0 20 20" fill="none">
                                        <path
                                            d="M6.66586 9.99995C6.66523 9.89028 6.68625 9.78156 6.72772 9.68003C6.76919 9.5785 6.83029 9.48615 6.90753 9.40828L11.9075 4.40828C12.0644 4.25136 12.2773 4.16321 12.4992 4.16321C12.7211 4.16321 12.9339 4.25136 13.0909 4.40828C13.2478 4.5652 13.3359 4.77803 13.3359 4.99995C13.3359 5.22187 13.2478 5.4347 13.0909 5.59162L8.67419 9.99995L13.0825 14.4083C13.219 14.5677 13.2904 14.7728 13.2823 14.9825C13.2742 15.1922 13.1872 15.3912 13.0388 15.5396C12.8904 15.688 12.6915 15.7749 12.4817 15.783C12.272 15.7911 12.0669 15.7198 11.9075 15.5833L6.90753 10.5833C6.75357 10.4281 6.66678 10.2186 6.66586 9.99995Z"
                                            fill="currentcolor" />
                                    </svg></div>
                                </div>
                                <div className="department-slider-arrow right w-slider-arrow-right">
                                    <div className="department-slider-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                        height="20" viewBox="0 0 20 20" fill="none">
                                        <path
                                            d="M13.3341 10C13.3348 10.1097 13.3138 10.2184 13.2723 10.32C13.2308 10.4215 13.1697 10.5138 13.0925 10.5917L8.09247 15.5917C7.93555 15.7486 7.72272 15.8368 7.50081 15.8368C7.27889 15.8368 7.06606 15.7486 6.90914 15.5917C6.75222 15.4348 6.66406 15.222 6.66406 15C6.66406 14.7781 6.75222 14.5653 6.90914 14.4084L11.3258 10L6.91747 5.59172C6.78095 5.4323 6.70961 5.22723 6.71771 5.0175C6.72581 4.80777 6.81276 4.60882 6.96117 4.46041C7.10958 4.312 7.30853 4.22506 7.51826 4.21696C7.72799 4.20886 7.93305 4.28019 8.09247 4.41672L13.0925 9.41672C13.2464 9.57193 13.3332 9.78143 13.3341 10Z"
                                            fill="currentColor" />
                                    </svg></div>
                                </div>
                                <div className="slider-hidden-nav w-slider-nav w-round w-num"></div>
                            </div>
                        </div>

                    </section>
                    {/* <section className="why-choose-us-section">
                        <div className="w-layout-blockcontainer container w-container">
                            <div className="why-choose-us-wrapper">
                                <div data-w-id="f34925de-57d7-6745-f4b4-d11503632aa5"  className="why-choose-us-content-wrap">
                                    <div className="section-sub-title-choose-us choose-us">Why Choose Us</div>
                                    <h2 className="section-title-choose-us choose-us">Why Should You Choose Us? See This Video</h2>
                                    <ul role="list" className="choose-us-item-list-wrap">
                                        <li className="choose-us-list-item">Top specialist doctor</li>
                                        <li className="choose-us-list-item">State of the art doctor services</li>
                                        <li className="choose-us-list-item">Discount for all medical treatment</li>
                                        <li className="choose-us-list-item">Enrollment is quick and easy</li>
                                    </ul>
                                    <div className="button-primary-wrap margin-top-60px"><a href="../appointment.html"
                                        className="button-primary w-button">Book Appointment</a></div><img
                                        src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65d1f1c0ea63792f42dc1782_choose-us-content-bottom-shape.svg"
                                        loading="lazy" alt="Shape" className="choose-us-content-shape-bottom" /><img
                                        src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65d1f1ed4bfe0f909f90fb57_choose-us-content-bottom-top-shape.svg"
                                        loading="lazy" alt="Shape" className="choose-us-content-shape-bottom-top" />
                                </div>
                                <div data-w-id="4f4acb58-f247-8de3-f696-fd0a254a0d4e"  className="why-choice-us-banner-wrap">
                                    <img
                                        src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65d1ed53f17f19b1fb6bf58a_choose-us-video-bg.jpg"
                                        loading="lazy" sizes="100vw"
                                        srcSet="https://assets-global.website-files.com/65c992c37023d69385565acc/65d1ed53f17f19b1fb6bf58a_choose-us-video-bg-p-500.jpg 500w, https://assets-global.website-files.com/65c992c37023d69385565acc/65d1ed53f17f19b1fb6bf58a_choose-us-video-bg.jpg 700w"
                                        alt="Choose Us Banner Image" className="choose-us-banner-image" />
                                    <div className="choose-us-banner-color-overly"></div><a href="home-two.html#"
                                        data-w-id="b0a2d9ca-5ace-2d7b-19db-f3b88bcbad19" 
                                        className="preview-video-lightbox choose-us w-inline-block w-lightbox">
                                        <div className="play-button-wrapper">
                                            <div className="play-button-block preview-lightbox"><img
                                                src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65d1eedc50a2ea9f70c6461b_Polygon-1.png"
                                                loading="lazy" alt="Play Icon" className="play-icon" /></div>
                                            <div className="play-wave-1 preview-lightbox"></div>
                                            <div className="play-wave-2 preview-lightbox"></div>
                                        </div>
                                        
                                </a>
                            </div>
                        </div>
                    </div>
                </section> */}
                    {/* <section className="our-doctor-section section-gap-y-axis-140px">
                    <div className="w-layout-blockcontainer container w-container">
                        <div className="our-doctor-wrapper">
                            <div className="section-title-wrap center margin-bottom-60px">
                                <div className="section-sub-title">Our Doctors</div>
                                <h2 className="section-title our-doctor">Get service Our Quality Doctors</h2>
                            </div>
                            <div data-w-id="3172fb71-fbc2-415b-8129-8d87a4c6cbf6"  className="our-doctor-item-wrapper">
                                <div className="doctor-list-wrapper w-dyn-list">
                                    <div role="list" className="doctor-list w-dyn-items">
                                        <div role="listitem" className="doctor-list-item w-dyn-item">
                                            <div data-w-id="146bd16b-b1b4-a6ca-72d2-75a03908a080" className="doctor-card-wrapper">
                                                <div className="doctor-card">
                                                    <div className="doctors-card-wrap">
                                                        <div className="doctor-image-wrapper"><img
                                                            alt="Department Icon" loading="lazy"
                                                            src="https://cdn.prod.website-files.com/65cb4d1ed2f90340ed5047d9/65cc8aacf3278495aac9c380_dr-david-martin.png"
                                                            className="doctor-image" /></div>
                                                        <div className="doctor-slider-content"><a href="../doctor-specialty/ophthalmologist.html"
                                                            className="doctor-designation-link w-inline-block">
                                                            <div className="doctor-designation">Ophthalmologist</div>
                                                        </a><a href="../doctors/dr-david-martin.html" className="doctor-name-link two w-inline-block">
                                                                <div className="doctor-name">Dr. David Martin</div>
                                                            </a>
                                                            <div className="review-block">
                                                                <div className="start-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="19"
                                                                    height="18" viewBox="0 0 19 18" fill="none">
                                                                    <path
                                                                        d="M9.02447 0.463526C9.17415 0.0028708 9.82585 0.00287008 9.97553 0.463525L11.7451 5.90983C11.8121 6.11584 12.0041 6.25532 12.2207 6.25532H17.9473C18.4316 6.25532 18.633 6.87513 18.2411 7.15983L13.6082 10.5258C13.433 10.6532 13.3597 10.8788 13.4266 11.0848L15.1962 16.5312C15.3459 16.9918 14.8187 17.3749 14.4268 17.0902L9.79389 13.7242C9.61865 13.5968 9.38135 13.5968 9.20611 13.7242L4.5732 17.0902C4.18135 17.3749 3.65411 16.9918 3.80378 16.5312L5.57339 11.0848C5.64033 10.8788 5.567 10.6532 5.39176 10.5258L0.758856 7.15983C0.366999 6.87513 0.568387 6.25532 1.05275 6.25532H6.77933C6.99594 6.25532 7.18792 6.11584 7.25486 5.90983L9.02447 0.463526Z"
                                                                        fill="#43BA7F" />
                                                                </svg></div>
                                                                <div className="patient-review">4.8 (112 Review)</div>
                                                            </div><a href="../appointment.html" className="book-appoinment-link-wrap w-inline-block">
                                                                <div className="book-appointment-link-text">Book Appointment</div>
                                                                <div className="learn-more-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M13.3341 10C13.3348 10.1097 13.3138 10.2184 13.2723 10.32C13.2308 10.4215 13.1697 10.5138 13.0925 10.5917L8.09247 15.5917C7.93555 15.7486 7.72272 15.8368 7.50081 15.8368C7.27889 15.8368 7.06606 15.7486 6.90914 15.5917C6.75222 15.4348 6.66406 15.222 6.66406 15C6.66406 14.7781 6.75222 14.5653 6.90914 14.4084L11.3258 10L6.91747 5.59172C6.78095 5.4323 6.70961 5.22723 6.71771 5.0175C6.72581 4.80777 6.81276 4.60882 6.96117 4.46041C7.10958 4.312 7.30853 4.22506 7.51826 4.21696C7.72799 4.20886 7.93305 4.28019 8.09247 4.41672L13.0925 9.41672C13.2464 9.57193 13.3332 9.78143 13.3341 10Z"
                                                                        fill="currentcolor" />
                                                                </svg></div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="listitem" className="doctor-list-item w-dyn-item">
                                            <div data-w-id="146bd16b-b1b4-a6ca-72d2-75a03908a080" className="doctor-card-wrapper">
                                                <div className="doctor-card">
                                                    <div className="doctors-card-wrap">
                                                        <div className="doctor-image-wrapper"><img
                                                            alt="Department Icon" loading="lazy"
                                                            src="https://cdn.prod.website-files.com/65cb4d1ed2f90340ed5047d9/65cc8a4f6f2babb31de67957_dr-robert-jackson.png"
                                                            className="doctor-image" /></div>
                                                        <div className="doctor-slider-content"><a href="../doctor-specialty/neurologist.html"
                                                            className="doctor-designation-link w-inline-block">
                                                            <div className="doctor-designation">Neurologist</div>
                                                        </a><a href="../doctors/dr-robert-jackson.html" className="doctor-name-link two w-inline-block">
                                                                <div className="doctor-name">Dr. Robert Jackson</div>
                                                            </a>
                                                            <div className="review-block">
                                                                <div className="start-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="19"
                                                                    height="18" viewBox="0 0 19 18" fill="none">
                                                                    <path
                                                                        d="M9.02447 0.463526C9.17415 0.0028708 9.82585 0.00287008 9.97553 0.463525L11.7451 5.90983C11.8121 6.11584 12.0041 6.25532 12.2207 6.25532H17.9473C18.4316 6.25532 18.633 6.87513 18.2411 7.15983L13.6082 10.5258C13.433 10.6532 13.3597 10.8788 13.4266 11.0848L15.1962 16.5312C15.3459 16.9918 14.8187 17.3749 14.4268 17.0902L9.79389 13.7242C9.61865 13.5968 9.38135 13.5968 9.20611 13.7242L4.5732 17.0902C4.18135 17.3749 3.65411 16.9918 3.80378 16.5312L5.57339 11.0848C5.64033 10.8788 5.567 10.6532 5.39176 10.5258L0.758856 7.15983C0.366999 6.87513 0.568387 6.25532 1.05275 6.25532H6.77933C6.99594 6.25532 7.18792 6.11584 7.25486 5.90983L9.02447 0.463526Z"
                                                                        fill="#43BA7F" />
                                                                </svg></div>
                                                                <div className="patient-review">4.8 (135 Review)</div>
                                                            </div><a href="../appointment.html" className="book-appoinment-link-wrap w-inline-block">
                                                                <div className="book-appointment-link-text">Book Appointment</div>
                                                                <div className="learn-more-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M13.3341 10C13.3348 10.1097 13.3138 10.2184 13.2723 10.32C13.2308 10.4215 13.1697 10.5138 13.0925 10.5917L8.09247 15.5917C7.93555 15.7486 7.72272 15.8368 7.50081 15.8368C7.27889 15.8368 7.06606 15.7486 6.90914 15.5917C6.75222 15.4348 6.66406 15.222 6.66406 15C6.66406 14.7781 6.75222 14.5653 6.90914 14.4084L11.3258 10L6.91747 5.59172C6.78095 5.4323 6.70961 5.22723 6.71771 5.0175C6.72581 4.80777 6.81276 4.60882 6.96117 4.46041C7.10958 4.312 7.30853 4.22506 7.51826 4.21696C7.72799 4.20886 7.93305 4.28019 8.09247 4.41672L13.0925 9.41672C13.2464 9.57193 13.3332 9.78143 13.3341 10Z"
                                                                        fill="currentcolor" />
                                                                </svg></div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="listitem" className="doctor-list-item w-dyn-item">
                                            <div data-w-id="146bd16b-b1b4-a6ca-72d2-75a03908a080" className="doctor-card-wrapper">
                                                <div className="doctor-card">
                                                    <div className="doctors-card-wrap">
                                                        <div className="doctor-image-wrapper"><img
                                                            alt="Department Icon" loading="lazy"
                                                            src="https://cdn.prod.website-files.com/65cb4d1ed2f90340ed5047d9/65cc8a2143e4ccf99672dab2_dr-sarah-davis.png"
                                                            className="doctor-image" /></div>
                                                        <div className="doctor-slider-content"><a href="../doctor-specialty/gynecologist.html"
                                                            className="doctor-designation-link w-inline-block">
                                                            <div className="doctor-designation">Gynecologist</div>
                                                        </a><a href="../doctors/dr-sarah-davis.html" className="doctor-name-link two w-inline-block">
                                                                <div className="doctor-name">Dr. Sarah Davis</div>
                                                            </a>
                                                            <div className="review-block">
                                                                <div className="start-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="19"
                                                                    height="18" viewBox="0 0 19 18" fill="none">
                                                                    <path
                                                                        d="M9.02447 0.463526C9.17415 0.0028708 9.82585 0.00287008 9.97553 0.463525L11.7451 5.90983C11.8121 6.11584 12.0041 6.25532 12.2207 6.25532H17.9473C18.4316 6.25532 18.633 6.87513 18.2411 7.15983L13.6082 10.5258C13.433 10.6532 13.3597 10.8788 13.4266 11.0848L15.1962 16.5312C15.3459 16.9918 14.8187 17.3749 14.4268 17.0902L9.79389 13.7242C9.61865 13.5968 9.38135 13.5968 9.20611 13.7242L4.5732 17.0902C4.18135 17.3749 3.65411 16.9918 3.80378 16.5312L5.57339 11.0848C5.64033 10.8788 5.567 10.6532 5.39176 10.5258L0.758856 7.15983C0.366999 6.87513 0.568387 6.25532 1.05275 6.25532H6.77933C6.99594 6.25532 7.18792 6.11584 7.25486 5.90983L9.02447 0.463526Z"
                                                                        fill="#43BA7F" />
                                                                </svg></div>
                                                                <div className="patient-review">4.8 (147 Review)</div>
                                                            </div><a href="../appointment.html" className="book-appoinment-link-wrap w-inline-block">
                                                                <div className="book-appointment-link-text">Book Appointment</div>
                                                                <div className="learn-more-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M13.3341 10C13.3348 10.1097 13.3138 10.2184 13.2723 10.32C13.2308 10.4215 13.1697 10.5138 13.0925 10.5917L8.09247 15.5917C7.93555 15.7486 7.72272 15.8368 7.50081 15.8368C7.27889 15.8368 7.06606 15.7486 6.90914 15.5917C6.75222 15.4348 6.66406 15.222 6.66406 15C6.66406 14.7781 6.75222 14.5653 6.90914 14.4084L11.3258 10L6.91747 5.59172C6.78095 5.4323 6.70961 5.22723 6.71771 5.0175C6.72581 4.80777 6.81276 4.60882 6.96117 4.46041C7.10958 4.312 7.30853 4.22506 7.51826 4.21696C7.72799 4.20886 7.93305 4.28019 8.09247 4.41672L13.0925 9.41672C13.2464 9.57193 13.3332 9.78143 13.3341 10Z"
                                                                        fill="currentcolor" />
                                                                </svg></div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div role="listitem" className="doctor-list-item w-dyn-item">
                                            <div data-w-id="146bd16b-b1b4-a6ca-72d2-75a03908a080" className="doctor-card-wrapper">
                                                <div className="doctor-card">
                                                    <div className="doctors-card-wrap">
                                                        <div className="doctor-image-wrapper"><img
                                                            alt="Department Icon" loading="lazy"
                                                            src="https://cdn.prod.website-files.com/65cb4d1ed2f90340ed5047d9/65cc89f6ac1c58da55ccfbbc_dr-jessica-white.png"
                                                            className="doctor-image" /></div>
                                                        <div className="doctor-slider-content"><a href="../doctor-specialty/pediatrician.html"
                                                            className="doctor-designation-link w-inline-block">
                                                            <div className="doctor-designation">Pediatrician</div>
                                                        </a><a href="../doctors/dr-jessica-white.html" className="doctor-name-link two w-inline-block">
                                                                <div className="doctor-name">Dr. Jessica White</div>
                                                            </a>
                                                            <div className="review-block">
                                                                <div className="start-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="19"
                                                                    height="18" viewBox="0 0 19 18" fill="none">
                                                                    <path
                                                                        d="M9.02447 0.463526C9.17415 0.0028708 9.82585 0.00287008 9.97553 0.463525L11.7451 5.90983C11.8121 6.11584 12.0041 6.25532 12.2207 6.25532H17.9473C18.4316 6.25532 18.633 6.87513 18.2411 7.15983L13.6082 10.5258C13.433 10.6532 13.3597 10.8788 13.4266 11.0848L15.1962 16.5312C15.3459 16.9918 14.8187 17.3749 14.4268 17.0902L9.79389 13.7242C9.61865 13.5968 9.38135 13.5968 9.20611 13.7242L4.5732 17.0902C4.18135 17.3749 3.65411 16.9918 3.80378 16.5312L5.57339 11.0848C5.64033 10.8788 5.567 10.6532 5.39176 10.5258L0.758856 7.15983C0.366999 6.87513 0.568387 6.25532 1.05275 6.25532H6.77933C6.99594 6.25532 7.18792 6.11584 7.25486 5.90983L9.02447 0.463526Z"
                                                                        fill="#43BA7F" />
                                                                </svg></div>
                                                                <div className="patient-review">4.8 (150 Review)</div>
                                                            </div><a href="../appointment.html" className="book-appoinment-link-wrap w-inline-block">
                                                                <div className="book-appointment-link-text">Book Appointment</div>
                                                                <div className="learn-more-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M13.3341 10C13.3348 10.1097 13.3138 10.2184 13.2723 10.32C13.2308 10.4215 13.1697 10.5138 13.0925 10.5917L8.09247 15.5917C7.93555 15.7486 7.72272 15.8368 7.50081 15.8368C7.27889 15.8368 7.06606 15.7486 6.90914 15.5917C6.75222 15.4348 6.66406 15.222 6.66406 15C6.66406 14.7781 6.75222 14.5653 6.90914 14.4084L11.3258 10L6.91747 5.59172C6.78095 5.4323 6.70961 5.22723 6.71771 5.0175C6.72581 4.80777 6.81276 4.60882 6.96117 4.46041C7.10958 4.312 7.30853 4.22506 7.51826 4.21696C7.72799 4.20886 7.93305 4.28019 8.09247 4.41672L13.0925 9.41672C13.2464 9.57193 13.3332 9.78143 13.3341 10Z"
                                                                        fill="currentcolor" />
                                                                </svg></div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-w-id="43f4e47c-8c28-ea2e-7620-4f1dc1125897" 
                                    className="button-wrap align-center margin-top-60px"><a href="../doctors.html"
                                        className="button-outline w-button">View All Doctors</a></div>
                            </div>
                        </div>
                    </div>
                </section> */}
                    <section className="quiz-section section padding-bottom-115px">
                        <div className="w-layout-blockcontainer container-quiz w-container">
                            <div className="quiz-structure structure">
                                <div className="quiz-image-border-radius">
                                    <Image src={WorriesMind} width={645} height={720} loading="lazy" alt="A woman with curly blonde hair, resting her head on her hand, gazing thoughtfully into the distance." className="quiz-image size" />
                                </div>
                                <div className="quiz-content-box padding">
                                    <div className="quiz-heading-margin-bottom margin-bottom-default">
                                        <h2 className="h2-quiz section-title service">Are These Health Worries on Your Mind?</h2>

                                    </div>
                                    <div className="quiz-blurbs-structure">
                                        <div className="tag-emoji-border-radius">
                                            <div className="tag-emoji-background background-light">
                                                <div className="tag-emoji-padding padding">
                                                    <div className="emoji-on-tag">😰</div>
                                                    {/* <div className="tag-text-small quiz">I should <strong>check on that symptom </strong></div> */}
                                                    <div className="tag-text-small quiz">What if this <br></br> <p className="yourself-cards-datas health-worries-card-content">symptom is <br></br> something serious? </p></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tag-emoji-border-radius">
                                            <div className="tag-emoji-background background-light">
                                                <div className="tag-emoji-padding padding">
                                                    <div className="emoji-on-tag">🤯</div>
                                                    {/* <div className="tag-text-small quiz"><strong>It s been a while </strong>since my last check-up</div> */}
                                                    <div className="tag-text-small quiz text-start"><span className="yourself-cards-datas health-worries-card-content">Web searches are  </span> just making me <br></br>more anxious.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tag-emoji-border-radius">
                                            <div className="tag-emoji-background background-light">
                                                <div className="tag-emoji-padding padding">
                                                    <div className="emoji-on-tag">🤔</div>
                                                    <div className="tag-text-small quiz "><span className="yourself-cards-datas health-worries-card-content">{"I don't even know"} <br></br> which </span> type of <br></br> doctor to call.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dash-line-top-bottom-margin">
                                        <div className="divider-line-dashed"></div>
                                    </div>
                                    <h3 className="h3-small ">Stop the worry and uncertainty with our intelligent, free AI Symptom Checker.</h3>
                                    <p className="take-contetnt">{"If these thoughts feel familiar, you're not alone. Use our confidential chat to analyze your symptoms, understand potential causes, and learn which specialist to consult. It's fast and easy."}
                                    </p>
                                    <a href="#" className="button base w-inline-block take-quiz-btn">
                                        <div className="flex-no-gap align-y-center">
                                            <div>Get Answers Now—Takes 2 Min</div>
                                            <div className="hide-arrow-horizontally-box">
                                                <svg viewBox="0 0 13 7" fill="none" className="button-right-arrow">
                                                    <path d="M12.3638 1L6.65991 6L0.956046 1" strokeWidth="2" stroke="currentColor"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="testimonial-section padding-bottom-120px">
                        <div className="w-layout-blockcontainer container w-container">
                            <div className="section-title-wrap center">
                                <div className="section-sub-title">Testimonials</div>
                                <h2 className="section-title text-center">{"Real Stories From People We've Helped"}</h2>
                            </div>
                            <TestimonialSlider />
                            {/* <div className="testimonial-slider-wrapper">
                                <div data-delay="2000" data-animation="slide" className="testimonial-slider w-slider" data-autoplay="true"
                                    data-easing="ease" data-hide-arrows="true" data-disable-swipe="false"
                                    data-w-id="0e9830d1-3f44-d20d-f744-1a13471ce635" data-autoplay-limit="0" data-nav-spacing="0"
                                    data-duration="800" data-infinite="true" data-loop="true">
                                    <div className="testimonial-slider-mask w-slider-mask">
                                        <div className="testimonial-slider-item w-slide">
                                            <div className="testimonial-slider-card">
                                                <div className="patient-profile-wrapper"><Image alt="Department Icon" loading="lazy"
                                                    src={Doctors1} height={100} width={100}
                                                    className="patient-profile-image" /></div>
                                                <div className="testimonail-slider-content">
                                                    <div className="testimonail-patient-name">Priya S.</div>
                                                    <div className="patient-designation">Graphic Designer
                                                    </div>
                                                    <p className="department-short-details">Googling my symptoms was terrifying. A friend suggested needan, and the relief was instant. It gave me a clear, calm list of possibilities and pointed me to the right specialist. Incredible tool!
                                                    </p>
                                                    <div className="patient-star-review-block"><Image height={18} width={19}
                                                        src={Start}
                                                        loading="lazy" alt="Star Icon" className="star-icon" /><Image height={18} width={19}
                                                            src={Start}
                                                            loading="lazy" alt="Star Icon" className="star-icon" /><Image height={18} width={19}
                                                                src={Start}
                                                                loading="lazy" alt="Star Icon" className="star-icon" /><Image height={18} width={19}
                                                                    src={Start}
                                                                    loading="lazy" alt="Star Icon" className="star-icon" /><Image height={18} width={19}
                                                                        src={StartBlank}
                                                                        loading="lazy" alt="Star Icon" className="star-icon" /></div>
                                                </div>
                                                <div className="testimonial-card-hover-shadow"></div><Image width={82} height={70}
                                                    src={CardsSine}
                                                    loading="lazy" alt="Dotted Icon" className="testimonial-dotted-image" />
                                            </div>
                                        </div>
                                        <div className="testimonial-slider-item w-slide">
                                            <div className="testimonial-slider-card">
                                                <div className="patient-profile-wrapper"><Image alt="Department Icon" loading="lazy"
                                                    src={Doctors2} height={100} width={100}
                                                    className="patient-profile-image" /></div>
                                                <div className="testimonail-slider-content">
                                                    <div className="testimonail-patient-name">Mark T. </div>
                                                    <div className="patient-designation">High School Teacher</div>
                                                    <p className="department-short-details">I had a weird mix of symptoms and no idea who to call. This AI checker analyzed everything and suggested a dermatologist. It was spot on. Saved me so much time.
                                                    </p>
                                                    <div className="patient-star-review-block"><Image height={18} width={19}
                                                        src={Start}
                                                        loading="lazy" alt="Star Icon" className="star-icon" /><Image height={18} width={19}
                                                            src={Start}
                                                            loading="lazy" alt="Star Icon" className="star-icon" /><Image height={18} width={19}
                                                                src={Start}
                                                                loading="lazy" alt="Star Icon" className="star-icon" /><Image height={18} width={19}
                                                                    src={StartBlank}
                                                                    loading="lazy" alt="Star Icon" className="star-icon" /><Image height={18} width={19}
                                                                        src={StartBlank}
                                                                        loading="lazy" alt="Star Icon" className="star-icon" /></div>
                                                </div>
                                                <div className="testimonial-card-hover-shadow"></div><Image width={82} height={70}
                                                    src={CardsSine}
                                                    loading="lazy" alt="Dotted Icon" className="testimonial-dotted-image" />
                                            </div>
                                        </div>
                                        <div className="testimonial-slider-item w-slide">
                                            <div className="testimonial-slider-card">
                                                <div className="patient-profile-wrapper"><Image alt="Department Icon" loading="lazy"
                                                    src={Doctors3} height={100} width={100}
                                                    className="patient-profile-image" /></div>
                                                <div className="testimonail-slider-content">
                                                    <div className="testimonail-patient-name">Anjali M.</div>
                                                    <div className="patient-designation">University Student
                                                    </div>
                                                    <p className="department-short-details">{"As a student, I can't afford multiple doctor visits. This tool gave me a much-needed, totally free, anonymous first step. It was so fast and helped me decide exactly what to do next."}</p>
                                                    <div className="patient-star-review-block"><Image height={18} width={19}
                                                        src={Start}
                                                        loading="lazy" alt="Star Icon" className="star-icon" /><Image height={18} width={19}
                                                            src={Start}
                                                            loading="lazy" alt="Star Icon" className="star-icon" /><Image height={18} width={19}
                                                                src={Start}
                                                                loading="lazy" alt="Star Icon" className="star-icon" /><Image height={18} width={19}
                                                                    src={Start}
                                                                    loading="lazy" alt="Star Icon" className="star-icon" /><Image height={18} width={19}
                                                                        src={StartBlank}
                                                                        loading="lazy" alt="Star Icon" className="star-icon" /></div>
                                                </div>
                                                <div className="testimonial-card-hover-shadow"></div><Image width={82} height={70}
                                                    src={CardsSine}
                                                    loading="lazy" alt="Dotted Icon" className="testimonial-dotted-image" />
                                            </div>
                                        </div>
                                        <div className="testimonial-slider-item w-slide">
                                            <div className="testimonial-slider-card">
                                                <div className="patient-profile-wrapper"><Image height={100} width={100} alt="Department Icon" loading="lazy"
                                                    src={Doctors4}
                                                    className="patient-profile-image" /></div>
                                                <div className="testimonail-slider-content">
                                                    <div className="testimonail-patient-name">David L.</div>
                                                    <div className="patient-designation">Small Business Owner</div>
                                                    <p className="department-short-details">I was skeptical about an AI, but the accuracy was impressive. It provided a logical breakdown of my symptoms without scary jargon. A useful service for getting quick health guidance.
                                                    </p>
                                                    <div className="patient-star-review-block"><Image height={18} width={19}
                                                        src={Start}
                                                        loading="lazy" alt="Star Icon" className="star-icon" /><Image height={18} width={19}
                                                            src={Start}
                                                            loading="lazy" alt="Star Icon" className="star-icon" /><Image height={18} width={19}
                                                                src={Start}
                                                                loading="lazy" alt="Star Icon" className="star-icon" /><Image height={18} width={19}
                                                                    src={StartBlank}
                                                                    loading="lazy" alt="Star Icon" className="star-icon" />
                                                                    <Image height={18} width={19}
                                                                        src={StartBlank}
                                                                        loading="lazy" alt="Star Icon" className="star-icon" />
                                                                        
                                                                        </div>
                                                </div>
                                                <div className="testimonial-card-hover-shadow"></div><Image width={82} height={70}
                                                    src={CardsSine}
                                                    loading="lazy" alt="Dotted Icon" className="testimonial-dotted-image" />
                                            </div>
                                        </div>
                                        <div className="testimonial-slider-item w-slide">
                                            <div className="testimonial-slider-card">
                                                <div className="patient-profile-wrapper"><Image height={100} width={100} alt="Department Icon" loading="lazy"
                                                    src={Doctors5}
                                                    className="patient-profile-image" /></div>
                                                <div className="testimonail-slider-content">
                                                    <div className="testimonail-patient-name">Fatima K.</div>
                                                    <div className="patient-designation">Freelance Writer</div>
                                                    <p className="department-short-details">The chat interface is brilliant—so simple and intuitive. In just two minutes, I went from feeling completely lost and worried to having a clear, actionable plan. I highly recommend this.
                                                    </p>
                                                    <div className="patient-star-review-block"><Image height={18} width={19}
                                                        src={Start}
                                                        loading="lazy" alt="Star Icon" className="star-icon" /><Image height={18} width={19}
                                                            src={Start}
                                                            loading="lazy" alt="Star Icon" className="star-icon" /><Image height={18} width={19}
                                                                src={Start}
                                                                loading="lazy" alt="Star Icon" className="star-icon" />
                                                                <Image height={18} width={19}
                                                                        src={Start}
                                                                        loading="lazy" alt="Star Icon" className="star-icon" />
                                                                    <Image height={18} width={19}
                                                                        src={StartBlank}
                                                                        loading="lazy" alt="Star Icon" className="star-icon" /></div>
                                                </div>
                                                <div className="testimonial-card-hover-shadow"></div><Image width={82} height={70}
                                                    src={CardsSine}
                                                    loading="lazy" alt="Dotted Icon" className="testimonial-dotted-image" />
                                            </div>
                                        </div>
                                        <div className="testimonial-slider-item w-slide">
                                            <div className="testimonial-slider-card">
                                                <div className="patient-profile-wrapper"><Image height={100} width={100} alt="Department Icon" loading="lazy"
                                                    src={Doctors6}
                                                    className="patient-profile-image" /></div>
                                                <div className="testimonail-slider-content">
                                                    <div className="testimonail-patient-name">Raj V. </div>
                                                    <div className="patient-designation">IT Professional</div>
                                                    <p className="department-short-details">{"This isn't a diagnosis, and it doesn't pretend to be. It's an intelligent guide that pointed me in the exact right direction. An essential first step to take before seeing a doctor."}
                                                    </p>
                                                    <div className="patient-star-review-block"><Image height={18} width={19}
                                                        src={Start}
                                                        loading="lazy" alt="Star Icon" className="star-icon" /><Image height={18} width={19}
                                                            src={Start}
                                                            loading="lazy" alt="Star Icon" className="star-icon" /><Image height={18} width={19}
                                                                src={Start}
                                                                loading="lazy" alt="Star Icon" className="star-icon" /><Image height={18} width={19}
                                                                    src={StartBlank}
                                                                    loading="lazy" alt="Star Icon" className="star-icon" /><Image height={18} width={19}
                                                                        src={StartBlank}
                                                                        loading="lazy" alt="Star Icon" className="star-icon" /></div>
                                                </div>
                                                <div className="testimonial-card-hover-shadow"></div><Image width={82} height={70}
                                                    src={CardsSine}
                                                    loading="lazy" alt="Dotted Icon" className="testimonial-dotted-image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <TestimonialSlider /> */}
                        </div>
                    </section>



                    {/* <section className="blog-section padding-bottom-140px">
                    <div className="w-layout-blockcontainer container w-container">
                        <div className="section-title-wrap center margin-bottom-60px">
                            <div className="section-sub-title">Blogs</div>
                            <h2 className="section-title blog">Read Our Health Tips</h2>
                        </div>
                        <div data-w-id="797283b2-7070-6fc5-259f-51406203f487"  className="blog-wrapper">
                            <div className="blog-collection-list-wrapper w-dyn-list">
                                <div role="list" className="blog-collection-list w-dyn-items">
                                    <div role="listitem" className="blog-collection-item w-dyn-item">
                                        <div className="blog-post-card-wrap"><a href="../post/expert-advice-on-chronic-conditions.html"
                                            className="blog-post-image-link-block w-inline-block"><img
                                                src="https://cdn.prod.website-files.com/65cb4d1ed2f90340ed5047d9/65cdb32bdafcbc4f8057f961_expert-advice-on-chronic-conditions.jpg"
                                                loading="lazy" alt="Blog Image" className="blog-post-image" /></a>
                                            <div className="blog-post-card-info">
                                                <div className="blog-post-meta-wrap">
                                                    <div className="date-wrap">
                                                        <div className="calender-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                            height="20" viewBox="0 0 20 20" fill="none">
                                                            <mask id="mask0_709_472"  maskUnits="userSpaceOnUse" x="0"
                                                                y="0" width="20" height="20">
                                                                <path d="M0 1.90735e-06H20V20H0V1.90735e-06Z" fill="white" />
                                                            </mask>
                                                            <g mask="url(#mask0_709_472)">
                                                                <path d="M4.10156 15.8594V18.2031H19.4141V2.96875H4.10156V6.48438H19.4141"
                                                                    stroke="#585858" stroke-miterlimit="10" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                                <path d="M7.65625 1.79688V4.14062" stroke="#585858" stroke-miterlimit="10"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M15.8984 1.79688V4.14062" stroke="#585858" stroke-miterlimit="10"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M11.7578 1.79688V4.14062" stroke="#585858" stroke-miterlimit="10"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                                <path
                                                                    d="M4.10156 6.48438C4.10156 12.9297 0.585938 15.8594 0.585938 15.8594H15.8984C15.8984 15.8594 19.4141 12.9297 19.4141 6.48438"
                                                                    stroke="#585858" stroke-miterlimit="10" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </g>
                                                        </svg></div>
                                                        <div className="blog-meta-date">Feb 8, 2024</div>
                                                    </div>
                                                    <div className="blog-auhtor-profile-wrap"><img
                                                        src="https://cdn.prod.website-files.com/65cb4d1ed2f90340ed5047d9/65cdc9520d35b2adb1e02099_cody-fisher.png"
                                                        loading="lazy" alt="Author" className="blog-author-small-image" /><a
                                                            href="../blog-authors/cody-fisher.html" className="blog-author-name-link">Cody Fisher</a></div>
                                                </div><a href="../post/expert-advice-on-chronic-conditions.html"
                                                    className="blog-name-link w-inline-block">
                                                    <h3 className="blog-name">Expert Advice on Chronic Conditions </h3>
                                                </a>
                                                <div className="read-more-wrap"><a href="../post/expert-advice-on-chronic-conditions.html"
                                                    className="read-more-link-wrap w-inline-block">
                                                    <div className="department-link-text">Learn More</div>
                                                    <div className="learn-more-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                        height="20" viewBox="0 0 20 20" fill="none">
                                                        <path
                                                            d="M13.3341 10C13.3348 10.1097 13.3138 10.2184 13.2723 10.32C13.2308 10.4215 13.1697 10.5138 13.0925 10.5917L8.09247 15.5917C7.93555 15.7486 7.72272 15.8368 7.50081 15.8368C7.27889 15.8368 7.06606 15.7486 6.90914 15.5917C6.75222 15.4348 6.66406 15.222 6.66406 15C6.66406 14.7781 6.75222 14.5653 6.90914 14.4084L11.3258 10L6.91747 5.59172C6.78095 5.4323 6.70961 5.22723 6.71771 5.0175C6.72581 4.80777 6.81276 4.60882 6.96117 4.46041C7.10958 4.312 7.30853 4.22506 7.51826 4.21696C7.72799 4.20886 7.93305 4.28019 8.09247 4.41672L13.0925 9.41672C13.2464 9.57193 13.3332 9.78143 13.3341 10Z"
                                                            fill="currentcolor" />
                                                    </svg></div>
                                                </a></div>
                                            </div>
                                            <div className="blog-card-hover-shadow"></div>
                                        </div>
                                    </div>
                                    <div role="listitem" className="blog-collection-item w-dyn-item">
                                        <div className="blog-post-card-wrap"><a
                                            href="../post/enhancing-your-life-through-mind-body-practices.html"
                                            className="blog-post-image-link-block w-inline-block"><img
                                                src="https://cdn.prod.website-files.com/65cb4d1ed2f90340ed5047d9/65cdb2e0107bcefe373ba1e8_enhancing-your-life-through-mind-body-practices.png"
                                                loading="lazy" alt="Blog Image" className="blog-post-image" /></a>
                                            <div className="blog-post-card-info">
                                                <div className="blog-post-meta-wrap">
                                                    <div className="date-wrap">
                                                        <div className="calender-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                            height="20" viewBox="0 0 20 20" fill="none">
                                                            <mask id="mask0_709_472" maskUnits="userSpaceOnUse" x="0"
                                                                y="0" width="20" height="20">
                                                                <path d="M0 1.90735e-06H20V20H0V1.90735e-06Z" fill="white" />
                                                            </mask>
                                                            <g mask="url(#mask0_709_472)">
                                                                <path d="M4.10156 15.8594V18.2031H19.4141V2.96875H4.10156V6.48438H19.4141"
                                                                    stroke="#585858" stroke-miterlimit="10" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                                <path d="M7.65625 1.79688V4.14062" stroke="#585858" stroke-miterlimit="10"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M15.8984 1.79688V4.14062" stroke="#585858" stroke-miterlimit="10"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M11.7578 1.79688V4.14062" stroke="#585858" stroke-miterlimit="10"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                                <path
                                                                    d="M4.10156 6.48438C4.10156 12.9297 0.585938 15.8594 0.585938 15.8594H15.8984C15.8984 15.8594 19.4141 12.9297 19.4141 6.48438"
                                                                    stroke="#585858" stroke-miterlimit="10" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </g>
                                                        </svg></div>
                                                        <div className="blog-meta-date">Feb 8, 2024</div>
                                                    </div>
                                                    <div className="blog-auhtor-profile-wrap"><img
                                                        src="https://cdn.prod.website-files.com/65cb4d1ed2f90340ed5047d9/65cdc92babb423cfdb6863a9_floyd-miles.png"
                                                        loading="lazy" alt="Author" className="blog-author-small-image" /><a
                                                            href="../blog-authors/floyd-miles.html" className="blog-author-name-link">Floyd Miles</a></div>
                                                </div><a href="../post/enhancing-your-life-through-mind-body-practices.html"
                                                    className="blog-name-link w-inline-block">
                                                    <h3 className="blog-name">Enhancing Your Life Through Mind-body Practices</h3>
                                                </a>
                                                <div className="read-more-wrap"><a href="../post/enhancing-your-life-through-mind-body-practices.html"
                                                    className="read-more-link-wrap w-inline-block">
                                                    <div className="department-link-text">Learn More</div>
                                                    <div className="learn-more-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                        height="20" viewBox="0 0 20 20" fill="none">
                                                        <path
                                                            d="M13.3341 10C13.3348 10.1097 13.3138 10.2184 13.2723 10.32C13.2308 10.4215 13.1697 10.5138 13.0925 10.5917L8.09247 15.5917C7.93555 15.7486 7.72272 15.8368 7.50081 15.8368C7.27889 15.8368 7.06606 15.7486 6.90914 15.5917C6.75222 15.4348 6.66406 15.222 6.66406 15C6.66406 14.7781 6.75222 14.5653 6.90914 14.4084L11.3258 10L6.91747 5.59172C6.78095 5.4323 6.70961 5.22723 6.71771 5.0175C6.72581 4.80777 6.81276 4.60882 6.96117 4.46041C7.10958 4.312 7.30853 4.22506 7.51826 4.21696C7.72799 4.20886 7.93305 4.28019 8.09247 4.41672L13.0925 9.41672C13.2464 9.57193 13.3332 9.78143 13.3341 10Z"
                                                            fill="currentcolor" />
                                                    </svg></div>
                                                </a></div>
                                            </div>
                                            <div className="blog-card-hover-shadow"></div>
                                        </div>
                                    </div>
                                    <div role="listitem" className="blog-collection-item w-dyn-item">
                                        <div className="blog-post-card-wrap"><a href="../post/regular-screenings-and-health-maintenance.html"
                                            className="blog-post-image-link-block w-inline-block"><img
                                                src="https://cdn.prod.website-files.com/65cb4d1ed2f90340ed5047d9/65cdb2b90c393f48a11be660_regular-screenings-and-health-maintenance.png"
                                                loading="lazy" alt="Blog Image" className="blog-post-image" /></a>
                                            <div className="blog-post-card-info">
                                                <div className="blog-post-meta-wrap">
                                                    <div className="date-wrap">
                                                        <div className="calender-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                            height="20" viewBox="0 0 20 20" fill="none">
                                                            <mask id="mask0_709_472" maskUnits="userSpaceOnUse" x="0"
                                                                y="0" width="20" height="20">
                                                                <path d="M0 1.90735e-06H20V20H0V1.90735e-06Z" fill="white" />
                                                            </mask>
                                                            <g mask="url(#mask0_709_472)">
                                                                <path d="M4.10156 15.8594V18.2031H19.4141V2.96875H4.10156V6.48438H19.4141"
                                                                    stroke="#585858" stroke-miterlimit="10" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                                <path d="M7.65625 1.79688V4.14062" stroke="#585858" stroke-miterlimit="10"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M15.8984 1.79688V4.14062" stroke="#585858" stroke-miterlimit="10"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M11.7578 1.79688V4.14062" stroke="#585858" stroke-miterlimit="10"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                                <path
                                                                    d="M4.10156 6.48438C4.10156 12.9297 0.585938 15.8594 0.585938 15.8594H15.8984C15.8984 15.8594 19.4141 12.9297 19.4141 6.48438"
                                                                    stroke="#585858" stroke-miterlimit="10" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </g>
                                                        </svg></div>
                                                        <div className="blog-meta-date">Feb 2, 2024</div>
                                                    </div>
                                                    <div className="blog-auhtor-profile-wrap"><img
                                                        src="https://cdn.prod.website-files.com/65cb4d1ed2f90340ed5047d9/65cdc9799fdad42eb3bbbc02_rick-walton.png"
                                                        loading="lazy" alt="Author" className="blog-author-small-image" /><a
                                                            href="../blog-authors/rick-walton.html" className="blog-author-name-link">Rick Walton</a></div>
                                                </div><a href="../post/regular-screenings-and-health-maintenance.html"
                                                    className="blog-name-link w-inline-block">
                                                    <h3 className="blog-name">Regular Screenings and Health Maintenance</h3>
                                                </a>
                                                <div className="read-more-wrap"><a href="../post/regular-screenings-and-health-maintenance.html"
                                                    className="read-more-link-wrap w-inline-block">
                                                    <div className="department-link-text">Learn More</div>
                                                    <div className="learn-more-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                        height="20" viewBox="0 0 20 20" fill="none">
                                                        <path
                                                            d="M13.3341 10C13.3348 10.1097 13.3138 10.2184 13.2723 10.32C13.2308 10.4215 13.1697 10.5138 13.0925 10.5917L8.09247 15.5917C7.93555 15.7486 7.72272 15.8368 7.50081 15.8368C7.27889 15.8368 7.06606 15.7486 6.90914 15.5917C6.75222 15.4348 6.66406 15.222 6.66406 15C6.66406 14.7781 6.75222 14.5653 6.90914 14.4084L11.3258 10L6.91747 5.59172C6.78095 5.4323 6.70961 5.22723 6.71771 5.0175C6.72581 4.80777 6.81276 4.60882 6.96117 4.46041C7.10958 4.312 7.30853 4.22506 7.51826 4.21696C7.72799 4.20886 7.93305 4.28019 8.09247 4.41672L13.0925 9.41672C13.2464 9.57193 13.3332 9.78143 13.3341 10Z"
                                                            fill="currentcolor" />
                                                    </svg></div>
                                                </a></div>
                                            </div>
                                            <div className="blog-card-hover-shadow"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="button-wrap align-center margin-top-60px"><a href="../blog.html"
                                className="button-outline w-button">View All Blogs</a></div>
                        </div>
                    </div>
                </section> */}
                </main>
                <Footer />
            </main >
        </>
    );
}
