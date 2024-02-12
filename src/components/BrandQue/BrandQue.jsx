import style from "./BrandQue.module.css";
import A from "../../img/Brand/A.png";
import B from "../../img/Brand/B.png";
import C from "../../img/Brand/C.png";
import D from "../../img/Brand/D.png";
import E from "../../img/Brand/E.png";
import F from "../../img/Brand/F.png";
import G from "../../img/Brand/G.png";
import H from "../../img/Brand/H.png";
import I from "../../img/Brand/I.jpg";
import J from "../../img/Brand/J.png";

const BRAND_QUE = () =>{
    return(
        <>
            <div className={style.container}>
                <ul className={style.brandList} >
                    <li><img src={A}height={100} weight={70} /></li>
                    <li><img src={B} height={100} weight={70} /></li>
                    <li><img src={C} height={100} weight={70} /></li>
                    <li><img src={D} height={100} weight={70} /></li>
                    <li><img src={E} height={100} weight={70} /></li>
                    <li><img src={F} height={100} weight={70} /></li>
                    <li><img src={G} height={100} weight={70} /></li>
                    <li><img src={H} height={100} weight={70} /></li>
                    <li><img src={I} height={100} weight={70} /></li>
                    <li><img src={J} height={100} weight={70} /></li>
                </ul>
            </div>

        </>
    );
}
export default BRAND_QUE;