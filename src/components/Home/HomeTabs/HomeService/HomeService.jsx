import React, {useEffect}  from "react";
import style from './HomeService.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import ServiceCard from './ServiceCard/ServiceCard';

import { PiLightbulbLight } from "react-icons/pi";
import { PiVideoLight } from "react-icons/pi";
import { CiVideoOn } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { PiFileVideoLight } from "react-icons/pi";


const HomeService =() =>{
     useEffect(() =>{
          AOS.init({duration:1400});
      },[]);
    return(
        <>  
            <div className={style.container}>
                 <h3 className={style.title} data-aos="zoom-in-up">LET’S CHECK OUR SERVICES</h3>
                <div className={style.serviceCard}>
                    <ServiceCard className={style.Card}
                         icon={<PiLightbulbLight  size={90} />}     
                         ServiceTitle="BRAND DEVELOPMENT
                         " 
                         ServicePara="Trust us for crafting resonant brand identities through research, creative storytelling, and authentic narratives, setting you apart in India."
                    />
                    <ServiceCard className={style.Card}
                         icon={<PiVideoLight    size={90} />}   
                         ServiceTitle="ADVERTISEMENT
                         " 
                         ServicePara="Crafting captivating ads that resonate with Indian market dynamics, our media production ignites action and delivers results, cutting through clutter."
                    />
                    <ServiceCard className={style.Card}
                         icon={<CiVideoOn   size={90} />}   
                         ServiceTitle="CORPORATE VIDEOS
                         " 
                         ServicePara="Mastering corporate video production, we convey brand ethos through captivating visual narratives—leaving lasting impacts."
                    />
    
                    <ServiceCard className={style.Card}
                         icon={<CiShoppingCart   size={90} />}   
                         ServiceTitle="E-COMMERCE
                         " 
                         ServicePara="Expertly crafting e-commerce shoots, breathing life into products, understanding Indian market aesthetics."
                    />
                    <ServiceCard className={style.Card}
                         icon={<CiLocationOn   size={90} />}   
                         ServiceTitle="EVENTS
                         " 
                         ServicePara="Excelling in immortalizing emotions, we deliver event coverage that truly sets us apart from competitors."
                    /><ServiceCard className={style.Card}
                         icon={<PiFileVideoLight   size={90} />}   
                    ServiceTitle="EXPLAINER VIDEO
                    " 
                    ServicePara="We craft engaging explainer videos, simplify concepts, promote products, and captivate audiences effectively."
               />
                </div>


            </div>
        </>
    );
}
export default HomeService;