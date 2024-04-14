import React, {useEffect, useState}   from "react";
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
    const [displayType, setDisplayType] = useState("ALL");

    useEffect(() =>{
        AOS.init({duration:500});
    },[]);

    const OurWorkDATAOne =[
        {
                src:ABM,
                Vtyte:"ECommerce",
                title:"ACTIMAX BRAND MASTER"
        },
        {
            src:PLO,
            Vtyte:"Corporate_Videos",
            title:"Plastic Omnium"
        },
        {
            src:LOR,
            Vtyte:"Advertisement",
            title:"Loreal Paris Rouge Signature"
        },
        {
                src:X90,
                Vtyte:"Advertisement",
                title:"Vivo X90 Series"
        },
        {
            src:O8S,
            Vtyte:"Advertisement",
            title:"One8 FUTURE"
        },
        {
            src:CBH,
            Vtyte:"Advertisement",
            title:"Chota Don VIPS Wallet"
        },
        
        {
                src:AMC,
                Vtyte:"ECommerce",
                title:"Aegte- Mens DD Cream"
        },
        {
            src:BHU,
            Vtyte:"ECommerce",
            title:"Bhumiya-Shrikhand"
        },
        {
            src:VFT,
            Vtyte:"Advertisement",
            title:"VIPS Finstock- Fortune Teller"
        },
        {
                src:SPA,
                Vtyte:"Informative Videos",
                title:"Spardha School of Music 10000+"
        },
        {
            src:AMD,
            Vtyte:"Corporate_Videos",
            title:"Amdocs"
        },
        {
            src:NP,
            Vtyte:"Advertisement",
            title:"Vivo V23 with Neha Pendse"
        },
        {
            src:VDI,
            Vtyte:"Advertisement",
            title:"VIPS Finstock- Diwali"
        },
        
    ]
    const OurWorkDATATwo =[
        {
                src:VIP,
                Vtyte:"Advertisement",
                title:"VIPS Wallet Tapri"
        },
        {
            src:SPI,
            Vtyte:"Corporate_Videos",
            title:"Vivo Travel with Arnab Satara"
        },
        {
            src:OAM,
            Vtyte:"Advertisement",
            title:"One8 Attitude"
        },
        {
                src:VFS,
                Vtyte:"Advertisement",
                title:"VIPS Finstock - Right Time to Invest"
        },
        {
            src:ASP,
            Vtyte:"ECommerce",
            title:"ACTIMAX Style With Pants"
        },
        {
            src:V25,
            Vtyte:"Corporate_Videos",
            title:"Vivo V25"
        },
        
        {
                src:ALK,
                Vtyte:"Corporate_Videos",
                title:"Alkegen"
        },
        {
            src:LIVA,
            Vtyte:"Advertisement",
            title:"LIVA"
        },
        {
            src:AEL,
            Vtyte:"ECommerce",
            title:"Aegte- Lip Balm"
        },
        {
                src:GHR,
                Vtyte:"Events",
                title:"Godrej Hr Event"
        },
        {
            src:COL,
            Vtyte:"Corporate_Videos",
            title:"Cologne Spa"
        },
        {
            src:AMB,
            Vtyte:"ECommerce",
            title:"Aegte- Beard Growth Serum"
        },
        
        
    ]
    const OurWorkDATAThree =[
        {
                src:MCA,
                Vtyte:"Events",
                title:"MCEA Award Night"
        },
        {
            src:VCN,
            Vtyte:"Events",
            title:"Vivo Champions Night"
        },
        {
            src:DEV,
            Vtyte:"Events",
            title:"Devfest 2022 GDG"
        },
        {
                src:COM,
                Vtyte:"Advertisement",
                title:"Coffee Machine Demo"
        },
        {
            src:APA,
            Vtyte:"ECommerce",
            title:"ACTIMAX Pants MASTER"
        },
        {
            src:PBCL,
            Vtyte:"Events",
            title:"PBCL"
        },
        
        {
                src:BBE,
                Vtyte:"Corporate_Videos",
                title:"Bharat Benz 100+ Bus Delivery"
        },
        {
            src:V29,
            Vtyte:"Advertisement",
            title:"Vivo V29e"
        },
        {
            src:KUM,
            Vtyte:"ECommerce",
            title:"The Indie Earth"
        },
        {
                src:FSB,
                Vtyte:"ECommerce",
                title:"FreeStyle - Sports Bra"
        },
        {
            src:OOB,
            Vtyte:"Advertisement",
            title:"One8-ONE BEAT ONE RULE"
        },
        {
            src:SHA,
            Vtyte:"Informative Videos",
            title:"Spardha School of Music"
        },
        
        
    ]
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
           
             <div className={style.subContaierSecond}  data-aos="fade-down" >
                <div className={style.subTitle} >SOME OF OUR BEST WORKS
                </div>   
                <div className={style.subHead}>

                    <div className={style.subHeadAction} onClick={() => 
                                displayType !== "Advertisement"? setDisplayType("Advertisement") : setDisplayType("ALL")}>ADVERTISEMENT 
                         ||
                    </div>
                     
                    
                    <div className={style.subHeadAction} onClick={() => 
                                displayType !== "Events"? setDisplayType("Events") : setDisplayType("ALL")}>EVENTS 
                         ||
                    </div>
                     
                    
                    <div className={style.subHeadAction} onClick={() => 
                                displayType !== "Corporate_Videos"? setDisplayType("Corporate_Videos") : setDisplayType("ALL")}>CORPORATE VIDEOS 
                         ||
                    </div>
                     
                    
                    <div className={style.subHeadAction} onClick={() => 
                                displayType !== "Informative Videos"? setDisplayType("Informative Videos") : setDisplayType("ALL")}>INFORMATIVE VIDEOS 
                         ||
                    </div>
                      
                    
                    <div className={style.subHeadAction} onClick={() => 
                                displayType !== "ECommerce"? setDisplayType("ECommerce") : setDisplayType("ALL")}>E-COMMERCE
                    </div>
                
                </div>   
                            {console.log(displayType)}
                <div className={style.Dis}>
                    <div className={style.DisOne}> 
                    {OurWorkDATAOne.map((el) =>(
                        <OurWorkCard 
                            key={el.key}
                            src={el.src}
                            title={el.title}
                            Vtype={el.Vtype}
                            displayType={displayType}
                        /> 
                ))}  
                  </div>
                  <div className={style.DisTwo}>   
                  {OurWorkDATATwo.map((el) =>(
                        <OurWorkCard 
                            key={el.key}
                            src={el.src}
                            title={el.title}
                            Vtype={el.Vtype}
                            displayType={displayType}
                        />
                ))}
                  </div>   
                  <div className={style.DisThree}> 
                  {OurWorkDATAThree.map((el) =>(
                        <OurWorkCard 
                            key={el.key}
                            src={el.src}
                            title={el.title}
                            Vtype={el.Vtype}
                            displayType={displayType}
                        />
                ))} 
                  </div>  
                  </div>  
             </div>   

         </div>   
        </>
    );
}
export default OurWork ;