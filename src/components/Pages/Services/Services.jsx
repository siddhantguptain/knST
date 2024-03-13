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
                                <div className={style.subServiceContainerOnePara}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration, by injected humour. words</div>
                            </div>
                            <div className={style.subServiceContainerTwo}>
                                <div className={style.subServiceContainerTwoPara}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration, Injected humour words web page editors now use as their.</div><br />
                                <div className={style.subServiceContainerTwoPara}>Default and a search for will uncover many web sites still in their infancy.suffered alteration, by injected humour words web page.</div>
                            </div>                            
                         </div>
                        <div className={style.serImgContainer}>
                            <img src={SerOne} alt="Serices" heights={300} width={800} />
                            <img src={SerTwo} alt="Serices" heights={300} width={355} />
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