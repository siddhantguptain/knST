import style from './HomeOurWork.module.css';

import { Link } from "react-router-dom";
import { FaCircle } from "react-icons/fa";

import KnmButton from '../../../KnmButton/KnmButton';

import HomeOurWorkCard from './HomeOurWorkCard/HomeOurWorkCard';
const HomeOurWork =() =>{
     

    return(
        <>  
            <div className={style.container}>
            <div className={style.textContainer}>
                  <div className={style.textContainerOne}>  
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
                </div> 
                 <div className={style.textContainerTwo}>  
                <Link to="/our-work">
                         <KnmButton text="EXPLORE MORE" />
                      </Link>
                </div>
                </div>
                            <HomeOurWorkCard />     
                </div>
        </>
    );
}
export default HomeOurWork;