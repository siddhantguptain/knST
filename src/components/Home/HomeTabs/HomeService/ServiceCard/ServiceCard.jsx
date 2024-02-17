import style from './ServiceCard.module.css';


const ServicesCard = (props ) =>{
    return(
        <>  
            <div className={style.container}>
                <div className={style.serviceIcon}>
                {/* <FaRegLightbulb size={90} /> */}
                {props.icon}
                </div>
                <div className={style.serciveTitle}>
                {props.ServiceTitle}
                </div>
                <div className={style.servicePara}>
                {props.ServicePara}
                </div>
            </div>
        </>
    );
}
export default ServicesCard;