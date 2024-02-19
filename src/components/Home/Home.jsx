import React from "react";
import style from'./Home.module.css';

import HomeAbout from "./HomeTabs/HomeAbout/HomeAbout";
import HomeService from "./HomeTabs/HomeService/HomeService";
import HomeBlogs from "./HomeTabs/HomeBlogs/HomeBlogs";

import BrandQue from "../BrandQue/BrandQue";

const Home = () =>{
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
                   <div className={style.subTitle}>
                    <h5>⦿ OUR CLIENTS</h5>
                </div>
                <div className={style.title}>
                    <h1>YOUR SUCCESSFUL, OUR REPUTATION</h1>
                </div>
                        <BrandQue />
                   </div>
                   
                   <HomeBlogs />
                </div>
            </div>

        </>
    );
}
export default Home;