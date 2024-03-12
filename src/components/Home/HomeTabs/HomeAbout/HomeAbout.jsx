import style from './HomeAbout.module.css';
import { FaCircle } from "react-icons/fa";
const HomeAbout =() =>{
    return(
        <>  
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
                     <div className={style.subParameters}></div>
                </div>

              </div>
              <div className={style.subContainer} data-aos="fade-left">
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
                        38
                    </div>
                    <div className={style.subContainerExpText}>MONTHS OF <br />
                            DIGITAL EXPERIENCE</div>
                </div>
              </div>              
            </div>
        </>
    );
}
export default HomeAbout;