import React, {useEffect}   from "react";
import style from "./OurWork.module.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

const OurWork = () =>{
    useEffect(() =>{
        AOS.init({duration:1400});
    },[]);
    return(
        <>
          <div className={style.mainContainer}>
            <div className={style.subContaierOne}>
                <div className={style.title} 
                data-aos="zoom-in-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                >
                    <h1>OUR WORK<br /> 
                    <span className={style.titleHead}>
                        EXPLORE → VISUALISE → CREATE
                    </span></h1>
                    
                </div>
                     <div className={style.callForAction}></div>
            </div>
            {/* Second Container */}
             <div className={style.subContaierSecond}>
                <div className={style.subTitle}>SOME OF OUR BEST WORKS
                </div>   
                <div className={style.subHead}>ADVERTISEMENT || EVENTS || CORPORATE VIDEOS || INFORMATIVE VIDEOS || E-COMMERCE
                </div>   
             </div>   

         </div>   
        </>
    );
}
export default OurWork ;