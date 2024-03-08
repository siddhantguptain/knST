import style from './HomeVision.module.css';

const HomeVision =() =>{
    return(
        <>  
            <div className={style.container}>
            <div className={style.subTitle}>
                    <h5>⦿ OUR PROCESS</h5>
                </div>
                <div className={style.title}>
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
                <div className={style.visionContainer}>
                    <h2 className={style.visionContainerHead}>If you think visual representation is not important for your business <br /> Let us change this mindset of yours.</h2>
                    <p className={style.visionContainerPara}>"Dikhega nahi toh Bikega nahi" Visuals play a vital role in today's digital age, as they capture attention, convey messages effectively, and foster stronger brand connections. Did you know that content with relevant images gets 94% more views than text-only content? Incorporating visually engaging content in marketing materials, website design, and social media campaigns can significantly impact audience engagement and overall business growth. By demonstrating the power of visuals through success stories, compelling comparisons, and statistical evidence, we aim to transform your perspective. Embracing the significance of visual representation will enable your business to stand out, leave a lasting impression, and drive success in the competitive market landscape."<br/><br/>
Choose us as your media agency and let us help you elevate your brand to</p>
                </div>
            </div>
        </>
    );
}
export default HomeVision;