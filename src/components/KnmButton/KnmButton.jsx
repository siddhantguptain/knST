
import style from './KnmButton.module.css';
import { FaAngleRight } from "react-icons/fa";

const KnmButton =() =>{
     return(
    <> 
        <div className={style.btnContainer}>
        <div className={style.btnContainerIcon}><FaAngleRight className={style.BtnIcon} />
        <div className={style.btnContainerText}>EXPLORE MORE</div></div>
        
        </div>
    </>
    );
}
export default KnmButton;