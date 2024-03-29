import style from './OurTeam.module.css';

import { FaCircle } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import Sparsh from "../../../../img/OurTeam/SHA02697.jpg";
import Shailesh from "../../../../img/OurTeam/SHA02741.jpg";
import Sayali  from "../../../../img/OurTeam/SHA02701.jpg";
import Nikhil from "../../../../img/OurTeam/SHA02808.jpg";

const OurTeam =() =>{

    return(
        <>  
            <div className={style.container}>
            <div className={style.sub}>
              <h3><FaCircle /></h3>
            <div className={style.subTitle}>
                    <div> Our Teams</div>    
                </div>
                </div> 
                <div className={style.title}>
                <h1> THE BEST TEAM EVER!</h1>
                </div>
           
                <div className={style.members}>
                     <div className={style.member}>
                          <img className={style.cardImg} src={Sparsh} alt="knmStudioTeam" width={400} height={550} />
                                <div className={style.memberContent}>
                                    <div className={style.memberName}>Sparsh Agrawal</div>
                                    <div className={style.memberRole}> Founder </div>
                                    <div className={style.userSocialMedia}>
                                        <div className={style.userSocialMediaIcons}>
                                            <a 
                                               href="https://www.instagram.com/studio.knm/?igshid=MjEwN2IyYWYwYw%3D%3D" 
                                               target="_blank" rel="noreferrer" >
                                                <AiFillInstagram size={25} />
                                            </a>
                                        </div>
                                        <div className={style.userSocialMediaIcons}>
                                             <a 
                                               href="https://www.linkedin.com/company/knm-studio/ "
                                               target="_blank" rel="noreferrer" >
                                              <FaLinkedinIn size={25} />
                                             </a>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div className={style.member}>
                          <img className={style.cardImg} src={Shailesh} alt="knmStudioTeam" width={400} height={550} />
                                <div className={style.memberContent}>
                                    <div className={style.memberName}>Shailesh Tilekar</div>
                                    <div className={style.memberRole}> Creative Head </div>
                                    <div className={style.userSocialMedia}>
                                        <div className={style.userSocialMediaIcons}>
                                            <a 
                                               href="https://www.instagram.com/studio.knm/?igshid=MjEwN2IyYWYwYw%3D%3D" 
                                               target="_blank" rel="noreferrer" >
                                                <AiFillInstagram size={25} />
                                            </a>
                                        </div>
                                        <div className={style.userSocialMediaIcons}>
                                             <a 
                                               href="https://www.linkedin.com/company/knm-studio/ "
                                               target="_blank" rel="noreferrer" >
                                              <FaLinkedinIn size={25} />
                                             </a>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div className={style.member}>
                          <img className={style.cardImg} src={Sayali} alt="knmStudioTeam" width={400} height={550} />
                                <div className={style.memberContent}>
                                    <div className={style.memberName}>Sayali RasKar</div>
                                    <div className={style.memberRole}> Chief Editor  </div>
                                    <div className={style.userSocialMedia}>
                                        <div className={style.userSocialMediaIcons}>
                                            <a 
                                               href="https://www.instagram.com/studio.knm/?igshid=MjEwN2IyYWYwYw%3D%3D" 
                                               target="_blank" rel="noreferrer" >
                                                <AiFillInstagram size={25} />
                                            </a>
                                        </div>
                                        <div className={style.userSocialMediaIcons}>
                                             <a 
                                               href="https://www.linkedin.com/company/knm-studio/ "
                                               target="_blank" rel="noreferrer" >
                                              <FaLinkedinIn size={25} />
                                             </a>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div className={style.member}>
                          <img className={style.cardImg} src={Nikhil} alt="knmStudioTeam" width={400} height={550} />
                                <div className={style.memberContent}>
                                    <div className={style.memberName}>Nikhil Inamke</div>
                                    <div className={style.memberRole}> Head of Videography </div>
                                    <div className={style.userSocialMedia}>
                                        <div className={style.userSocialMediaIcons}>
                                            <a 
                                               href="https://www.instagram.com/studio.knm/?igshid=MjEwN2IyYWYwYw%3D%3D" 
                                               target="_blank" rel="noreferrer" >
                                                <AiFillInstagram size={25} />
                                            </a>
                                        </div>
                                        <div className={style.userSocialMediaIcons}>
                                             <a 
                                               href="https://www.linkedin.com/company/knm-studio/ "
                                               target="_blank" rel="noreferrer" >
                                              <FaLinkedinIn size={25} />
                                             </a>
                                        </div>
                                    </div>
                                </div>
                    </div>

                 
                </div>
            </div>
        </>
    );
}
export default OurTeam;