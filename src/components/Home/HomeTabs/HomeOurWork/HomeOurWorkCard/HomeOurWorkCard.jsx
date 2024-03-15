import style from './HomeOurWorkCard.module.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LOR from "../../../../../video/BestWork/Natsha Shoot Loreal V7.mp4"
import LIVA from "../../../../../video/BestWork/Liva mp4 .mp4"
import BBZ from "../../../../../video/BestWork/BHarat Benz -100plus Bus Delivery.mp4"
import COM from "../../../../../video/BestWork/Coffe Machine_2.mp4"
import ACT from "../../../../../video/BestWork/ACTIMAX - CORE POLO - MASTER.mp4"
import MDC from "../../../../../video/BestWork/Mens_DD_Cream.mp4"
import V25 from "../../../../../video/BestWork/Varsha V25 Film.mp4"

import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

const HomeOurWorkCard =() =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
 const ourWorkDATA= [
        {
               key:1,
               src:LOR,
               type:"Advertisement",
               title:"LOREAL"
        },
           {
               key:2,
               src:LIVA,
               type:"Advertisement",
               title:"LIVA"
        },
        {
               key:3,
               src:ACT,
               type:"E-Commerce",
               title:"ACTIMAX"
        },
        {
               key:4,
               src:MDC,
               type:"Advertisement",
               title:"AEGTE DD CREAM"
        },
        {
               key:5,
               src:COM,
               type:"Advertisement",
               title:"CROMA COFFEE MACHINE"
        },
        {
               key:6,
               src:BBZ,
               type:"Corporate Video",
               title:"BHARAT BANZ"
        },
        {
               key:7,
               src:V25,
               type:"Advertisement",
               title:"v25 Series"
        }
 ]

    return(
        <> 
                {/* <Slider {...settings}> */}
                <div className={style.ourWorkSliders}>
                    {ourWorkDATA.map((el) =>(
                         <div className={style.ourWorkSlider}>
                            <video className={style.sliderVideo} src={`${el.src}`} alt={el.key} muted loop autoPlay />
                            <div className={style.WText}> 
                                   <h4 className={style.Wtype}>{el.type}</h4>
                                   <h1 className={style.Wtitle}>{el.title}</h1>
                            </div> 
                         </div>
                     ))}       
                </div>    
                 {/* </Slider> */}
                 <div className={style.scroller}>
                 <div className={style.scrollerLeft}><FaChevronCircleLeft /></div>
                 <div className={style.scrollerRight}><FaChevronCircleRight /></div>
                 </div>
        </>
    );
}
export default HomeOurWorkCard;