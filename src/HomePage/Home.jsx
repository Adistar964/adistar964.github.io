import React from "react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { useMediaQuery } from "react-responsive";

import "./home.css"
import YTPIC from "./ytProfile.jpg";  // Yes this is how you get the source of a local image!

import Header from "../header/Header";
import Footer from "../Footer/Footer"

import { FaGlobe, FaBrain, FaGithub } from "react-icons/fa6";
import { MdDevices, MdFolderCopy } from "react-icons/md";

import { TypeAnimation } from "react-type-animation";

const projectCategories = [
    {title: "Web Apps", icon:FaGlobe},
    {title: "Mobile & Desktop", icon:MdDevices},
    {title: "AI & Data", icon:FaBrain},
    {title: "Github Repos", icon:FaGithub}
    // {title: "Other", icon:MdFolderCopy},
]

export default function HomePage (){

    const [subCount, setSubCount] = useState("")
    
    const isMobileorTablet = useMediaQuery({
        maxWidth:1224
    })

    useEffect(() => {
        const api_key = "AIzaSyDHcJQTD_dFARr-YT7EL6KZr47J_bVTBns"
        const channel_id = "UCCQIkozPw9yhyOpI05Iye9w"
        fetch("https://www.googleapis.com/youtube/v3/channels?part=statistics&id="+channel_id+"&key="+api_key).then(data=>data.json())
        .then(data=> {
            const subscriberCount = data["items"][0].statistics.subscriberCount;
            setSubCount(subscriberCount)
        })
    }, [])

    return (
        <>
            <Header />
            <div className="gradient-line"></div>
            <div className="w-100 p-5 bg-dark text-light text-center">
                <h4 
                style={isMobileorTablet?{height:"50px"}:{}} 
                className="display-4 text-darkorange fw-bold fst-italic mb-2">
                    {/* Hello! This is Abdullah */}
                    <TypeAnimation sequence={[
                        "Hello!",800,
                        "This is Abdullah!",800,
                        "I am a University Student!",800,
                        "I am a Software Programmer!",800,
                    ]} 
                    repeat={Infinity}
                    />
                </h4>
            </div>
            <br />
            <div className="mb-5">
                <ExploreProjects />
                <br /><br /><br />
                <div className={isMobileorTablet ? "mx-3" : "mx-5"}>
                    <div className="d-flex justify-content-between mt-5 flex-wrap gap-4">
                        <div style={{maxWidth:"600px"}}>
                            <h4 className="display-5" style={isMobileorTablet ? {fontSize:"1.6em", fontWeight:"bold"} : {}}>
                                Connect with Discord!
                            </h4>
                            <hr style={{width:"100%", marginBottom:"25px"}} className="mt-3" />
                            <p style={{fontSize:isMobileorTablet ? 16 :24}}>
                                Join our community on the Discord platform to learn and share knowledge.
                                You could try hoping in to clear your doubts with fellow enthusiasts.
                                Joining this channel means upgrading your programming skills!
                            </p>
                        </div>
                        <div className="discordCard"><iframe className="mt-1" style={{zIndex:1, borderRadius:"10px"}} src="https://discord.com/widget?id=737935665240735786&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe></div>
                    </div>
                    <br />
                    <div className="mt-5">
                        <h4 className="display-5 ml-3" style={isMobileorTablet ? {fontSize:"1.6em", fontWeight:"bold"} : {}}>
                            Subscribe To Youtube Channel
                        </h4>
                        <hr style={{marginBottom:"25px"}} className="mx-auto mt-3" />
                        <div className="shadow-lg p-3 container-fluid ytCard">
                            {isMobileorTablet ? 
                            <>
                                <div className="d-flex justify-content-around">
                                    <div className="imageYT">
                                        <img src={YTPIC} alt="youtube channel logo" className="imageYT" /> {/* This is how u reference a local image! */}
                                    </div>
                                    <div className="d-flex flex-column gap-1">
                                        <h4 className="display-6 mb-1">ADISTAR 964</h4>
                                        <button className="Subscribebutton mr-3" onClick={()=> window.open("https://www.youtube.com/channel/UCCQIkozPw9yhyOpI05Iye9w?sub_confirmation=1", '_blank') }>
                                            <span class="icon"><svg fill="none" height="33" viewBox="0 0 120 120" width="33" xmlns="http://www.w3.org/2000/svg"><path d="m120 60c0 33.1371-26.8629 60-60 60s-60-26.8629-60-60 26.8629-60 60-60 60 26.8629 60 60z" fill="#cd201f"></path><path d="m25 49c0-7.732 6.268-14 14-14h42c7.732 0 14 6.268 14 14v22c0 7.732-6.268 14-14 14h-42c-7.732 0-14-6.268-14-14z" fill="#fff"></path><path d="m74 59.5-21 10.8253v-21.6506z" fill="#cd201f"></path></svg></span>
                                            <span class="text1">Subscribe</span>
                                            <span class="text2">{subCount}</span>
                                        </button>
                                    </div> 
                                </div>
                                <p>
                                Master programming with effective tips and beginner-friendly tutorials. Subscribe now for updates tailored to casual coders!
                                </p>
                            </>
                            :<div className="d-flex">
                            <div className="mx-3">
                                <div className="imageYT">
                                    <img src={YTPIC} alt="youtube channel logo" className="imageYT" /> {/* This is how u reference a local image! */}
                                </div>
                            </div>
                            <div>
                                <div className="d-flex justify-content-between">
                                    <h4 className="display-6">ADISTAR 964</h4>
                                    <button className="Subscribebutton mr-3" onClick={()=> window.open("https://www.youtube.com/channel/UCCQIkozPw9yhyOpI05Iye9w?sub_confirmation=1", '_blank') }>
                                        <span class="icon"><svg fill="none" height="33" viewBox="0 0 120 120" width="33" xmlns="http://www.w3.org/2000/svg"><path d="m120 60c0 33.1371-26.8629 60-60 60s-60-26.8629-60-60 26.8629-60 60-60 60 26.8629 60 60z" fill="#cd201f"></path><path d="m25 49c0-7.732 6.268-14 14-14h42c7.732 0 14 6.268 14 14v22c0 7.732-6.268 14-14 14h-42c-7.732 0-14-6.268-14-14z" fill="#fff"></path><path d="m74 59.5-21 10.8253v-21.6506z" fill="#cd201f"></path></svg></span>
                                        <span class="text1">Subscribe</span>
                                        <span class="text2">{subCount}</span>
                                    </button>
                                </div>
                                <p>
                                This Youtube channel will help you master your programming skills through project-based learning and effective tips and techniques. If you want to get tutorials tailored for beginners and causual coders, then subscribe right now to receive updates for such tutorials.
                                </p>
                            </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export function ExploreProjects(){

    const navigate = useNavigate()

    const isMobileorTablet = useMediaQuery({
        maxWidth:1224
    })

    return(
<>
    <div style={isMobileorTablet ? {justifyContent:"center"} : {justifyContent:"space-between"}} 
    className="d-flex mx-2 align-items-center">
        {!isMobileorTablet && <><div></div> <div></div></>}
        <h4 className={isMobileorTablet ? "display-6" :"display-5"}
        style={isMobileorTablet ? {fontSize:"1.9em", fontWeight:"bold"} : {}}>
            Explore My Projects
        </h4>
        {!isMobileorTablet &&
        <button onClick={() => navigate(`/projects/All Projects`)} 
        href="#" className="exploreButton" style={{"--clr": '#ff0000'}}>
            <span className="button__icon-wrapper">
            <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width={10}>
                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
            </svg>
            <svg viewBox="0 0 14 15" fill="none" width={10} xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
            </svg>
            </span>
            Explore All
        </button>}
    </div>
    <hr style={{width:"100%", marginBottom:"25px"}} className="mx-auto mt-3" />
    <div className="d-flex flex-wrap justify-content-center gap-5 mt-1 mx-2">
        {projectCategories.map(projectCategory => 
        <div className="project-card" onClick={() => {
            if(projectCategory.title === "Github Repos"){
                window.open("https://github.com/Adistar964","_blank")
            }else{
                navigate(`/projects/${projectCategory.title}`)
            }
            }}>
            <div className="bg" />
            <div className="blob" />
            <div className="content text-center">
                <projectCategory.icon size={60} className="mx-auto" />
                <br />
                <p>{projectCategory.title}</p>
            </div>
        </div>
        )}
    </div>
    {isMobileorTablet &&
    <div className="text-center mt-5">
        <button onClick={() => navigate(`/projects/All Projects`)}
        href="#" className="exploreButton" style={{"--clr": '#ff0000'}}>
            <span className="button__icon-wrapper">
            <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width={10}>
                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
            </svg>
            <svg viewBox="0 0 14 15" fill="none" width={10} xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
            </svg>
            </span>
            Explore All
        </button>
    </div>}
</>
    );
}
