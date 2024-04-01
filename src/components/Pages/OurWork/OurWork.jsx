import React, {useEffect}   from "react";
import style from "./OurWork.module.css";

import OurWorkCard from './OurWorkCard/OurWorkCard';

import AOS from 'aos';
import 'aos/dist/aos.css';


import ABM from '../../../img/OurWorkThumnail/ABM.png';
import VIP from '../../../img/OurWorkThumnail/VIP.png';
import PLO from '../../../img/OurWorkThumnail/PLO.jpg';
import LOR from '../../../img/OurWorkThumnail/LOR.png';
import X90 from '../../../img/OurWorkThumnail/X90.png';
import APM from '../../../img/OurWorkThumnail/APM.png';
import O8S from '../../../img/OurWorkThumnail/O8S.png';
import CBH from '../../../img/OurWorkThumnail/CBH.png';
import AMC from '../../../img/OurWorkThumnail/AMC.png';
import BHU from '../../../img/OurWorkThumnail/BHU.jpg';
import VFT from '../../../img/OurWorkThumnail/VFT.png';
import SPA from '../../../img/OurWorkThumnail/SPA.png';
import AMD from '../../../img/OurWorkThumnail/AMD.png';
import SPI from '../../../img/OurWorkThumnail/SPI.jpg';
import OAM from '../../../img/OurWorkThumnail/OAM.png';
import VFS from '../../../img/OurWorkThumnail/VFS.png';
import ASP from '../../../img/OurWorkThumnail/ASP.png';
import V25 from '../../../img/OurWorkThumnail/V25.png';
import ALK from '../../../img/OurWorkThumnail/ALK.png';
import LIVA from '../../../img/OurWorkThumnail/LIVA.png';
import AEL from '../../../img/OurWorkThumnail/AEL.png';
import GHR from '../../../img/OurWorkThumnail/GHR.png';
import COL from '../../../img/OurWorkThumnail/COL.png';
import AMB from '../../../img/OurWorkThumnail/AMB.png';
import NP from '../../../img/OurWorkThumnail/NP.png';
import MCA from '../../../img/OurWorkThumnail/MCA.png';
import VCN from '../../../img/OurWorkThumnail/VCN.png';
import DEV from '../../../img/OurWorkThumnail/DEV.png';
import COM from '../../../img/OurWorkThumnail/COM.png';
import APA from '../../../img/OurWorkThumnail/APA.png';
import PBCL from '../../../img/OurWorkThumnail/PBCL.png';
import BBE from '../../../img/OurWorkThumnail/BBE.png';
import V29 from '../../../img/OurWorkThumnail/V29.png';
import KUM from '../../../img/OurWorkThumnail/KUM.png';
import FSB from '../../../img/OurWorkThumnail/FSB.png';
import OOB from '../../../img/OurWorkThumnail/OOB.png';
import VDI from '../../../img/OurWorkThumnail/VDI.png';
import SHA from '../../../img/OurWorkThumnail/SHA.png';

// const OurWorkCardDATA = [
//     {
//         title:"ACTIMAX BRAND MASTER",
//         subTitle:"ECommerce",
//         src:{ABM},
//     }
// ];


