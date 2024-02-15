import style from './HomeService.module.css';

import ServiceCard from './ServiceCard/ServiceCard';

const HomeService =() =>{
    return(
        <>  
            <div className={style.container}>
                 <h3>LET’S CHECK OUR SERVICES</h3>
                <div className={style.serviceCard}>
                    <ServiceCard 
                         ServiceTitle="BRAND DEVELOPMENT
                         " 
                         ServicePara="Trust us for crafting resonant brand identities through research, creative storytelling, and authentic narratives, setting you apart in India."
                    />
                </div>


            </div>
        </>
    );
}
export default HomeService;