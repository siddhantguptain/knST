import style from './ContactUs.module.css';

const ContactUs = () =>{
    return (
        <>
            <div className={style.container}>
            <div className={style.subContaierOne} >
                <div className={style.title} data-aos="fade-down">
                <div className={style.overlay}></div>
                    <div>OPEN YOUR EYES, SEE THE WORLD IN MOTION,<br /> <span className={style.titleHead} >EVERYTHING AROUND YOU IS CHANGING.</span> </div>
                    
                </div>
                <div className={style.para}data-aos="fade-down" >
                Imagine if the moment has come for you to change. <br /> Starting a collaboration is easy! Order a free consultation or call back. <br /> We are always in touch and delighted to cooperate with you.
                </div>
                <div className={style.callForAction}></div>
            </div>
            </div>
        </>
    );
}
export default ContactUs;