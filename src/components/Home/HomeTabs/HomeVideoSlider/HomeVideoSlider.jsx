import React, {useEffect}  from "react";
import style from'./HomeVideoSlider.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import One8 from '../../../../video/One8.mp4'

const HomeVideoSlider = () =>{
         useEffect(() =>{
        AOS.init({duration:2000});
    },[]);
    return(
        <>
             <div className={style.container}>
               <video src={One8} autoPlay muted loop/>
             </div>
     
        </>
    );
}
export default HomeVideoSlider;