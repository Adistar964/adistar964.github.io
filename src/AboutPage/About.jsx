import React from "react";

import Header from "../header/Header";
import Footer from "../Footer/Footer"
import { ExploreProjects } from "../HomePage/Home"

import "./About.css"

import { FcMultipleDevices, FcInfo } from "react-icons/fc";
import { FaPython, FaC, FaGolang } from "react-icons/fa6";
import { SiDart, SiJavascript,SiKotlin } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

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
                    <h4 className="display-4 d-flex justify-content-center align-items-center gap-4">
                        <FcInfo />
                        Information
                    </h4>
                    <br />
                    <hr />
                    <p className="text-left mt-3 ml-5 mr-5" style={{fontSize:"1.2em"}}>
                    My name is Mohammed Abdullah Amaan and I am a software programmer currently pursuing my studies at the Arkansas State University. I have done programming in various different fields, but I have worked most prominently on web development and Artificial Intelligence.
                    I started Programming since I was 14 years old and Although I had initially started programming as a hobby, I went on to build some major projects single-handedly, including an E-commerce website with its mobile application, a face-detection app, block-games and many other programs. by the end of my class 10, I had developed an app  "YTD964" which gained around three thousand five hundred downloads in the "uptodown-app-store". Further, during my high school years, programming became my passion to an extent that I even started a coding channel in youtube with one of its videos hitting around ten thousand views.
                    By working on various real-time projects, I constantly look for opportunities to improve my skills.
                    </p>
                </div>
            </div>
            <div className="mt-5 mb-3 mx-5">
                <h4 className="display-4 d-flex justify-content-center align-items-center gap-4">
                <FcMultipleDevices />
                    Coding Skills
                </h4>
                <hr style={{marginBottom:"25px"}} className="mx-5 mt-3" />
                <h4 style={{fontSize:"30px"}}>Programming Languages</h4>
                <br />
                <div className="d-inline-flex gap-5 mt-1 flex-wrap">
                    {programmingLangs.map(programmingLang =>
                    <div className="project-card mx-auto onHoverOrangeBorder" style={{height:"80px",width:"110px"}}>
                        <div className="content text-center">
                            <programmingLang.icon size={40} className="mx-auto text-gray-600" />
                        </div>
                    </div>
                    )}
                </div>
                <h4 className="mt-5" style={{fontSize:"30px"}}>Front End</h4>
                <br />
                <div className="d-inline-flex gap-3 mt-1 flex-wrap">
                    {frontEndTools.map(frontEndTool =>
                    <div className="project-card card onHoverOrangeBorder" style={{height:"60px",width:"140px"}}>
                        <div className="content text-center">
                            <p style={{fontSize:"1.1em"}} className="blogPageTitle">{frontEndTool}</p>
                        </div>
                    </div>
                    )}
                </div>
                <h4 className="mt-4" style={{fontSize:"30px"}}>Back End</h4>
                <br />
                <div className="gap-3 d-inline-flex mt-1 flex-wrap justify-content-start">
                    {backEndTools.map(backEndTool =>
                    <div className="project-card mx-auto card onHoverOrangeBorder" style={{height:"60px",width:"140px"}}>
                        <div className="content text-center">
                            <p style={{fontSize:"1.1em"}} className="blogPageTitle">{backEndTool}</p>
                        </div>
                    </div>
                    )}
                </div>
                <h4 className="mt-4" style={{fontSize:"30px"}}>Databases</h4>
                <br />
                <div className="d-inline-flex gap-3 mt-1 flex-wrap">
                    {Databases.map(Database =>
                    <div className="project-card mx-auto card onHoverOrangeBorder" style={{height:"60px",width:"140px"}}>
                        <div className="content text-center">
                            <p style={{fontSize:"1.1em"}} className="blogPageTitle">{Database}</p>
                        </div>
                    </div>
                    )}
                </div>
                <h4 className="mt-4" style={{fontSize:"30px"}}>Statistical tools</h4>
                <br />
                <div className="d-inline-flex gap-3 mt-1 flex-wrap">
                    {statisticalTools.map(statisticalTool =>
                    <div className="project-card mx-auto card onHoverOrangeBorder" style={{height:"60px",width:"140px"}}>
                        <div className="content text-center">
                            <p style={{fontSize:"1.1em"}} className="blogPageTitle">{statisticalTool}</p>
                        </div>
                    </div>
                    )}
                </div>
                <h4 className="mt-4" style={{fontSize:"30px"}}>Miscellaneous</h4>
                <br />
                <div className="d-inline-flex gap-3 mt-1 flex-wrap">
                    {miscellaneous.map(msc =>
                    <div className="project-card mx-auto card onHoverOrangeBorder" style={{height:"60px",width:"140px"}}>
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