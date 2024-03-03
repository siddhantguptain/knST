import React, {useEffect}   from "react";
import style from './AboutUs.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import BRAND_QUE from "../../BrandQue/BrandQue";

const ABOUT = () =>{
    useEffect(() =>{
        AOS.init({duration:1400});
    },[]);
    return(
        <>
        <div className={style.mainContainer} >
            <div className={style.subContaierOne}>
                <div className={style.title} >
                    <h1>ELEVATING YOUR VISION WITH <br /> <span className={style.titleHead}>PROFICIENT VIDEO PRODUCTION</span></h1>
                    
                </div>
                <div className={style.para} >
                Searching for a partner to make your online presence remarkable? <br />Look no further. Our team can elevate your business to new heights.
                </div>
                <div className={style.callForAction}></div>
            </div>
            <div className={style.subContaierSecond} data-aos="zoom-in-down">
                <h1>HELPING BUISNESSES TO BRING <br />THERE CREATIVE PROJECTS TO LIFE</h1>
                <p>At KNM Studio, we empower businesses through a comprehensive range of services, including captivating advertisement, corporate videos, event coverage, brand development, and e-commerce solutions. Our visual storytelling expertise uncovers untapped potential, while redefining communication for enduring success. We unleash the true potential of your brand, elevating it to new heights in the market. From crafting compelling advertisements to creating impactful corporate videos, capturing memorable events, building strong brands, and enabling seamless e-commerce experiences, we've got you covered. Experience the transformative power of video production with KNM Studio.</p>
            </div>
            <BRAND_QUE />
        </div>   
        </>
    );
}
export default ABOUT;