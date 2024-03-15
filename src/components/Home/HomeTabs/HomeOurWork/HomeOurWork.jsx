import style from './HomeOurWork.module.css';

import { FaCircle } from "react-icons/fa";

import HomeOurWorkCard from './HomeOurWorkCard/HomeOurWorkCard';
const HomeOurWork =() =>{
     

    return(
        <>  
            <div className={style.container}>
              <div className={style.sub}>
              <h3><FaCircle /></h3>
            <div className={style.subTitle}>
                    <div> OUR WORK</div>
                </div>
                </div>  
                <h3 className={style.divTitle}>OUR LATEST</h3>
                <div className={style.title}>
                <h1> AWESOME WORK</h1>
                </div>
                            <HomeOurWorkCard />     
                </div>
        </>
    );
}
export default HomeOurWork;