import {useState} from 'react';

import style from './HomeAbout.module.css';
import { FaCircle } from "react-icons/fa";

import Countup from 'react-countup';
import SrcollTrigger from 'react-scroll-trigger';

import { PiLightbulbLight } from "react-icons/pi";
import { SlLayers } from "react-icons/sl";
import { TbBinaryTree } from "react-icons/tb";      
import { RiArrowDropDownLine } from "react-icons/ri";
import { VscDash } from "react-icons/vsc";

const HomeAbout =() =>{
    const [counterOn , setCounterOn] =useState(false);
    const [sliderToggle , setSliderToggle] =useState(0);
    return(
        <>  
         <SrcollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
            <div className={style.container}>
              <div className={style.subContainer} data-aos="fade-right">
              <div className={style.sub}>
                 <h3><FaCircle /></h3>
                 <div className={style.subTitle}>
                    <div>ABOUT US</div>
                </div>
               </div>  
                <div className={style.aboutTitle} data-aos="fade-up">
                    WHO WE ARE
                </div>
                {/* Main */}
                <div className={style.parameters}>
                     <div className={style.subParameters}>
                        <div className={style.aboutParameters}>
                            <div className={style.subAboutParameters} onClick={() => setSliderToggle(1)}>
                                    <div className={style.subAboutParametersIcon}>
                                         <PiLightbulbLight size={32}/>
                                    </div>
                                    <div className={style.subAboutParametersHeading}>
                                            OUR VISION
                                     </div>
                                     <div className={style.subAboutParametersBtnIcon}>
                                     <RiArrowDropDownLine size={32}/>
                                     </div>  
                            </div>
                            <div className={style.aboutParametersPARA}>
                            At KNM Studio, our vision is to become the premier creative ad agency in India, setting the benchmark for excellence in the industry. We are committed to providing the finest video production services, offering comprehensive 360-degree solutions to meet our clients' diverse requirements. By harnessing innovation, creativity, and cutting-edge technology, we aspire to deliver captivating visual narratives that captivate audiences and elevate brands to new heights. With a relentless pursuit of perfection, we aim to be the go-to partner for businesses seeking exceptional video production and advertising solutions, leaving a lasting impact on their industries.
                            </div>  
                        </div>
                     </div>
                     <div className={style.subParameters}>
                        <div className={style.aboutParameters}>
                            <div className={style.subAboutParameters} onClick={() => setSliderToggle(2)}>
                                    <div className={style.subAboutParametersIcon}>
                                         < SlLayers size={32}/>
                                    </div>
                                    <div className={style.subAboutParametersHeading}>
                                            OUR GOALS
                                     </div>
                                     <div className={style.subAboutParametersBtnIcon}>
                                     <RiArrowDropDownLine size={32}/>
                                     </div>  
                            </div>
                            <div className={style.aboutParametersPARA}>
                            At KNM Studio, our mission is to empower businesses worldwide through the transformative power of visual storytelling. We strive to create captivating narratives, produce compelling content, and explore innovative possibilities. By uncovering untapped potential, we aim to redefine communication and elevate brands to new heights, driving remarkable achievements across industries.
                            </div>  
                        </div>
                     </div>
                     <div className={style.subParameters}>
                        <div className={style.aboutParameters}>
                            <div className={style.subAboutParameters} onClick={() => setSliderToggle(3)}>
                                    <div className={style.subAboutParametersIcon}>
                                         <TbBinaryTree size={32}/>
                                    </div>
                                    <div className={style.subAboutParametersHeading}>
                                            ABOUT US
                                     </div>
                                     <div className={style.subAboutParametersBtnIconAdv}>
                                     <RiArrowDropDownLine size={32}/>
                                     </div>  
                            </div>
                            <div className={style.aboutParametersPARA}>
                            At KNM Studio, our vision is to become the premier creative ad agency in India, setting the benchmark for excellence in the industry. We are committed to providing the finest video production services, offering comprehensive 360-degree solutions to meet our clients' diverse requirements. By harnessing innovation, creativity, and cutting-edge technology, we aspire to deliver captivating visual narratives that captivate audiences and elevate brands to new heights. With a relentless pursuit of perfection, we aim to be the go-to partner for businesses seeking exceptional video production and advertising solutions, leaving a lasting impact on their industries.
                            </div>  
                        </div>
                     </div>
                     
                </div>

              </div>
              <div className={style.subContainer} >
                <div className={style.subContainerHead}>
                     HELLO WE, KNM GROUP
                </div>
                <div className={style.subContainerPara}>
                    Founded in 2020, KNM Studio is a top video production company in Pune. Embrace digital connectivity and elevate your business with our cutting-edge tools and techniques for a competitive edge and remarkable success. Welcome to the world of captivating visual storytelling.
                </div>    
                <div className={style.subContainerTag}>
                    Sparsh Agrawal <br/>
                    
                </div>  
                <div className={style.subContainerTagRole} >Founder</div>
                <div className={style.subContainerExp}>
                    <div className={style.subContainerExpNum}>
                    {counterOn &&
                                <Countup start={0} end={42} duration={2} /> 
                             }
                    </div>
                    <div className={style.subContainerExpText}>MONTHS OF <br />
                            DIGITAL EXPERIENCE</div>
                </div>
              </div>              
            </div>
         </SrcollTrigger>     
        </>
    );
}
export default HomeAbout;