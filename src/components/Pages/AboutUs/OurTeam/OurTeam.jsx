import style from './OurTeam.module.css';

import Sparsh from "../../../../img/OurTeam/SHA02697.jpg";
import Shailesh from "../../../../img/OurTeam/SHA02741.jpg";
import Sayali  from "../../../../img/OurTeam/SHA02701.jpg";
import Nikhil from "../../../../img/OurTeam/SHA02808.jpg";

const OurTeam =() =>{

    return(
        <>  
            <div className={style.container}>
            <div className={style.subTitle}>
                    <h5>⦿ OUR TEAM</h5>
                </div>
                <div className={style.title} >
                    <h1>THE BEST TEAM EVER!</h1>
                </div>
                <div className={style.members}>
                     <div className={style.member}>
                          <img className={style.cardImg} src={Sparsh} width={400} height={550} />
                                <div className={style.memberContent}>
                                    <div className={style.memberName}>Sparsh Agrawal</div>
                                    <div className={style.memberRole}> Founder </div>
                                </div>
                    </div>
                    <div className={style.member}>
                          <img className={style.cardImg} src={Shailesh} width={400} height={550} />
                                <div className={style.memberContent}>
                                    <div className={style.memberName}>Shailesh Tilekar</div>
                                    <div className={style.memberRole}> Creative Head </div>
                                </div>
                    </div>
                    <div className={style.member}>
                          <img className={style.cardImg} src={Sayali} width={400} height={550} />
                                <div className={style.memberContent}>
                                    <div className={style.memberName}>Sayali RasKar</div>
                                    <div className={style.memberRole}> Chief Editor  </div>
                                </div>
                    </div>
                    <div className={style.member}>
                          <img className={style.cardImg} src={Nikhil} width={400} height={550} />
                                <div className={style.memberContent}>
                                    <div className={style.memberName}>Nikhil Inamke</div>
                                    <div className={style.memberRole}> Head of Videography </div>
                                </div>
                    </div>

                 
                </div>
            </div>
        </>
    );
}
export default OurTeam;