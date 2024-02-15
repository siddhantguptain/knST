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
                <div className={style.brandList}>
                    <img src={A}height={100} weight={70} />
                    <img src={B} height={100} weight={70} />
                    <img src={C} height={100} weight={70} />
                    <img src={D} height={100} weight={70} />
                    <img src={E} height={100} weight={70} />
                    <img src={F} height={100} weight={70} />
                    <img src={G} height={100} weight={70} />
                    <img src={H} height={100} weight={70} />
                    <img src={I} height={100} weight={70} />
                    <img src={J} height={100} weight={70} />
                </div>
                <div className={style.brandList}>
                    <img src={A}height={100} weight={70} />
                    <img src={B} height={100} weight={70} />
                    <img src={C} height={100} weight={70} />
                    <img src={D} height={100} weight={70} />
                    <img src={E} height={100} weight={70} />
                    <img src={F} height={100} weight={70} />
                    <img src={G} height={100} weight={70} />
                    <img src={H} height={100} weight={70} />
                    <img src={I} height={100} weight={70} />
                    <img src={J} height={100} weight={70} />
                </div>
            </div>

        </>
    );
}
export default BRAND_QUE;