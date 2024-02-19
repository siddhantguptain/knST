import React, {useEffect}  from "react";
import style from'./HomeVideoSlider.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import One8 from '../../../../video/One8.mp4'
// import One8 from '../../../../video/ACTIMAX - BRAND MASTER.mp4'

const HomeVideoSlider = () =>{
         useEffect(() =>{
        AOS.init({duration:2000});
    },[]);
    return(
        <>
             <div className={style.container}>
                <div className={style.overlay}></div>
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
export default HomeVideoSlider;