import style from './HomeVision.module.css';

const HomeVision =() =>{
    return(
        <>  
            <div className={style.container}>
            <div className={style.subTitle}>
                    <h5>⦿ OUR PROCESS</h5>
                </div>
                <div className={style.title} data-aos="fade-up">
                    <h1>HOW OUR WORK FLOWS</h1>
                </div>

                <div className={style.subContainer}>
                    <div className={style.subContainerDIV}>
                        <div className={style.percentage}>15%</div>
                        <div className={style.Vititle}>CONSULT</div>
                        <div className={style.VisubTitle}>We start by diving deep into your brand, audience, and goals. Our experts research and consult to capture your essence and message.</div>
                    </div>
                    <div className={style.subContainerDIV}>
                        <div className={style.percentage}>50%</div>
                        <div className={style.Vititle}>CREATE</div>
                        <div className={style.VisubTitle}>After gathering insights, our creative team crafts brand-aligned concepts. Your input shapes the final concept, leading to exceptional storytelling through professional filming.</div>
                    </div>
                    <div className={style.subContainerDIV}>
                        <div className={style.percentage}>35%</div>
                        <div className={style.Vititle}>CONCEIVE</div>
                        <div className={style.VisubTitle}>After filming, our skilled post-production team enhances raw footage with technology, crafting a captivating, brand-aligned masterpiece for your audience.</div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default HomeVision;