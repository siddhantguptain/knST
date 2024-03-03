import { useEffect } from "react";
import style from './HomeBlogs.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import BL1 from "../../../../img/BlogImg/BLOG 1 Digital Marketing Illustration.png"
import BL2 from "../../../../img/BlogImg/Blog 2 VNU_M715_4.png"
import BL3 from "../../../../img/BlogImg/BLOG 3 Influencer.png"


import HomeBlogsCard from './HomeBlogsCard/HomeBlogsCard';
const HomeBlogs =() =>{
    useEffect(() =>{
        AOS.init({duration:1000});
    },[]);
    return(
        <>  
            <div className={style.container} data-aos="fade-up">
                <div className={style.subTitle}>
                    <h5>⦿ LATEST NEWS</h5>
                </div>
                <div className={style.title} data-aos="fade-up">
                    <h1>LATEST AND GREATEST POST</h1>
                </div>
            <div className={style.subContainer} data-aos="fade-up">
                    <HomeBlogsCard 
                        src={   <img src={BL1} alt=">Why is marketing important for businesses?" height="300"/>} 
                        tag="July 12, 2023 .. Marketing"
                        title="Why is marketing important for businesses?"
                    />
                    <HomeBlogsCard 
                        src={   <img src={BL2} alt=">Why is marketing important for businesses?" height="300"/>} 
                        tag="July 18, 2023 .. Editorial"
                        title="Power of story telling in content marketing."
                    />
                    <HomeBlogsCard 
                        src={   <img src={BL3} alt=">Why is marketing important for businesses?" height="300"/>} 
                        tag="July 22, 2022 .. Educational"
                        title="Growth of influencer marketing"
                    />
            </div>
            </div>
        </>
    );
}
export default HomeBlogs;