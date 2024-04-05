import React, {useEffect}   from "react";
import style from './AboutUs.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { PiLightbulbLight } from "react-icons/pi";
import { SlLayers } from "react-icons/sl";
import BRAND_QUE from "../../BrandQue/BrandQue";
import OurTeam from "./OurTeam/OurTeam"
const ABOUT = () =>{
    useEffect(() =>{
        AOS.init({duration:400});
    },[]);
    return(
        <>
        <div className={style.mainContainer} >
            <div className={style.subContaierOne}>  
            <div className={style.overlay}></div>  
                <div className={style.title} data-aos="fade-down" > 
                    <div>Empowering businesses through captivating ads, commercial video production, corporate videos,
event coverage, brand development, and e-commerce solutions. <br /> <span className={style.titleHead}>Discover the untapped potential
of visual storytelling with us and redefine communication for lasting success.
</span></div>
                    
                </div>
                <div className={style.callForAction}></div>
            </div>
            <div className={style.subContaierSecond} data-aos="zoom-in-down">
                <div className={style.subContaierSecondHead}>HELPING BUISNESSES TO BRING <br />THERE CREATIVE PROJECTS TO LIFE</div>
                <p>At KNM Studio, we empower businesses through a comprehensive range of services, including captivating advertisement, corporate videos, event coverage, brand development, and e-commerce solutions. Our visual storytelling expertise uncovers untapped potential, while redefining communication for enduring success. We unleash the true potential of your brand, elevating it to new heights in the market. From crafting compelling advertisements to creating impactful corporate videos, capturing memorable events, building strong brands, and enabling seamless e-commerce experiences, we've got you covered. Experience the transformative power of video production with KNM Studio.</p>
            </div>
            <div className={style.subContaierThird} data-aos="zoom-in-down">
                <div className={style.subContaierThirdCard} data-aos="zoom-in-down">
                    <div className={style.subContaierThirdCardHead} data-aos="zoom-in-down"><PiLightbulbLight size={40}/> <span className={style.mainHead}>  OUR VISION</span> </div>
                    <div className={style.subContaierThirdCardPara} data-aos="zoom-in-down">At KNM Studio, our vision is to become the leading visual consultancy in India, setting the standard 
                            for excellence in the industry. We are dedicated to offering top-tier visual production services, 
                            delivering comprehensive solutions tailored to our clients' varied needs. By embracing innovation, 
                            creativity, and state-of-the-art technology, we aim to create compelling visual stories that engage 
                            audiences and propel brands to unprecedented levels of success. With an unwavering 
                            commitment to perfection, we strive to be the preferred partner for businesses in search of 
                            outstanding visual consultancy services, making a lasting impact in their respective fields.</div>
                </div>
                <div className={style.subContaierThirdCard} data-aos="zoom-in-down">
                     <div className={style.subContaierThirdCardHead} data-aos="zoom-in-down">  < SlLayers size={40}/> <span className={style.mainHead}> OUR GOALS </span> </div>
                    <div className={style.subContaierThirdCardPara} data-aos="zoom-in-down">
                    At KNM Studio, our mission is to empower businesses worldwide through the transformative power 
                            of visual storytelling. We strive to create captivating narratives, produce compelling content, and 
                            explore innovative possibilities. By uncovering untapped potential, we aim to redefine 
                            communication and elevate brands to new heights, driving remarkable achievements across 
                            industries.
                    </div>
                </div>
            </div>
            <div className={style.ourTeam}>
                <OurTeam />
            </div>        
        </div>   
        </>
    );
}
export default ABOUT;