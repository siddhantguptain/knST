import React, {useState} from "react";
import style from "./Navbar.module.css";

import { Link } from "react-router-dom";
// import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import KnmLOGO from "../../img/KNM_LOGO.png";
const NAVBAR = () =>{


    // Bg-Color
    const [bgColor , setBgColor] = useState(false);
    const changeBgColor = ()=>{
        if (window.scrollY  >= 90) {
            setBgColor(true);
        }else{
            setBgColor(false);
        }
    }
    window.addEventListener('scroll' , changeBgColor);

    return (
        <>
           <header className={bgColor ? `${style.headerBg}` : ''}>
            <div className={style.navbar} >
                <div className={style.logo}>
                        <img src={KnmLOGO} alt="knmStudio" height={90}  />
                </div>
                <ul className={style.links}>
                    <li className={style.link}><Link to="/">Home</Link></li>
                    <li className={style.link}><Link to="/about-us">About Us</Link></li>
                    <li className={style.link}><Link to="/services">Services</Link></li>
                    <li className={style.link}><Link to="/our-work">Our Work</Link></li>
                    <li className={style.link}><Link to="/blogs">Blogs</Link></li>
                    <li className={style.link}><Link to="/contact-us">Contact Us</Link></li>
                </ul>
                <div className={style.actionBtn}>
                    Start a Project
                </div>

                <div className={style.toggleNav}>
                      {/* <CloseIcon />  */}
                      <MenuIcon />
                </div>
            </div>   
                {/* DropDown */}
                <div className={style.dropDown}>
                    <li className={style.link}>Home</li>
                    <li className={style.link}>About Us</li>
                    <li className={style.link}>Services</li>
                    <li className={style.link}>Our Work</li>
                    <li className={style.link}>Blogs</li>
                    <li className={style.link}>Contact Us</li>
                    <li className={style.link}>  <div className={style.actionBtn}>
                    Start a Project
                     </div></li>
                </div>
           </header>
        </>
    );
}
export default NAVBAR;
