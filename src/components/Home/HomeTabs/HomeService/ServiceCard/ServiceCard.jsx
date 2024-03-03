import React, {useEffect}  from "react";
import style from './ServiceCard.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesCard = (props ) =>{
    useEffect(() =>{
        AOS.init({duration:500});
    },[]);
    return(
        <>  
            <div className={style.container} data-aos="fade-down-right">
                <div className={style.serviceIcon}>
                {/* <FaRegLightbulb size={90} /> */}
                {props.icon}
                </div>
                <div className={style.serciveTitle}>
                {props.ServiceTitle}
                </div>
                <div className={style.servicePara}>
                {props.ServicePara}
                </div>
            </div>
        </>
    );
}
export default ServicesCard;