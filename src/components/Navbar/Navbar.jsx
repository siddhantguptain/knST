import React from "react";
import style from "./Navbar.module.css";

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import KnmLOGO from "../../img/KNM_LOGO.png";
const NAVBAR = () =>{
    return (
        <>
           <header className={style.navbar}>
                <div className={style.logo}>
                        <img src={KnmLOGO} alt="knmStudio" height={90}  />
                </div>
                <ul className={style.links}>
                    <li className={style.link}>Home</li>
                    <li className={style.link}>About Us</li>
                    <li className={style.link}>Services</li>
                    <li className={style.link}>Our Work</li>
                    <li className={style.link}>Blogs</li>
                    <li className={style.link}>Contact Us</li>
                </ul>
                <div className={style.actionBtn}>
                    Start a Project
                </div>

                <div className={style.toggleNav}>
                      {/* <CloseIcon />  */}
                      <MenuIcon />
                </div>

           </header>
        </>
    );
}
export default NAVBAR;
