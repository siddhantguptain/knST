import style from './Services.module.css';
import ServiceBOX from './ServicesBOX/HomeService'
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

            </div>
        </>
    );
}
export default Services;