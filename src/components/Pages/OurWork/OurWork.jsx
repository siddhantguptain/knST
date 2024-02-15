import style from "./OurWork.module.css";

const OurWork = () =>{
    return(
        <>
          <div className={style.mainContainer}>
            <div className={style.subContaierOne}>
                <div className={style.title}>
                    <h1>OUR WORK<br /> <span className={style.titleHead}>EXPLORE → VISUALISE → CREATE</span></h1>
                    
                </div>
                     <div className={style.callForAction}></div>
            </div>
            {/* Second Container */}
             <div className={style.subContaierSecond}>
                <div className={style.subTitle}>SOME OF OUR BEST WORKS
                </div>   
                <div className={style.subHead}>ADVERTISEMENT || EVENTS || CORPORATE VIDEOS || INFORMATIVE VIDEOS || E-COMMERCE
                </div>   
             </div>   

         </div>   
        </>
    );
}
export default OurWork ;