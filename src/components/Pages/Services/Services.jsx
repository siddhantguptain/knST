import style from './Services.module.css';
import ServiceBOX from './ServicesBOX/HomeService';
import ServiceTestimonial from './ServiceTestimonial/ServiceTestimonial';
import SerOne from '../../../img/ServiceICONS/Service Buisness.jpg';
import SerTwo from '../../../img/ServiceICONS/Service Table.jpg';

const Services = () =>{
    return (
        <>
            <div className={style.container}>
            <div className={style.subContaierOne}>
                <div className={style.title} data-aos="fade-down" >
                    <div>ELEVATING YOUR VISION WITH <br /> <span className={style.titleHead}>PROFICIENT VIDEO PRODUCTION</span></div>
                    
                </div>
                <div className={style.para}data-aos="fade-down" >
                Searching for a partner to make your online presence remarkable? <br />Look no further. Our team can elevate your business to new heights.
                </div>
                <div className={style.callForAction}></div>
            </div>
            <div className={style.checkS}>
                <div className={style.box}>
                  <ServiceBOX />
                </div>
            </div>
            <div className={style.checkS}>
                <div className={style.serviceContainer}>
                    <div className={style.subServiceContainer}>
                            <div className={style.subServiceContainerOne}>
                                <div className={style.subServiceContainerOneHead}>WE PROVIDE YOU WITH THE BEST SERVICE IN THE MARKET</div>
                                <div className={style.subServiceContainerOnePara}>Deadlines shouldn't be a source of stress.  At KNM Studio we consistently crush deadlines and deliver award-winning creative content.  We don't just meet your expectations, we exceed them.</div>
                            </div>
                            <div className={style.subServiceContainerTwo}>
                                <div className={style.subServiceContainerTwoPara}>Our secret weapon?  Seamless collaboration.  We work closely with you throughout the entire process, ensuring every frame resonates with your vision and brand identity.  Forget communication gaps and frustrating revisions.  Our team of passionate creatives fosters trust and brings your unique vision to life with a smooth, collaborative approach.</div><br />
                                <div className={style.subServiceContainerTwoPara}>craft impactful stories that captivate viewers and achieve your marketing objectives.  Partner with KNM Studio to stand out from the crowd with high-quality productions that elevate your brand.</div>
                            </div>                            
                         </div>
                        <div className={style.serImgContainer}>
                            <img className={style.serviceImgContainerOne} src={SerOne} alt="Serices" width={800} />
                            <img className={style.serviceImgContainerTwo} src={SerTwo} alt="Serices"  width={355} />
                        </div>

                     </div>
                     <div className={style.checkSer}> 
                            <ServiceTestimonial />
                     </div>

            </div>

            </div>
        </>
    );
}
export default Services;