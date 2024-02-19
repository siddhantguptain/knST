import React, {useEffect}  from "react";
import style from'./Home.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import HomeAbout from "./HomeTabs/HomeAbout/HomeAbout";
import HomeService from "./HomeTabs/HomeService/HomeService";
import HomeTestimonial from "./HomeTabs/HomeTestimonial/HomeTestimonial";
import HomeBlogs from "./HomeTabs/HomeBlogs/HomeBlogs";

import BrandQue from "../BrandQue/BrandQue";

const Home = () =>{
         useEffect(() =>{
        AOS.init({duration:2000});
    },[]);
    return(
        <>
            <div className={style.homeContainer}>

                <div className={style.mainContainer}>
                    <div className={style.LandingContainer}>
                             Video
                   </div>

                   <HomeAbout />
                   <HomeService />
                   {/* Testimonial */}
                   <div className={style.queDiv}>
                             <div className={style.subTitle} data-aos="fade-right">
                                 <h5>⦿ OUR CLIENTS</h5>
                            </div>
                            <div className={style.title}  data-aos="fade-right" >
                                <h1>YOUR SUCCESSFUL, OUR REPUTATION</h1>
                              </div>
                              <div data-aos="zoom-in-down"><BrandQue /></div>
                   </div>
                   <HomeTestimonial />
                   <HomeBlogs />
                </div>
            </div>

        </>
    );
}
export default Home;