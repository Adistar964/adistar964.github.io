import React from "react";

import "./Footer.css"

import { FaTwitter, FaGithub, FaLinkedinIn, FaFacebook, FaYoutube } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export default function LinksPage(){
    return(
<>
<div className="gradient-line"></div>
<div className="bg-dark text-light p-3 pb-4" id="footer">
    <h4 
    style={{fontFamily:"Lucida Handwriting"}} 
    className="display-5 mb-2 mt-4 text-center text-darkorange display-4 fw-bold fst-italic">
        Quick Links
    </h4>
    <div className="social-links">
        <div className="social-btn flex-center" onClick={()=>window.open("https://x.com/Mo_Abdullah_Am","_blank")}>
            <FaTwitter size={24} color="#1DA1F2" />
            <span>@Mo_Abdullah_Am</span>
        </div>
        <div className="social-btn flex-center" onClick={()=>window.open("https://www.linkedin.com/in/mohammed-abdullah-amaan-60b741322","_blank")}>
            <FaLinkedinIn size={24} color="#0077B5" />
            <span>Abdullah</span>
        </div>
        <div className="social-btn flex-center" onClick={()=>window.open("https://github.com/Adistar964","_blank")}>
            <FaGithub size={24} />
            <span>@adistar964</span>
        </div>
        <div className="social-btn flex-center" onClick={()=>window.open("https://www.facebook.com/profile.php?id=100052357003966","_blank")}>
            <FaFacebook size={24} color="#1877F2" />
            <span>Abdullah</span>
        </div>
        <div className="social-btn flex-center" onClick={()=>window.open("https://www.youtube.com/channel/UCCQIkozPw9yhyOpI05Iye9w","_blank")}>
            <FaYoutube size={24} color="#FF0000" />
            <span>@adistar964</span>
        </div>
        <div className="social-btn flex-center" onClick={()=>window.open("mailto:adistar964@gmail.com")}>
            <IoIosMail size={25} color  ="green" />
            <span>adistar964@gmail.com</span>
        </div>
    </div>
</div>
</>
    );
}