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

                <div className={style.contactMap}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.405600446975!2d73.78045657423847!3d18.555744082544674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf1c320235db%3A0x50ab6b64bffacdf4!2sKNM%20Studio!5e0!3m2!1sen!2sin!4v1710425177496!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            </div>
        </>
    );
}
export default ContactUs;