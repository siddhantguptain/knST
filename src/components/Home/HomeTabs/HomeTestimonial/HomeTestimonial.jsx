import { useEffect } from "react";
import style from './HomeTestimonial.module.css';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import HomeTestimonialCard from "./HomeTestimonialCard/HomeTestimonialCard";

const HomeTestimonial =() =>{

    useEffect(() =>{
        AOS.init({duration:2000});
    },[]);


    const TestimonialData = [
        {
            key:1,
            text:"I have been working with the digital marketing experts at KNM Studio for over a year now, and I am extremely impressed with the results. Their strategies have significantly boosted our online presence, and our sales have skyrocketed. The team is highly knowledgeable, responsive, and a pleasure to work with. I highly recommend KNM Studio to any business looking to elevate their online marketing efforts.",
            userName:"Prajakta Gupta",
            userRole:"Founder Cologne Spa"
        },
        {
            key:2,
            text:"KNM Studio's video production work is outstanding! Their creative team consistently delivers impactful videos that elevate our marketing efforts. Highly commendable!",
                            userName:"Siddharth Gupta",
                            userRole:"Marketing Head -  Spardha Learning"
        },
        {
            key:3,
            text:"   The content created by KNM Studio is exceptional! Their team consistently delivers captivating and high-quality content that engages our audience effectively. Highly recommended!",
            userName:"Umar Farukh",
            userRole:"Terminak Head Vivo"
        }


    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
    
    return(
        <>  
            <div className={style.container} data-aos="fade-right">
                <div className={style.subTitle}>
                    <h5>⦿ TESTIMONIALS</h5>
                </div>
                <div className={style.title} data-aos="fade-right">
                    <h1>WHAT PEOPLE ARE SAYING</h1>
                </div>
                
                <div className={style.subContainer} data-aos="zoom-in-up">
                <Slider {...settings}>
                {TestimonialData.map((el) =>(
                    <HomeTestimonialCard 
                    text={el.text}
                    userName={el.userName}
                    userRole={el.userRole}
               />
                ))}
                 </Slider>

                       {/* <HomeTestimonialCard 
                            text="I have been working with the digital marketing experts at KNM Studio for over a year now, and I am extremely impressed with the results. Their strategies have significantly boosted our online presence, and our sales have skyrocketed. The team is highly knowledgeable, responsive, and a pleasure to work with. I highly recommend KNM Studio to any business looking to elevate their online marketing efforts."
                            userName="Prajakta Gupta"
                            userRole="Founder Cologne Spa"
                       />
              
              
                    <HomeTestimonialCard 
                            text="KNM Studio's video production work is outstanding! Their creative team consistently delivers impactful videos that elevate our marketing efforts. Highly commendable!"
                            userName="Siddharth Gupta"
                            userRole="Marketing Head -  Spardha Learning"
                       />
             
                     <HomeTestimonialCard 
                            text="   The content created by KNM Studio is exceptional! Their team consistently delivers captivating and high-quality content that engages our audience effectively. Highly recommended!"
                            userName="Umar Farukh"
                            userRole="Terminak Head Vivo"
                       /> */}
                </div> 
               
            </div>
        </>
    );
}
export default HomeTestimonial;