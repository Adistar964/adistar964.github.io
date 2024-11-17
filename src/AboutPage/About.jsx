import React from "react";

import Header from "../header/Header";
import Footer from "../Footer/Footer"
import { ExploreProjects } from "../HomePage/Home"

import "./About.css"

import { FcMultipleDevices, FcInfo } from "react-icons/fc";
import { FaPython, FaC, FaGolang } from "react-icons/fa6";
import { SiDart, SiJavascript,SiKotlin } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { useMediaQuery } from "react-responsive";

const programmingLangs = [
    {language: "Python", icon:FaPython},
    {language: "JavaScript", icon:SiJavascript},
    {language: "Dart", icon:SiDart},
    {language: "C", icon:FaC},
    {language:"C++", icon:TbBrandCpp},
    {language:"Go", icon:FaGolang},
    {language:"Kotlin", icon:SiKotlin},
]

const frontEndTools = [
    "HTML", "CSS", "JavaScript", "JQuery", "ReactJS", "React-Native",
    "Flutter", "Jinja2"
]

const backEndTools = [
    "Django","Flask","NodeJS","Python","Streamlit",
    "ExpressJS"
]
const Databases = [
    "MongoDB","MYSQL", "PostgreSQL", "SQLite"
]
const statisticalTools = [
    "Pandas", "Matplotlib", "CSV"
]
const miscellaneous = [
    "Firebase", "Git", "OpenCV", "MediaPipe", "Ollama", "PyAutoGUI"
]

export default function AboutPage(){

    const isMobileorTablet = useMediaQuery({
        maxWidth:1224
    })

    return(
<>
    <Header />
    <div className="gradient-line"></div>
    <div className="aboutPage">
        <div className="mb-5">
                {/* <div className="w-100 p-3 bg-dark text-light text-center">
                    <h4 className="display-4 text-darkorange fw-bold fst-italic">
                        About Me
                    </h4>
                </div> */}
            <br />
            <div>
                <div className="mr-3 ml-3 mx-5" style={{backgroundColor:"rgba(255, 255, 255, .95)"}}>
                    <h4 style={isMobileorTablet ? {fontWeight:"bold"} : {}} 
                    className="display-4 d-flex justify-content-center align-items-center gap-4">
                        <FcInfo />
                        Information
                    </h4>
                    <br />
                    <hr />
                    <p className={`text-left mt-3 ${isMobileorTablet ? "mx-1" :"mx-5"}`} style={{fontSize:"1.2em"}}>
                        {isMobileorTablet ? 
                        `
                        My name is Mohammed Abdullah Amaan and I am a software programmer currently pursuing my studies at the Arkansas State University. I have done software development in various different fields like web development and Artificial Intelligence.
                        ` : 
                        `
                    My name is Mohammed Abdullah Amaan and I am a software programmer currently pursuing my studies at the Arkansas State University. I have done programming in various different fields, but I have worked most prominently on web development and Artificial Intelligence.
                    I started Programming since I was 14 years old and Although I had initially started programming as a hobby, I went on to build some major projects single-handedly, including an E-commerce website with its mobile application, a face-detection app, block-games and many other programs. by the end of my class 10, I had developed an app  "YTD964" which gained around three thousand five hundred downloads in the "uptodown-app-store". Further, during my high school years, programming became my passion to an extent that I even started a coding channel in youtube with one of its videos hitting around ten thousand views.
                    By working on various real-time projects, I constantly look for opportunities to improve my skills.
                        `
                        }
                    </p>
                </div>
            </div>
            <div className="mt-5 mb-3 mx-5">
                <h4 style={isMobileorTablet ? {fontWeight:"bold"} : {}} 
                className="display-4 d-flex justify-content-center align-items-center gap-4">
                <FcMultipleDevices />
                    Coding Skills
                </h4>
                <hr style={{marginBottom:"25px"}} className="mx-5 mt-3" />
                <h4 style={{fontSize:"20px"}}>Programming Languages</h4>
                <br />
                <div className={`d-inline-flex ${isMobileorTablet ? "gap-2" :"gap-5"} mt-1 flex-wrap`}>
                    {programmingLangs.map((programmingLang,idx,_) =>
                    <div key={idx} 
                    className={`project-card onHoverOrangeBorder ${isMobileorTablet && "card"}`} style={{height:"80px",width:isMobileorTablet ? "99px" :"110px"}}>
                        <div className="content text-center">
                            <programmingLang.icon size={40} className="mx-auto text-gray-600" />
                        </div>
                    </div>
                    )}
                </div>
                <h4 className="mt-5" style={{fontSize:"20px"}}>Front End</h4>
                <br />
                <div className="d-inline-flex gap-3 mt-1 flex-wrap">
                    {frontEndTools.map((frontEndTool,idx,_) =>
                    <div key={idx} 
                    className="project-card card onHoverOrangeBorder" style={{height:"60px",width:"140px"}}>
                        <div className="content text-center">
                            <p style={{fontSize:"1.1em"}} className="blogPageTitle">{frontEndTool}</p>
                        </div>
                    </div>
                    )}
                </div>
                <h4 className="mt-4" style={{fontSize:"20px"}}>Back End</h4>
                <br />
                <div className="gap-3 d-inline-flex mt-1 flex-wrap justify-content-start">
                    {backEndTools.map((backEndTool,idx,_) =>
                    <div key={idx} 
                    className="project-card card onHoverOrangeBorder" style={{height:"60px",width:"140px"}}>
                        <div className="content text-center">
                            <p style={{fontSize:"1.1em"}} className="blogPageTitle">{backEndTool}</p>
                        </div>
                    </div>
                    )}
                </div>
                <h4 className="mt-4" style={{fontSize:"20px"}}>Databases</h4>
                <br />
                <div className="d-inline-flex gap-3 mt-1 flex-wrap">
                    {Databases.map((Database,idx,_) =>
                    <div key={idx} 
                    className="project-card card onHoverOrangeBorder" style={{height:"60px",width:"140px"}}>
                        <div className="content text-center">
                            <p style={{fontSize:"1.1em"}} className="blogPageTitle">{Database}</p>
                        </div>
                    </div>
                    )}
                </div>
                <h4 className="mt-4" style={{fontSize:"20px"}}>Statistical tools</h4>
                <br />
                <div className="d-inline-flex gap-3 mt-1 flex-wrap">
                    {statisticalTools.map((statisticalTool,idx,_) =>
                    <div key={idx} 
                    className="project-card card onHoverOrangeBorder" style={{height:"60px",width:"140px"}}>
                        <div className="content text-center">
                            <p style={{fontSize:"1.1em"}} className="blogPageTitle">{statisticalTool}</p>
                        </div>
                    </div>
                    )}
                </div>
                <h4 className="mt-4" style={{fontSize:"20px"}}>Miscellaneous</h4>
                <br />
                <div className="d-inline-flex gap-3 mt-1 flex-wrap">
                    {miscellaneous.map((msc,idx,_) =>
                    <div key={idx} 
                    className="project-card card onHoverOrangeBorder" style={{height:"60px",width:"140px"}}>
                        <div className="content text-center">
                            <p style={{fontSize:"1.1em"}} className="blogPageTitle">{msc}</p>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
        <br /><br />
        <ExploreProjects />
        <br /> <br /> <br /> <br />
    </div>
    <Footer />
</>
    );
}