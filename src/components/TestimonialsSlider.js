import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
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
import '../style/global.css'


export default function TestimonialSlider() {

    // Function to render stars based on rating
    const renderStars = (rating) => {
        const stars = [];
        const totalStars = 5;
        
        // Add filled stars
        for (let i = 0; i < rating; i++) {
            stars.push(
                <Image 
                    key={`filled-${i}`}
                    height={18} 
                    width={19}
                    src={Start}
                    loading="lazy" 
                    alt="Star Icon" 
                    className="star-icon" 
                />
            );
        }
        
        // Add blank stars for remaining
        for (let i = rating; i < totalStars; i++) {
            stars.push(
                <Image 
                    key={`blank-${i}`}
                    height={18} 
                    width={19}
                    src={StartBlank}
                    loading="lazy" 
                    alt="Star Icon" 
                    className="star-icon" 
                />
            );
        }
        
        return stars;
    };

    const data = [
        {
            id: 1,
            image: Doctors1,
            name: "Priya S. ",
            designation: "Graphic Designer",
            description: "Googling my symptoms was terrifying. A friend suggested needaan, and relief was instant. It gave me a clear, calm list of possibilities and pointed me to the right specialist.",
            rating: 5
        },
        {
            id: 2,
            image: Doctors2,
            name: "Mark T. ",
            designation: "High School Teacher",
            description: "I had a weird mix of symptoms and absolutely no idea who to call. This AI checker analyzed everything and suggested a dermatologist. It was spot on. Saved me so much time.",
            rating: 3
        },
        {
            id: 3,
            image: Doctors3,
            name: "Anjali M.",
            designation: "University Student",
            description: "As a student, I can't afford multiple doctor visits. This tool gave me a much-needed, free, anonymous first step. It was so fast and helped me decide exactly what to do next.",
            rating: 4
        },
        {
            id: 4,
            image: Doctors4,
            name: "David L. ",
            designation: "Small Business Owner",
            description: "I was skeptical about AI, but accuracy was impressive. It provided a logical breakdown of my symptoms without jargon. A useful service for getting health guidance. ",
            rating: 4
        },
        {
            id: 5,
            image: Doctors5,
            name: "Fatima K. ",
            designation: "Freelance Writer",
            description: "The chat interface is brilliant—so simple and intuitive. In just two minutes, I went from feeling lost and worried to having a clear, actionable plan. I highly recommend this.",
            rating: 3
        },
        {
            id: 6,
            image: Doctors6,
            name: "Raj V.",
            designation: "IT Professional",
            description: "This isn't a diagnosis, and it doesn't pretend to be. It's an intelligent, truly valuable guide that pointed me in the right direction. An essential first step to take before seeing a doctor.",
            rating: 4
        }
    ];
    return (
        <Swiper
            modules={[Autoplay]}       
            loop={true}
            autoplay={{ delay: 2000 }} 
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
                576: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                
                992: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                
            }}                                       
        >

            {data.map((item) => {
                return (
                    <SwiperSlide key={item.id}>
                        <div className="testimonial-slider-item w-slide " style={{ marginTop: '40px' }}>
                            <div className="testimonial-slider-card">
                                <div className="patient-profile-wrapper"><Image alt="Department Icon" loading="lazy"
                                    src={item.image} height={100} width={100}
                                    className="patient-profile-image" /></div>
                                <div className="testimonail-slider-content">
                                    <div className="testimonail-patient-name">{item.name}</div>
                                    <div className="patient-designation">{item.designation}
                                    </div>
                                    <p className="department-short-details department-cards-details">{item.description}
                                    </p>
                                    <div className="patient-star-review-block">
                                        {renderStars(item.rating)}
                                    </div>
                                </div>
                                <div className="testimonial-card-hover-shadow"></div><Image width={82} height={70}
                                    src={CardsSine}
                                    loading="lazy" alt="Dotted Icon" className="testimonial-dotted-image" />
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
}
