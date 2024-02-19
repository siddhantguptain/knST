import React, {useEffect}  from "react";
import style from './HomeVideoSliderCard.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';


import One8 from '../../../../../video/One8.mp4'

const HomeVideoSliderCard = (props ) =>{
    useEffect(() =>{
        AOS.init({duration:1400});
    },[]);
    return(
        <>  
            <div className={style.container} >
            <video src={One8} autoPlay muted loop/>
               <div className={style.content}>
               <div className={style.title}>
                        <h1>ONE 8 - ATTITUDE</h1>
                    </div>
                    <div className={style.subTitle}>⦿ Advertisement</div>
                    <div className={style.para}>Embracing the bold attitude that comes after wearing the undergarments of One8 <br />Fearlessly conquer every challenge.</div>
               </div>
            </div>
        </>
    );
}
export default HomeVideoSliderCard;