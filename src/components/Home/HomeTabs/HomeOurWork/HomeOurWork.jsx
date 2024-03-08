import style from './HomeOurWork.module.css';

import LOR from "../../../../video/BestWork/Natsha Shoot Loreal V7.mp4"
import LIVA from "../../../../video/BestWork/Liva mp4 .mp4"
import BBZ from "../../../../video/BestWork/BHarat Benz -100plus Bus Delivery.mp4"
import COM from "../../../../video/BestWork/Coffe Machine_2.mp4"
import ACT from "../../../../video/BestWork/ACTIMAX - CORE POLO - MASTER.mp4"
import MDC from "../../../../video/BestWork/Mens_DD_Cream.mp4"
import V25 from "../../../../video/BestWork/Varsha V25 Film.mp4"

const HomeOurWork =() =>{
    return(
        <>  
            <div className={style.container}>
              <div className={style.sub}>
              <h2>⦿</h2>
            <div className={style.subTitle}>
                    <div> OUR WORK</div>
                </div>
                </div>  
                <h3 className={style.divTitle}>OUR LATEST</h3>
                <div className={style.title}>
                <h1> AWESOME WORK</h1>
                </div>
                 <div className={style.ourWorkSliders}>
                        <div className={style.ourWorkSlider}>
                            <video className={style.sliderVideo} src={LOR} width={300}  muted loop autoPlay />
                            <div className={style.WText}> 
                                   <h4 className={style.Wtype}>Advertisement</h4>
                                   <h1 className={style.Wtitle}>LOREAL</h1>
                            </div> 
                         </div>
                         <div className={style.ourWorkSlider}>
                            <video className={style.sliderVideo} src={LIVA} muted loop autoPlay />
                            <div className={style.WText}> 
                                   <h4 className={style.Wtype}>Advertisement</h4>
                                   <h1 className={style.Wtitle}>LIVA</h1>
                            </div> 
                         </div> 
                         <div className={style.ourWorkSlider}>
                            <video className={style.sliderVideo} src={ACT} muted loop autoPlay />
                            <div className={style.WText}> 
                                   <h4 className={style.Wtype}>Advertisement</h4>
                                   <h1 className={style.Wtitle}>ACTIMAX</h1>
                            </div> 
                         </div> 
                         <div className={style.ourWorkSlider}>
                            <video className={style.sliderVideo} src={MDC} muted loop autoPlay />
                            <div className={style.WText}> 
                                   <h4 className={style.Wtype}>Advertisement</h4>
                                   <h1 className={style.Wtitle}>AEGTE DD CREAM</h1>
                            </div> 
                         </div>
                         <div className={style.ourWorkSlider}>
                            <video className={style.sliderVideo} src={COM} muted loop autoPlay />
                            <div className={style.WText}> 
                                   <h4 className={style.Wtype}>Advertisement</h4>
                                   <h1 className={style.Wtitle}>CROMA COFFEE MACHINE</h1>
                            </div> 
                         </div>
                         <div className={style.ourWorkSlider}>
                            <video className={style.sliderVideo} src={BBZ} muted loop autoPlay />
                            <div className={style.WText}> 
                                   <h4 className={style.Wtype}>Corporate Video</h4>
                                   <h1 className={style.Wtitle}>BHARAT BANZ</h1>
                            </div> 
                         </div>
                         <div className={style.ourWorkSlider}>
                            <video className={style.sliderVideo} src={V25} muted loop autoPlay />
                            <div className={style.WText}> 
                                   <h4 className={style.Wtype}>Advertisement</h4>
                                   <h1 className={style.Wtitle}>v25 Series</h1>
                            </div> 
                         </div>
                 </div>
                </div>
        </>
    );
}
export default HomeOurWork;