import React from "react";
import './AboutMe.css';

const ABOUT = () =>{
    return(
        <>
             <header id="dsn_header" class="dsn-header-animation header-normal">
        <div class="background-overlay bg-pattern p-absolute left-0 top-0 w-100 h-100"></div>

        <div class="entry-header p-relative over-hidden">

            <div id="hero_content"
                 class="d-flex p-relative h-100 dsn-hero-parallax-title container align-items-center pb-section ">
                <div class="content p-relative ">
                    <div class="intro-project w-100">
                        <div class="intro-title ">

                            <div id="hero_title" class="mt-20">
                                <h1 class="title text-upper">Elevating Your Vision with<br />Proficient Video Production</h1>
                            </div>
                            <p class="mt-20 max-w570">
                                Searching for a partner to make your online presence remarkable? Look no further. Our team can elevate your business to new heights.
                            </p>
                            <div class="dsn-def-btn dsn-hover-icon dsn-icon-heading-color mt-20 d-flex">
                                <a class="dsn-btn dsn-border border-color-default  background-section effect-ajax has-icon-left"
                                   href="contact.html" data-dsn-text="Contact Us">
                                    <span class="dsn-icon dsn-bg-before btn-icon-left heading-color z-index-1">
                                        <i class="fas fa-angle-right" aria-hidden="true"></i>
                                    </span>
                                    <span class="title-btn p-relative  z-index-1 ">Get Started Now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </header>  
        </>
    );
}
export default ABOUT;