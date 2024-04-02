import style from "./BrandQue.module.css";
import A from "../../img/Brand/A.png";
import B from "../../img/Brand/B.png";
import C from "../../img/Brand/C.png";
// import D from "../../img/Brand/D.png";
import E from "../../img/Brand/E.png";
import F from "../../img/Brand/F.png";
import G from "../../img/Brand/G.png";
// import H from "../../img/Brand/H.png";
import I from "../../img/Brand/I.jpg";
import J from "../../img/Brand/J.png";

const BRAND_QUE = () =>{
    return(
        <>
            <div className={style.container}>
                <div className={style.brandList}>
                    <img src={A} alt="" height={130} weight={90} />
                    <img src={B} alt="" height={130} weight={90} />
                    <img src={C} alt="" height={130} weight={90} />
                    <img src={E} alt="" height={130} weight={90} /><br/>
                    <img src={F} alt="" height={130} weight={90} />
                    <img src={G} alt="" height={130} weight={90} />
                    <img src={I} alt="" height={130} weight={90} />
                    <img src={J} alt="" height={130} weight={90} />
                </div>
                <div className={style.brandListPhone}>
                    <img src={A} alt="" height={130} weight={90} />
                    <img src={B} alt="" height={130} weight={90} />
                    <img src={C} alt="" height={130} weight={90} />
                    <img src={E} alt="" height={130} weight={90} />
                    <img src={F} alt="" height={130} weight={90} />
                    <img src={G} alt="" height={130} weight={90} />
                    <img src={I} alt="" height={130} weight={90} />
                    <img src={J} alt="" height={130} weight={90} />
                </div>

           
            </div>

        </>
    );
}
export default BRAND_QUE;