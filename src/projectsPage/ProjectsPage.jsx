
// This webpage displays my projects

import Header from "../header/Header"
import Footer from "../Footer/Footer"
import LoadingComponent from "../loading"
import { backend_url } from "../main"

import "./ProjectsPage.css"

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { FaExternalLinkAlt } from "react-icons/fa";

// below are sampleProjects, not real ones from mongodb
const sampleProjects = [
    {title:"Yt Blogger",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sequi sapiente alias modi provident vel mollitia optio commodi ab totam eum ea rerum possimus voluptate corporis culpa, reprehenderit repudiandae quos.",
    imageFileName:"samplePic.jpg", // this is there in our public folder 
    tags:["Python","Dart","JavaScript","React","Flutter","MongoDB","Firebase","Stripe"],
    link: "http://localhost:5173"},
    {title:"Block Game",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sequi sapiente alias modi provident vel mollitia optio commodi ab totam eum ea rerum possimus voluptate corporis culpa, reprehenderit repudiandae quos.",
        imageFileName:"samplePic.jpg", // this is there in our public folder 
        tags:["Python","Dart","JavaScript"],
        link: "http://localhost:5173"},
    {title:"Code Runner",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sequi sapiente alias modi provident vel mollitia optio commodi ab totam eum ea rerum possimus voluptate corporis culpa, reprehenderit repudiandae quos.",
        imageFileName:"samplePic.jpg", // this is there in our public folder 
        tags:["Python","pyautogui"],
        link: "http://localhost:5173"},
    {title:"Ecommerce",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sequi sapiente alias modi provident vel mollitia optio commodi ab totam eum ea rerum possimus voluptate corporis culpa, reprehenderit repudiandae quos.",
        imageFileName:"samplePic.jpg", // this is there in our public folder 
        tags:["Python","Dart","JavaScript","somehing","consder","API"],
        link: "http://localhost:5173"},
    {title:"LT installer",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sequi sapiente alias modi provident vel mollitia optio commodi ab totam eum ea rerum possimus voluptate corporis culpa, reprehenderit repudiandae quos.",
        imageFileName:"samplePic.jpg", // this is there in our public folder 
        tags:["Python","Dart","JavaScript","somehing","consder","API"],
        link: "http://localhost:5173"},
    {title:"Something project",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sequi sapiente alias modi provident vel mollitia optio commodi ab totam eum ea rerum possimus voluptate corporis culpa, reprehenderit repudiandae quos.",
        imageFileName:"samplePic.jpg", // this is there in our public folder 
        tags:["Python","Dart"],
        link: "http://localhost:5173"},
    {title:"Something project 2",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sequi sapiente alias modi provident vel mollitia optio commodi ab totam eum ea rerum possimus voluptate corporis culpa, reprehenderit repudiandae quos.",
        imageFileName:"samplePic.jpg", // this is there in our public folder 
        tags:["Python","Dart"],
        link: "http://localhost:5173"},
    ]

export default function ProjectsPage(){
    
    const {projectsCategory} = useParams() //  we'll get the category of the projects we will display
    // example: Python, javaScript are some categories
    const [projects,setProjects] = useState([])

    const [loading,setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)

        const url = `${backend_url}/getProjects/`
        let body;
        if (projectsCategory=="All Projects"){
            body = { filters:{} }
        }else{
            body = { filters:{category:projectsCategory} }
        }
        const requestParams = {
            method:"POST",
            headers:{"Content-type":"application/json"},
            body: JSON.stringify(body)
        }
        fetch(url, requestParams).then(data=>data.json())
        .then(data => {
            if(data.code=="success"){
                const projectsFromBackend = data.projects;
                setProjects(projectsFromBackend)
                setLoading(false)
                if(data.projects.length === 0){
                    window.location.href="https://abdullah.is-a.dev"
                }
            }else{
                window.location.href="https://abdullah.is-a.dev"
            }
        }).catch(err => {console.log(err);window.location.href="https://abdullah.is-a.dev"})

    }, [projectsCategory])

    if(loading){
        return <LoadingComponent />
    }
    else{
    return(
<>
        <Header />
        <div className="gradient-line"></div>
        <div className="mt-5 mb-5 mx-2">
            <h6 className="display-4 text-center fw-light">
                {projectsCategory}
            </h6>
            <hr className="mx-auto w-80 bg-danger" />
            <br /><br />
            <div className="mx-4">
                <div className="d-flex align-items-stretch flex-wrap gap-2 gap-y-4 justify-content-center">
                    {projects.map(project =>
                        <ProjectCardComponent {...project} />
                    )}
                </div>
            </div>
        </div>
        <Footer />
        {/* 549 × 366 px or 1200x720 */}
</>
    );
}

function ProjectCardComponent(props){
    return( 
    <div key={props._id} 
    className="card shadow-md ProjectCardComponent p-4">
        {/* We'll add the project-images later in the future */}
        {/* <img src="/blogThumbnail1.webp" alt="project image" className="card-img-top mb-4" /> */}
        <div className="d-flex justify-content-between">
            <h4 style={{fontSize:"25px",maxWidth:"600px"}}
            className="blogPageTitle">
                {props.title}
            </h4>
            <a href={props.link} 
            target="_blank"
            className="btn openLinkBtn">
                <FaExternalLinkAlt />
            </a>
        </div>
        <div className="d-flex py-2 gap-2 flex-wrap mx-1">
            {props.tags.map((tag,idxt,_) =>
                <div key={idxt} 
                className="tag badge bg-secondary text-light hover:scale-110">{tag}</div>
            )}
        </div>
        <br />
        <p className="mx-1">{props.content}</p>
    </div>
    )}
}