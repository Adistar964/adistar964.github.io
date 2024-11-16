// this will be accessed from blogListPage

import Header from "../header/Header"
import Footer from "../Footer/Footer"
import { RecommendedPosts, sampleBlogs } from "./blogList"
import { backend_url, frontend_url } from "../constants"

import "./blogPage.css"

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingComponent from "../loading";
import { useMediaQuery } from "react-responsive"

export default function blogPage(props){
    
    const {blogID} = useParams();

    const [title,setTitle] = useState("")
    const [genre,setGenre] = useState("")
    const [imageFileName,setimageFileName] = useState("")
    const [content,setContent] = useState("")
    const [publishedDate,setPublishedDate] = useState(new Date())

    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()
    const isMobileorTablet = useMediaQuery({
        maxWidth:1224
    })

    useEffect(() => {
        setLoading(true);

        const url = `${backend_url}/getBlog/${blogID}/`
        fetch(url).then(data=>data.json())
        .then(data => {
            if(data.code=="success"){
                const blog = data.blog;
                setTitle(blog.title)
                setGenre(blog.genre)
                setimageFileName(blog.imageFileName)
                setContent(blog.content)
                const datee = new Date(blog.publishedDate)
                setPublishedDate(datee)
            }else if(data.code=="error"){
                navigate("/")
            }
            setLoading(false)
        }).catch(err => console.log(err))
        
    }, [blogID])

    if(loading){
        return <LoadingComponent />
    }

    else{
    return(
<>
        <Header />
        <br /> 
        <div className="d-flex justify-content-center">
            <div style={{marginLeft:"30px"}}>
                <p className="text-muted">
                    Published {publishedDate.toLocaleString("en-us",{month:"long"})} {publishedDate.getDate()}, {publishedDate.getFullYear()} as a <a href="">{genre} Post</a> 
                    {/* Above we used .toLocaleString insteaad of .getMonth to get full-month-name instead of just number */}
                    {/* ex: we get Febraury instead of number "2" and we get "Feb" if we set month-option above to "short" instead of "long" */}
                </p>
                <h2 style={{maxWidth:"850px",fontSize:isMobileorTablet ? "1.99rem" : "3.5rem"}} 
                className="display-4 text-left mb-2 blogPageTitle">
                    {title}
                </h2>
                <p>
                    -By Mohammed Abdullah Amaan
                    {/* avg. read speed is 1000 charachters per minute */}
                    <span className="text-muted">&nbsp;. {Math.floor(content.length/1000)} {Math.floor(content.length/1000) == 1 ? "min" : "mins"} read</span> 
                    {/* Math.floor was put so that we only get an integer starting from 1 and not like "0.44 or 2.23 mins read" */}
                    {/* We r also making sure that we dont use the plural "mins" when it is 1-min */}
                </p>
            </div>
        </div>  
        <div className="mb-3 mt-5" style={{marginLeft:isMobileorTablet ? "30px" :"150px",marginRight:isMobileorTablet ? "30px" :"150px"}}>
            <img decoding="async" src={`/${imageFileName}`} className="blogPostImage" />
        </div>
        {/* below we will have 2 sections and the middle will take more space */}
        <div className="mx-2 blogPage mt-5 d-flex h-100 flex-wrap">
            {!isMobileorTablet && <div style={{flex:0.5}}></div>}
            <div className="blogPostContent ml-4 mr-4" 
            dangerouslySetInnerHTML={{__html:content}} 
            // so that our html-string for the blog-content gets passed as actual HTML
            style={{flex:2.8}}>
            </div>
            <div className="" style={{flex:1.2}}>
                <div className="mt-5">
                    <RecommendedPosts posts={sampleBlogs} />
                </div>
            </div>
        </div>
        <br /><br />
        <Footer />
</>
    );}
}