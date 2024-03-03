import { useEffect } from "react";
import style from './HomeBlogs.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import HomeBlogsCard from './HomeBlogsCard/HomeBlogsCard';
const HomeBlogs =() =>{
    useEffect(() =>{
        AOS.init({duration:2000});
    },[]);
    return(
        <>  
            <div className={style.container} data-aos="fade-right">
                <div className={style.subTitle}>
                    <h5>⦿ LATEST NEWS</h5>
                </div>
                <div className={style.title} data-aos="fade-right">
                    <h1>LATEST AND GREATEST POST</h1>
                </div>
                <HomeBlogsCard />
            </div>
        </>
    );
}
export default HomeBlogs;