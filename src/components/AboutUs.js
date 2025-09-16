"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import Footer from './Footer';
import NavBar from './NavBar';
import Image from 'next/image';
import StayHealthy from '../assets/image/StayHealthy.jpg'
import OurMission from '../assets/image/OurMission.jpg'
import OurGuiding from '../assets/image/OurGuiding.jpg'
import TowardPeace from '../assets/image/TowardPeace.jpg'
import Link from 'next/link';
import '../style/global.css';


export default function AboutUs() {
    const router = useRouter();

    return (
        <>
            <div id="Scroll-Top" className="page-wrapper">
                {/* <NavBar /> */}
                <div className="main-wrapper">
                    <section className="breadcrumb-section">
                        <div className="w-layout-blockcontainer container w-container">
                            <div className="breadcrumb-wrapper">
                                <div className="breadcrumb-title-block">
                                    <h1 className="breadcumb-title">About Us</h1>
                                    <div className="home-page-back-link-wrap"><Link href="/" className="page-link">Home</Link>
                                        <div className="divider">/</div>
                                        <div className="page-name">About Us</div>
                                    </div>
                                </div>
                                <div data-w-id="edb8d2b1-a65e-64c1-2ee4-696f2e07ae41" className="breadcrumb-shape-block">
                                    <div className="inside-vector-wrap">
                                        {/* <Image height={52} width={52}
                                        src={Plush}
                                        loading="lazy" alt="Vector" className="inside-vector-semi-small" /> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" loading="lazy" alt="Vector" className="inside-vector-semi-small" viewBox="0 0 58 58" fill="none">
                                            <path opacity="0.1" d="M25.9422 58H32.0669C34.1214 57.9983 36.0913 57.1814 37.544 55.7286C38.9968 54.2759 39.8137 52.306 39.8154 50.2515V39.7167L50.2561 39.8109C52.3106 39.8083 54.2803 38.9912 55.7334 37.5387C57.1865 36.0863 58.0044 34.1169 58.0078 32.0624V25.9376C58.0052 23.8825 57.1877 21.9123 55.7345 20.4592C54.2814 19.006 52.3112 18.1885 50.2561 18.1859H39.7213L39.8154 7.74849C39.8137 5.69399 38.9968 3.72413 37.544 2.27138C36.0913 0.818629 34.1214 0.00171997 32.0669 0H25.9422C23.8877 0.00171997 21.9178 0.818629 20.4651 2.27138C19.0123 3.72413 18.1954 5.69399 18.1937 7.74849V18.2833L7.75305 18.1859C5.69796 18.1885 3.72777 19.006 2.27459 20.4592C0.821423 21.9123 0.00389862 23.8825 0.00131989 25.9376V32.0624C0.00475693 34.1169 0.822659 36.0863 2.27574 37.5387C3.72882 38.9912 5.69852 39.8083 7.75305 39.8109H18.2879L18.197 50.2515C18.1987 52.3055 19.0151 54.2748 20.4672 55.7275C21.9192 57.1801 23.8883 57.9974 25.9422 58ZM50.2561 21.4334C51.4504 21.4342 52.5956 21.9091 53.4401 22.7536C54.2846 23.5981 54.7595 24.7433 54.7603 25.9376V32.0624C54.7586 33.2561 54.2834 34.4005 53.439 35.2443C52.5945 36.0881 51.4499 36.5625 50.2561 36.5634H39.7213C38.8846 36.5634 38.0823 36.8955 37.4904 37.4868C36.8985 38.078 36.5656 38.8801 36.5647 39.7167V50.2515C36.563 51.4447 36.0882 52.5886 35.2445 53.4323C34.4008 54.276 33.2569 54.7508 32.0637 54.7525H25.9389C24.7457 54.7508 23.6019 54.276 22.7581 53.4323C21.9144 52.5886 21.4397 51.4447 21.4379 50.2515V39.7167C21.4371 38.8801 21.1041 38.078 20.5123 37.4868C19.9204 36.8955 19.118 36.5634 18.2814 36.5634H7.74981C6.55603 36.5625 5.41134 36.0881 4.56691 35.2443C3.72248 34.4005 3.24727 33.2561 3.24556 32.0624V25.9376C3.24641 24.7427 3.72169 23.5971 4.56692 22.7524C5.41214 21.9078 6.55815 21.4334 7.75305 21.4334H18.2879C19.1239 21.4334 19.9258 21.1017 20.5176 20.5111C21.1094 19.9206 21.4427 19.1194 21.4444 18.2833V7.74849C21.4461 6.55584 21.9205 5.41248 22.7635 4.56884C23.6065 3.7252 24.7495 3.25006 25.9422 3.24748H32.0669C33.2602 3.2492 34.404 3.72396 35.2477 4.56769C36.0915 5.41142 36.5662 6.55527 36.5679 7.74849V18.2833C36.5697 19.1194 36.903 19.9206 37.4948 20.5111C38.0866 21.1017 38.8885 21.4334 39.7245 21.4334H50.2561Z" fill="#43BA7F" />
                                        </svg>

                                        {/* <img
                                            src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65c9de018f2da12e347fcd04_Inside-vector-small.svg"
                                            loading="lazy" alt="Vector" className="inside-vector-small" /> */}
                                        {/* <path xmlns="http://www.w3.org/2000/svg" loading="lazy" alt="Vector" className="inside-vector-small" opacity="0.1" d="M25.9422 58H32.0669C34.1214 57.9983 36.0913 57.1814 37.544 55.7286C38.9968 54.2759 39.8137 52.306 39.8154 50.2515V39.7167L50.2561 39.8109C52.3106 39.8083 54.2803 38.9912 55.7334 37.5387C57.1865 36.0863 58.0044 34.1169 58.0078 32.0624V25.9376C58.0052 23.8825 57.1877 21.9123 55.7345 20.4592C54.2814 19.006 52.3112 18.1885 50.2561 18.1859H39.7213L39.8154 7.74849C39.8137 5.69399 38.9968 3.72413 37.544 2.27138C36.0913 0.818629 34.1214 0.00171997 32.0669 0H25.9422C23.8877 0.00171997 21.9178 0.818629 20.4651 2.27138C19.0123 3.72413 18.1954 5.69399 18.1937 7.74849V18.2833L7.75305 18.1859C5.69796 18.1885 3.72777 19.006 2.27459 20.4592C0.821423 21.9123 0.00389862 23.8825 0.00131989 25.9376V32.0624C0.00475693 34.1169 0.822659 36.0863 2.27574 37.5387C3.72882 38.9912 5.69852 39.8083 7.75305 39.8109H18.2879L18.197 50.2515C18.1987 52.3055 19.0151 54.2748 20.4672 55.7275C21.9192 57.1801 23.8883 57.9974 25.9422 58ZM50.2561 21.4334C51.4504 21.4342 52.5956 21.9091 53.4401 22.7536C54.2846 23.5981 54.7595 24.7433 54.7603 25.9376V32.0624C54.7586 33.2561 54.2834 34.4005 53.439 35.2443C52.5945 36.0881 51.4499 36.5625 50.2561 36.5634H39.7213C38.8846 36.5634 38.0823 36.8955 37.4904 37.4868C36.8985 38.078 36.5656 38.8801 36.5647 39.7167V50.2515C36.563 51.4447 36.0882 52.5886 35.2445 53.4323C34.4008 54.276 33.2569 54.7508 32.0637 54.7525H25.9389C24.7457 54.7508 23.6019 54.276 22.7581 53.4323C21.9144 52.5886 21.4397 51.4447 21.4379 50.2515V39.7167C21.4371 38.8801 21.1041 38.078 20.5123 37.4868C19.9204 36.8955 19.118 36.5634 18.2814 36.5634H7.74981C6.55603 36.5625 5.41134 36.0881 4.56691 35.2443C3.72248 34.4005 3.24727 33.2561 3.24556 32.0624V25.9376C3.24641 24.7427 3.72169 23.5971 4.56692 22.7524C5.41214 21.9078 6.55815 21.4334 7.75305 21.4334H18.2879C19.1239 21.4334 19.9258 21.1017 20.5176 20.5111C21.1094 19.9206 21.4427 19.1194 21.4444 18.2833V7.74849C21.4461 6.55584 21.9205 5.41248 22.7635 4.56884C23.6065 3.7252 24.7495 3.25006 25.9422 3.24748H32.0669C33.2602 3.2492 34.404 3.72396 35.2477 4.56769C36.0915 5.41142 36.5662 6.55527 36.5679 7.74849V18.2833C36.5697 19.1194 36.903 19.9206 37.4948 20.5111C38.0866 21.1017 38.8885 21.4334 39.7245 21.4334H50.2561Z" fill="#43BA7F" /> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none" loading="lazy" alt="Vector" className="inside-vector-small">
                                            <path opacity="0.1" d="M25.9422 58H32.0669C34.1214 57.9983 36.0913 57.1814 37.544 55.7286C38.9968 54.2759 39.8137 52.306 39.8154 50.2515V39.7167L50.2561 39.8109C52.3106 39.8083 54.2803 38.9912 55.7334 37.5387C57.1865 36.0863 58.0044 34.1169 58.0078 32.0624V25.9376C58.0052 23.8825 57.1877 21.9123 55.7345 20.4592C54.2814 19.006 52.3112 18.1885 50.2561 18.1859H39.7213L39.8154 7.74849C39.8137 5.69399 38.9968 3.72413 37.544 2.27138C36.0913 0.818629 34.1214 0.00171997 32.0669 0H25.9422C23.8877 0.00171997 21.9178 0.818629 20.4651 2.27138C19.0123 3.72413 18.1954 5.69399 18.1937 7.74849V18.2833L7.75305 18.1859C5.69796 18.1885 3.72777 19.006 2.27459 20.4592C0.821423 21.9123 0.00389862 23.8825 0.00131989 25.9376V32.0624C0.00475693 34.1169 0.822659 36.0863 2.27574 37.5387C3.72882 38.9912 5.69852 39.8083 7.75305 39.8109H18.2879L18.197 50.2515C18.1987 52.3055 19.0151 54.2748 20.4672 55.7275C21.9192 57.1801 23.8883 57.9974 25.9422 58ZM50.2561 21.4334C51.4504 21.4342 52.5956 21.9091 53.4401 22.7536C54.2846 23.5981 54.7595 24.7433 54.7603 25.9376V32.0624C54.7586 33.2561 54.2834 34.4005 53.439 35.2443C52.5945 36.0881 51.4499 36.5625 50.2561 36.5634H39.7213C38.8846 36.5634 38.0823 36.8955 37.4904 37.4868C36.8985 38.078 36.5656 38.8801 36.5647 39.7167V50.2515C36.563 51.4447 36.0882 52.5886 35.2445 53.4323C34.4008 54.276 33.2569 54.7508 32.0637 54.7525H25.9389C24.7457 54.7508 23.6019 54.276 22.7581 53.4323C21.9144 52.5886 21.4397 51.4447 21.4379 50.2515V39.7167C21.4371 38.8801 21.1041 38.078 20.5123 37.4868C19.9204 36.8955 19.118 36.5634 18.2814 36.5634H7.74981C6.55603 36.5625 5.41134 36.0881 4.56691 35.2443C3.72248 34.4005 3.24727 33.2561 3.24556 32.0624V25.9376C3.24641 24.7427 3.72169 23.5971 4.56692 22.7524C5.41214 21.9078 6.55815 21.4334 7.75305 21.4334H18.2879C19.1239 21.4334 19.9258 21.1017 20.5176 20.5111C21.1094 19.9206 21.4427 19.1194 21.4444 18.2833V7.74849C21.4461 6.55584 21.9205 5.41248 22.7635 4.56884C23.6065 3.7252 24.7495 3.25006 25.9422 3.24748H32.0669C33.2602 3.2492 34.404 3.72396 35.2477 4.56769C36.0915 5.41142 36.5662 6.55527 36.5679 7.74849V18.2833C36.5697 19.1194 36.903 19.9206 37.4948 20.5111C38.0866 21.1017 38.8885 21.4334 39.7245 21.4334H50.2561Z" fill="#43BA7F" />
                                        </svg>

                                        {/* <img
                                            src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65c9e204960864bf2bf89d45_Inside-vector-medium.svg"
                                            loading="lazy" alt="Vector" className="inside-vector-medium" /> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" loading="lazy" alt="Vector" className="inside-vector-medium" viewBox="0 0 78 78" fill="none">
                                            <path opacity="0.1" d="M34.8851 78H43.1218C45.8848 77.9977 48.5339 76.8991 50.4876 74.9454C52.4413 72.9917 53.5399 70.3426 53.5422 67.5796V53.4121L67.5831 53.5387C70.3461 53.5353 72.995 52.4364 74.9491 50.4831C76.9032 48.5298 78.0032 45.8814 78.0078 43.1184V34.8816C78.0043 32.1179 76.9049 29.4683 74.9506 27.5141C72.9964 25.5598 70.3468 24.4604 67.5831 24.4569H53.4155L53.5422 10.4204C53.5399 7.65743 52.4413 5.00831 50.4876 3.05461C48.5339 1.10091 45.8848 0.00231306 43.1218 0H34.8851C32.1221 0.00231306 29.473 1.10091 27.5193 3.05461C25.5656 5.00831 24.467 7.65743 24.4647 10.4204V24.5879L10.4238 24.4569C7.66008 24.4604 5.01051 25.5598 3.05625 27.5141C1.10198 29.4683 0.00254822 32.1179 -0.000915527 34.8816V43.1184C0.00370789 45.8814 1.10365 48.5298 3.05779 50.4831C5.01193 52.4364 7.66084 53.5353 10.4238 53.5387H24.5914L24.4691 67.5796C24.4714 70.3418 25.5694 72.9903 27.5221 74.9438C29.4749 76.8974 32.1229 77.9965 34.8851 78ZM67.5831 28.8242C69.1892 28.8253 70.7293 29.4639 71.865 30.5996C73.0008 31.7354 73.6394 33.2755 73.6405 34.8816V43.1184C73.6382 44.7238 72.9991 46.2627 71.8635 47.3975C70.7279 48.5323 69.1885 49.1703 67.5831 49.1714H53.4155C52.2905 49.1714 51.2114 49.6181 50.4154 50.4132C49.6194 51.2084 49.1717 52.287 49.1705 53.4121V67.5796C49.1682 69.1843 48.5297 70.7226 47.3951 71.8572C46.2604 72.9919 44.7221 73.6304 43.1174 73.6327H34.8807C33.276 73.6304 31.7378 72.9919 30.6031 71.8572C29.4684 70.7226 28.8299 69.1843 28.8276 67.5796V53.4121C28.8265 52.287 28.3787 51.2084 27.5828 50.4132C26.7868 49.6181 25.7077 49.1714 24.5826 49.1714H10.4195C8.81404 49.1703 7.27464 48.5323 6.13902 47.3975C5.0034 46.2627 4.36433 44.7238 4.36202 43.1184V34.8816C4.36317 33.2747 5.00234 31.734 6.13903 30.5981C7.27571 29.4622 8.81689 28.8242 10.4238 28.8242H24.5914C25.7157 28.8242 26.7941 28.3781 27.59 27.5839C28.3858 26.7897 28.8341 25.7122 28.8364 24.5879V10.4204C28.8387 8.81647 29.4766 7.27885 30.6103 6.1443C31.744 5.00975 33.2812 4.37077 34.8851 4.3673H43.1218C44.7265 4.36961 46.2648 5.00809 47.3994 6.14276C48.5341 7.27743 49.1726 8.81571 49.1749 10.4204V24.5879C49.1772 25.7122 49.6255 26.7897 50.4213 27.5839C51.2172 28.3781 52.2956 28.8242 53.4199 28.8242H67.5831Z" fill="#43BA7F" />
                                        </svg>
                                        {/* <img
                                            src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65c9e2c5ec86042bc9b16610_Inside-vector-large.svg"
                                            loading="lazy" alt="Vector" className="inside-vector-large" /> */}

                                        <svg xmlns="http://www.w3.org/2000/svg" width="207" height="206" viewBox="0 0 207 206" loading="lazy" alt="Vector" className="inside-vector-large" fill="none">
                                            <path opacity="0.1" d="M92.5717 206H114.428C121.76 205.994 128.789 203.092 133.974 197.933C139.158 192.773 142.073 185.777 142.079 178.48V141.063L179.337 141.397C186.669 141.388 193.698 138.486 198.884 133.327C204.069 128.168 206.988 121.174 207 113.877V92.1233C206.991 84.8242 204.073 77.8266 198.888 72.6653C193.702 67.5041 186.671 64.6004 179.337 64.5913H141.743L142.079 27.5205C142.073 20.2235 139.158 13.2271 133.974 8.06731C128.789 2.90754 121.76 0.00610885 114.428 0H92.5717C85.2401 0.00610885 78.2105 2.90754 73.0263 8.06731C67.8421 13.2271 64.9269 20.2235 64.9207 27.5205V64.9373L27.6626 64.5913C20.3288 64.6004 13.2981 67.5041 8.11234 72.6653C2.92659 77.8266 0.00920105 84.8242 0 92.1233V113.877C0.0122681 121.174 2.93102 128.168 8.11642 133.327C13.3018 138.486 20.3308 141.388 27.6626 141.397H65.2568L64.9323 178.48C64.9384 185.775 67.8521 192.769 73.0338 197.929C78.2155 203.088 85.2421 205.991 92.5717 206ZM179.337 76.1254C183.599 76.1285 187.686 77.8149 190.7 80.8145C193.714 83.814 195.408 87.8813 195.411 92.1233V113.877C195.405 118.117 193.709 122.181 190.696 125.178C187.682 128.175 183.597 129.86 179.337 129.863H141.743C138.758 129.863 135.894 131.043 133.782 133.143C131.67 135.243 130.482 138.091 130.479 141.063V178.48C130.473 182.717 128.778 186.78 125.768 189.777C122.757 192.774 118.675 194.46 114.417 194.466H92.5601C88.3021 194.46 84.2202 192.774 81.2093 189.777C78.1983 186.78 76.5041 182.717 76.498 178.48V141.063C76.4949 138.091 75.3068 135.243 73.1946 133.143C71.0825 131.043 68.2191 129.863 65.2336 129.863H27.651C23.3909 129.86 19.306 128.175 16.2926 125.178C13.2792 122.181 11.5834 118.117 11.5773 113.877V92.1233C11.5803 87.8793 13.2764 83.8102 16.2926 80.8104C19.3089 77.8105 23.3985 76.1254 27.6626 76.1254H65.2568C68.2403 76.1254 71.1019 74.9474 73.2137 72.8499C75.3255 70.7524 76.515 67.9067 76.5212 64.9373V27.5205C76.5273 23.2845 78.2199 19.2236 81.2283 16.2272C84.2367 13.2309 88.3157 11.5433 92.5717 11.5342H114.428C118.686 11.5403 122.768 13.2265 125.779 16.2232C128.79 19.2199 130.484 23.2825 130.49 27.5205V64.9373C130.497 67.9067 131.686 70.7524 133.798 72.8499C135.91 74.9474 138.771 76.1254 141.755 76.1254H179.337Z" fill="#43BA7F" />
                                        </svg>

                                        {/* <img
                                            src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65c9e4d5c6aa622c9820a98d_Inside-vector-semi-large.svg"
                                            loading="lazy" alt="Vector" className="inside-vector-semi-large" /> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" loading="lazy" alt="Vector" className="inside-vector-semi-large" viewBox="0 0 86 86" fill="none">
                                            <path opacity="0.1" d="M38.4597 86H47.5403C50.5862 85.9975 53.5067 84.7862 55.6606 82.6321C57.8144 80.478 59.0256 77.5572 59.0281 74.5109V58.8903L74.5073 59.0299C77.5534 59.0261 80.4736 57.8145 82.628 55.6609C84.7823 53.5072 85.9949 50.5871 86 47.5408V38.4592C85.9962 35.412 84.7841 32.4907 82.6297 30.336C80.4752 28.1813 77.5542 26.9691 74.5073 26.9653H58.8885L59.0281 11.4891C59.0256 8.44281 57.8144 5.52199 55.6606 3.36791C53.5067 1.21383 50.5862 0.0025503 47.5403 0H38.4597C35.4138 0.0025503 32.4933 1.21383 30.3394 3.36791C28.1856 5.52199 26.9744 8.44281 26.9719 11.4891V27.1097L11.4927 26.9653C8.44579 26.9691 5.5248 28.1813 3.37034 30.336C1.21587 32.4907 0.00382233 35.412 0 38.4592V47.5408C0.00509644 50.5871 1.21771 53.5072 3.37204 55.6609C5.52637 57.8145 8.44662 59.0261 11.4927 59.0299H27.1115L26.9767 74.5109C26.9793 77.5564 28.1897 80.4764 30.3425 82.6304C32.4953 84.7843 35.4146 85.9962 38.4597 86ZM74.5073 31.7805C76.2781 31.7818 77.9759 32.4858 79.228 33.7381C80.4801 34.9903 81.184 36.6883 81.1853 38.4592V47.5408C81.1828 49.3108 80.4782 51.0076 79.2263 52.2588C77.9743 53.51 76.2772 54.2134 74.5073 54.2147H58.8885C57.6481 54.2147 56.4585 54.7071 55.581 55.5838C54.7035 56.4605 54.2099 57.6498 54.2086 58.8903V74.5109C54.2061 76.2801 53.5022 77.9762 52.2513 79.2272C51.0004 80.4783 49.3045 81.1822 47.5354 81.1848H38.4549C36.6859 81.1822 34.99 80.4783 33.7391 79.2272C32.4882 77.9762 31.7843 76.2801 31.7818 74.5109V58.8903C31.7805 57.6498 31.2869 56.4605 30.4094 55.5838C29.5319 54.7071 28.3422 54.2147 27.1019 54.2147H11.4878C9.71796 54.2134 8.02086 53.51 6.76891 52.2588C5.51696 51.0076 4.81242 49.3108 4.80988 47.5408V38.4592C4.81116 36.6875 5.51579 34.9887 6.76892 33.7364C8.02205 32.484 9.72111 31.7805 11.4927 31.7805H27.1115C28.351 31.7805 29.5399 31.2887 30.4173 30.4131C31.2947 29.5374 31.7888 28.3494 31.7914 27.1097V11.4891C31.7939 9.72072 32.4972 8.02539 33.747 6.77448C34.9969 5.52357 36.6915 4.81905 38.4597 4.81523H47.5403C49.3093 4.81778 51.0052 5.52174 52.2561 6.77279C53.507 8.02384 54.2109 9.71989 54.2134 11.4891V27.1097C54.216 28.3494 54.7101 29.5374 55.5875 30.4131C56.4649 31.2887 57.6538 31.7805 58.8933 31.7805H74.5073Z" fill="#43BA7F" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="256" height="338" loading="lazy" alt="Vector" className="outside-vector-large" viewBox="0 0 256 338" fill="none">
                            <path opacity="0.1" d="M186.865 338H151.173C139.2 337.99 127.72 333.229 119.254 324.763C110.788 316.297 106.028 304.818 106.018 292.845V231.452L45.1739 232.001C33.2009 231.986 21.7224 227.225 13.2544 218.76C4.78644 210.296 0.0200291 198.819 0 186.846V151.154C0.0150235 139.177 4.77923 127.696 13.2477 119.228C21.7162 110.759 33.1977 105.995 45.1739 105.98H106.566L106.018 45.155C106.028 33.1822 110.788 21.7027 119.254 13.2367C127.72 4.77063 139.2 0.0100233 151.173 0H186.865C198.838 0.0100233 210.317 4.77063 218.783 13.2367C227.25 21.7027 232.01 33.1822 232.02 45.155V106.548L292.864 105.98C304.84 105.995 316.322 110.759 324.79 119.228C333.259 127.696 338.023 139.177 338.038 151.154V186.846C338.018 198.819 333.251 210.296 324.783 218.76C316.315 227.225 304.837 231.986 292.864 232.001H231.471L232.001 292.845C231.991 304.815 227.233 316.291 218.771 324.757C210.309 333.222 198.835 337.985 186.865 338ZM45.1739 124.905C38.2138 124.91 31.5402 127.677 26.6186 132.598C21.6971 137.52 18.93 144.194 18.925 151.154V186.846C18.935 193.803 21.7043 200.472 26.6253 205.389C31.5463 210.307 38.2171 213.071 45.1739 213.076H106.566C111.442 213.076 116.118 215.012 119.567 218.457C123.016 221.903 124.957 226.577 124.962 231.452V292.845C124.972 299.799 127.738 306.464 132.655 311.381C137.572 316.298 144.238 319.065 151.192 319.075H186.884C193.838 319.065 200.504 316.298 205.42 311.381C210.337 306.464 213.104 299.799 213.114 292.845V231.452C213.119 226.577 215.059 221.903 218.509 218.457C221.958 215.012 226.634 213.076 231.509 213.076H292.883C299.84 213.071 306.51 210.307 311.431 205.389C316.352 200.472 319.122 193.803 319.132 186.846V151.154C319.127 144.19 316.357 137.514 311.431 132.592C306.506 127.67 299.827 124.905 292.864 124.905H231.471C226.599 124.905 221.926 122.972 218.477 119.53C215.029 116.089 213.086 111.42 213.076 106.548V45.155C213.066 38.2047 210.302 31.5417 205.389 26.6253C200.476 21.7089 193.815 18.94 186.865 18.925H151.173C144.219 18.935 137.553 21.7017 132.636 26.6186C127.719 31.5355 124.953 38.2014 124.943 45.155V106.548C124.933 111.42 122.99 116.089 119.542 119.53C116.093 122.972 111.42 124.905 106.548 124.905H45.1739Z" fill="#43BA7F" />
                        </svg>
                    </section>
                    <section className="about-hero-section section-gap-y-axis-140px">
                        <div className="w-layout-blockcontainer container w-container">
                            <div className="about-hero-wrapper">
                                <h1 className="section-title about-hero all-heading-tag-data">AI Health Guidance: From Worry and Wellness.</h1>
                                <p data-w-id="27e0852a-c8d0-6d59-dc4b-c74a8e684451" className="about-hero-description"> In a world flooded with conflicting health information, finding a clear first step can feel impossible. The anxiety of an unknown symptom is often made worse by online searches. needan was born from a simple idea: to provide a smart and reliable tool for AI health guidance that cuts through the noise.</p>
                                <div data-w-id="6a9c1d10-f8a2-ce17-91ee-d9d49218fad6"
                                    className="about-hero-banner-image-wrap margin-top-60px">
                                    <Image
                                        src={StayHealthy}
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
                                    </ul><a data-w-id="2ce5961f-57e4-6920-6580-d6901d287cd0" href=""
                                        className="button-outline margin-top-60px w-button">Book Appointment</a>
                                </div>
                                <div id="w-node-_109d2318-2215-b080-3ffc-73dd27e469e9-d496e63b"
                                    data-w-id="109d2318-2215-b080-3ffc-73dd27e469e9" className="our-mission-banner-wrap"><Image height={565} width={614}
                                        src={OurMission}
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
                                    data-w-id="96715956-8efd-2c0a-1f7c-b4a55c3efb61" className="our-apart-image-wrap"><Image height={524} width={600}
                                        src={OurGuiding}
                                        loading="lazy"
                                        sizes="(max-width: 767px) 94vw, (max-width: 991px) 620px, (max-width: 1279px) 465px, (max-width: 1439px) 565px, (max-width: 1919px) 600px, 680px"
                                        srcSet="https://assets-global.website-files.com/65c992c37023d69385565acc/65d32b5ace27c11e4d4f9e86_our-apart-banner-p-500.jpg 500w, https://assets-global.website-files.com/65c992c37023d69385565acc/65d32b5ace27c11e4d4f9e86_our-apart-banner.jpg 680w"
                                        alt="Apart Banner" className="our-apart-banner-image" /></div>
                                <div className="our-apart-content-wrap">
                                    <h2 className="section-title apart">Our Guiding Principles</h2>
                                    <div data-w-id="03a139c9-5571-4afd-2260-3060f9930141" className="our-apart-content-block">
                                        <h3 className="our-apart-sub-title">Data-Driven Trust</h3>
                                        <p className="our-apart-description">Our AI symptom checker isn&#39;t based on opinion. It&#39;s built on a vast, continuously updated knowledge base of verified medical data, ensuring the AI health guidance you receive is objective and reliable.</p>
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
                    {/* <section className="doctor-section section-gap-y-axis-140px">
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
                    </section> */}
                    <section className="cta-section padding-bottom-140px">
                        <div className="w-layout-blockcontainer container w-container">
                            <div data-w-id="b3185ae5-db1f-0c33-7963-6e702b7e32dc" className="cta-wrapper center">
                                <div className="cta-banner-image-wrap">
                                    <Image
                                        src={TowardPeace} height={328} width={600}
                                        loading="lazy"

                                        sizes="(max-width: 479px) 94vw, (max-width: 767px) 450px, (max-width: 991px) 331.1875px, (max-width: 1279px) 460.796875px, (max-width: 1439px) 561.59375px, (max-width: 1919px) 600px, 691.1875px"
                                        srcSet="https://assets-global.website-files.com/65c992c37023d69385565acc/65cca34667321a9a91919866_CTA-banner-p-500.jpg 500w, https://assets-global.website-files.com/65c992c37023d69385565acc/65cca34667321a9a91919866_CTA-banner.jpg 700w"
                                        alt="CTA Banner" className="cta-banner-image" />
                                </div>
                                <div className="cta-content-wrap">
                                    <div className="cta-content">
                                        <h2 className="cta-section-title cta">Take the First Step Toward Peace of Mind</h2>
                                        <div className="button-primary-wrap"><a href="" className="button-primary white w-button">Start Your Free Analysis Now</a></div>
                                    </div>
                                    <Image height={189} width={189}
                                        src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65d2f7ff8848a6206e4f1a66_CTA-bottom-pluse-vector.svg"
                                        loading="lazy" alt="Vector" className="cta-vector-shape" />

                                    {/* <Image height={67} width={134}
                                        src="https://cdn.prod.website-files.com/65c992c37023d69385565acc/65d2f8650e915364420906c0_CTA-top-ellipse-shape.svg"
                                        loading="lazy" alt="Ellipse Shape" className="cta-ellipse-shape" /> */}

                                    <svg xmlns="http://www.w3.org/2000/svg" width="67" height="134" loading="lazy" alt="Ellipse Shape" className="cta-ellipse-shape" viewBox="0 0 67 134" fill="none">
                                        <path opacity="0.2" d="M67 67C58.2014 67 49.489 65.267 41.3602 61.8999C33.2314 58.5329 25.8454 53.5977 19.6239 47.3762C13.4023 41.1546 8.46714 33.7686 5.10008 25.6398C1.73301 17.511 6.64273e-07 8.79857 0 5.05836e-06L67 0L67 67Z" fill="white" />
                                        <path opacity="0.2" d="M2.92866e-06 134C8.79857 134 17.511 132.267 25.6398 128.9C33.7686 125.533 41.1546 120.598 47.3762 114.376C53.5977 108.155 58.5329 100.769 61.8999 92.6398C65.267 84.511 67 75.7986 67 67L0 67L2.92866e-06 134Z" fill="white" />
                                    </svg>
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
