import { useEffect } from "react";
import style from './HomeTestimonial.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import HomeTestimonialCard from "./HomeTestimonialCard/HomeTestimonialCard";

const HomeTestimonial =() =>{
    useEffect(() =>{
        AOS.init({duration:2000});
    },[]);
    return(
        <>  
            <div className={style.container} data-aos="fade-right">
                <div className={style.subTitle}>
                    <h5>⦿ TESTIMONIALS</h5>
                </div>
                <div className={style.title} data-aos="fade-right">
                    <h1>WHAT PEOPLE ARE SAYING</h1>
                </div>
                <div className={style.subContainer}>
                <div className={style.testimonialMain} data-aos="zoom-in-up"    >
                       <HomeTestimonialCard 
                            text={
                                <>
                                <p>
                                I have been working with the digital marketing experts at KNM Studio for over a year now, and I am extremely impressed with the results. Their strategies have significantly boosted our online presence, and our sales have skyrocketed. The team is highly knowledgeable, responsive, and a pleasure to work with. I highly recommend KNM Studio to any business looking to elevate their online marketing efforts.
                                </p>
                                <br/> <br/> <br/> <br/> 
                                <br/> <br/> <br/> <br/> <br/>
                              </>  
                            }
                            userName="Prajakta Gupta"
                            userRole="Founder Cologne Spa"
                       />
                </div>
                <div className={style.subSubContainer} data-aos="zoom-in-up">
                <div className={style.testimonial} >
                    <HomeTestimonialCard 
                            text={
                                <>
                                    <p>
                                    KNM Studio's video production work is outstanding! Their creative team consistently delivers impactful videos that elevate our marketing efforts. Highly commendable!
                                    </p>
                                <br/> 
                              </>  
                            }
                            userName="Siddharth Gupta"
                            userRole="Marketing Head -  Spardha Learning"
                       />
                </div>
                 <div className={style.space} />
                <div className={style.testimonial} >
                     <HomeTestimonialCard 
                            text={
                                <>
                                <p>
                                The content created by KNM Studio is exceptional! Their team consistently delivers captivating and high-quality content that engages our audience effectively. Highly recommended!
                                </p>
                                <br/>
                              </>  
                            }
                            userName="Umar Farukh"
                            userRole="Terminak Head Vivo"
                       />
                </div>
                </div>
                </div>
            </div>
        </>
    );
}
export default HomeTestimonial;