const OurWork = () =>{
    useEffect(() =>{
        AOS.init({duration:500});
    },[]);
    return(
        <>
          <div className={style.mainContainer}>
            <div className={style.subContaierOne}>
              
                <div className={style.title} 
                data-aos="fade-up"
                >
                      <div className={style.overlay}></div>
                    <div> <span className={style.titleSubHead} >OUR WORK</span>
                    <br /> 
                    <span className={style.titleHead}>
                        EXPLORE, VISUALISE, CREATE
                    </span></div>
                    
                </div>
                     <div className={style.callForAction}></div>
            </div>
            {/* Second Container */}
           
             <div className={style.subContaierSecond}>
                <div className={style.subTitle} data-aos="fade-down" >SOME OF OUR BEST WORKS
                </div>   
                <div className={style.subHead} data-aos="fade-down" >ADVERTISEMENT || EVENTS || CORPORATE VIDEOS || INFORMATIVE VIDEOS ||  E-COMMERCE
                </div>   

                <div className={style.Dis}>
                    <div className={style.DisOne}>       
                    <OurWorkCard className={style.disCard}
                        title="ACTIMAX BRAND MASTER"
                        Vtype="ECommerce"
                        src={ABM}
                    />
                  
                  <OurWorkCard className={style.disCard}
                        title="Plastic Omnium"
                        Vtype="Corporate_Videos"
                        src={PLO}
                    />

                        <OurWorkCard className={style.disCard}
                        title="Loreal Paris Rouge Signature"
                        Vtype="Advertisement"
                        src={LOR}
                    />
                     <OurWorkCard className={style.disCard}
                        title="Vivo X90 Series"
                        Vtype="Advertisement"
                        src={X90}
                    />
                  
                  <OurWorkCard className={style.disCard}
                        title="ACTIMAX POLO CATEGORY MASTER"
                        Vtype="ECommerce"
                        src={APM}
                    />

                        <OurWorkCard className={style.disCard}
                        title="One8 FUTURE"
                        Vtype="Advertisement"
                        src={O8S}
                    />
                      <OurWorkCard className={style.disCard}
                        title="Chota Don VIPS Wallet"
                        Vtype="Advertisement"
                        src={CBH}
                    />

                        <OurWorkCard className={style.disCard}
                        title="Aegte- Mens DD Cream"
                        Vtype="ECommerce"
                        src={AMC}
                    />
                     <OurWorkCard className={style.disCard}
                        title="Bhumiya-Shrikhand"
                        Vtype="ECommerce"
                        src={BHU}
                    />
                  
                  <OurWorkCard className={style.disCard}
                        title="VIPS Finstock- Fortune Teller"
                        Vtype="Advertisement"
                        src={VFT}
                    />

                        <OurWorkCard className={style.disCard}
                        title="Spardha School of Music 10000+"
                        Vtype="Informative Videos"
                        src={SPA}
                    />
                        <OurWorkCard className={style.disCard}
                        title="Amdocs"
                        Vtype="Corporate_Videos"
                        src={AMD}
                    />
                        <OurWorkCard className={style.disCard}
                        title="Vivo V23 with Neha Pendse"
                        Vtype="Advertisement"
                        src={NP}
                    />
                  </div>
                  <div className={style.DisTwo}>   

                  <OurWorkCard className={style.disCard}
                        title=" VIPS Wallet Tapri"
                        Vtype="Advertisement"
                        src={VIP}
                    />
                    <OurWorkCard className={style.disCard}
                        title="Vivo Travel with Arnab Satara"
                        Vtype="Corporate_Videos"
                        src={SPI}
                    />
                  
                      <OurWorkCard className={style.disCard}
                        title=" One8 Attitude"
                        Vtype="Advertisement"
                        src={OAM}
                    />

                        <OurWorkCard className={style.disCard}
                        title="VIPS Finstock - Right Time to Invest"
                        Vtype="Advertisement"
                        src={VFS}
                    />
                    <OurWorkCard className={style.disCard}
                        title=" ACTIMAX Style With Pants"
                        Vtype="ECommerce"
                        src={ASP}
                    />
                    <OurWorkCard className={style.disCard}
                        title="Vivo V25"
                        Vtype="Corporate_Videos"
                        src={V25}
                    />
                  
                      <OurWorkCard className={style.disCard}
                        title="Alkegen"
                        Vtype="Corporate_Videos"
                        src={ALK}
                    />

                        <OurWorkCard className={style.disCard}
                        title="LIVA"
                        Vtype="Advertisement"
                        src={LIVA}
                    />
                       <OurWorkCard className={style.disCard}
                        title="Aegte- Lip Balm     "
                        Vtype="ECommerce"
                        src={AEL}
                    />
                  
                      <OurWorkCard className={style.disCard}
                        title="Godrej Hr Event"
                        Vtype="Events"
                        src={GHR}
                    />

                        <OurWorkCard className={style.disCard}
                        title="Cologne Spa"
                        Vtype="Corporate_Videos"
                        src={COL}
                    />
                      <OurWorkCard className={style.disCard}
                        title="Aegte- Beard Growth Serum"
                        Vtype="ECommerce"
                        src={AMB}
                    />

                    <OurWorkCard className={style.disCard}
                        title="VIPS Finstock- Diwali"
                        Vtype="Advertisement"
                        src={VDI}
                    />
                    
                  </div>   
                  <div className={style.DisThree}>       
                    <OurWorkCard className={style.disCard}
                        title="MCEA Award Night"
                        Vtype="Events"
                        src={MCA}
                    />
                  
                      <OurWorkCard className={style.disCard}
                        title=" Vivo Champions Night"
                        Vtype="Events"
                        src={VCN}
                    />

                        <OurWorkCard className={style.disCard}
                        title="Devfest 2022 GDG"
                        Vtype="Events"
                        src={DEV}
                    />
                     <OurWorkCard className={style.disCard}
                        title="Coffee Machine Demo"
                        Vtype="Advertisement"
                        src={COM}
                    />
                  
                      <OurWorkCard className={style.disCard}
                        title="ACTIMAX Pants MASTER"
                        Vtype="ECommerce"
                        src={APA}
                    />

                        <OurWorkCard className={style.disCard}
                        title="PBCL"
                        Vtype="Events"
                        src={PBCL}
                    />

                    <OurWorkCard className={style.disCard}
                        title="Bharat Benz 100+ Bus Delivery"
                        Vtype="Corporate_Videos"
                        src={BBE}
                    />
                  
                      <OurWorkCard className={style.disCard}
                        title=" Vivo V29e"
                        Vtype="Advertisement"
                        src={V29}
                    />

                        <OurWorkCard className={style.disCard}
                        title="The Indie Earth"
                        Vtype="ECommerce"
                        src={KUM}
                    />
                     <OurWorkCard className={style.disCard}
                        title="FreeStyle - Sports Bra"
                        Vtype="ECommerce"
                        src={FSB}
                    />
                  
                      <OurWorkCard className={style.disCard}
                        title="One8-ONE BEAT ONE RULE"
                        Vtype="Advertisement"
                        src={OOB}
                    />

                    <OurWorkCard className={style.disCard}
                        title="Spardha School of Music"
                        Vtype="Informative Videos"
                        src={SHA}
                    />
                  
                  </div>  
                  </div>  
             </div>   

         </div>   
        </>
    );
}
export default OurWork ;