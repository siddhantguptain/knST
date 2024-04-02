import React, {useEffect}  from "react";
import style from'./Home.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import HomeVideoSlider from "./HomeTabs/HomeVideoSlider/HomeVideoSlider";
import HomeAbout from "./HomeTabs/HomeAbout/HomeAbout";
import HomeService from "./HomeTabs/HomeService/HomeService";
import HomeOurWork from "./HomeTabs/HomeOurWork/HomeOurWork";
import HomeVision from "./HomeTabs/HomeVision/HomeVision";
import HomeTestimonial from "./HomeTabs/HomeTestimonial/HomeTestimonial";
import HomeBlogs from "./HomeTabs/HomeBlogs/HomeBlogs";


import { FaCircle } from "react-icons/fa";
import BrandQue from "../BrandQue/BrandQue";

const Home = () =>{
         useEffect(() =>{
        AOS.init({duration:1000});
    },[]);
    return(
        <>
            <div className={style.homeContainer}>

                <div className={style.mainContainer}>
                    <div className={style.LandingContainer}>
                             <HomeVideoSlider />
                   </div>

                   <HomeAbout />
                   <HomeService />
                   <HomeOurWork />
                   <HomeVision />
                   <div className={style.queDiv}>

                   <div className={style.sub}>
                    <h3><FaCircle /></h3>
                            <div className={style.subTitle}>
                                    <div> OUR CLIENTS</div>
                                </div>
                                </div>  
                                <h3 className={style.divTitle}>YOUR SUCCESSFUL,
                                </h3>
                                <div className={style.title}>
                                <h1> OUR REPUTATION</h1>
                                </div>
                              <div className={style.brandContainer} ><BrandQue /></div>
                   </div>
                   <HomeTestimonial />
                   <HomeBlogs />
                </div>
                
            </div>
        </>
    );
}
export default Home;