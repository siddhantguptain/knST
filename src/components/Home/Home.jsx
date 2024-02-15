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
                   <BrandQue />
                   <HomeBlogs />
                </div>
            </div>

        </>
    );
}
export default Home;