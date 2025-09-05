import Link from 'next/link';
import React from 'react'
import FooterLogo from '../assets/image/FooterLogo.png'
import Image from 'next/image';
import '../style/global.css'

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <section className="footer-section two">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="footer-block-wrapper">
                        <div className="call-to-actions-wrap">
                            <h2 className="section-title cta-two">Ready to Turn Worry Into Clarity?</h2>
                            <div className="button-primary-wrap"><a href="#" className="button-primary white w-button">Start Chat Now</a></div>
                        </div>
                        <div data-w-id="94547a58-0949-cde7-2711-4cc424047d44"
                            className="footer-content margin-top-60px">
                            <div id="w-node-_94547a58-0949-cde7-2711-4cc424047d45-b42bc025" className="footer-block"><Link href="/"
                                className="footer-logo-link-block w-inline-block">
                                    {/* <img
                                    src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65d1a4024399efb60073c983_medcare-white-logo.png"
                                    loading="lazy" alt="Footer Logo" className="logo-image" /> */}
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
