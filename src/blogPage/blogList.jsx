import Header from "../header/Header"
import Footer from "../Footer/Footer"

import "./blogList.css"

import { FaShareNodes } from "react-icons/fa6";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { HiXMark } from "react-icons/hi2";
import { GrPowerReset } from "react-icons/gr";

import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import LoadingComponent from "../loading"
import { backend_url } from "../main";

// sample blogs, not from our db
export const sampleBlogs = [
    {title:"This is the title but gets very long that very long", genre:"Speculative", thumbnail:"/blogThumbnail.webp"},
    {title:"Something to learn" ,genre:"Tutorial", thumbnail:"/blogThumbnail1.webp"},
    {title:"Python 4 is Here! Better or Worse?",genre:"News",thumbnail:"/blogThumbnail2.webp"}
]

export default function BlogListPage(){

    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState([]) // this will have all our blogs in a list-form
    
    const [searchText, setSearchText] = useState(""); // the input-value from search bar!
    
    useEffect(() => {
        setLoading(true)

        const url = `${backend_url}/getBlogs/`
        let body;
        if(searchText === ""){
            body = { filters:{} } // we put filters blank cz we need all the results unfiltered
        }else{
            body = {filters:{ "$text": {"$search":searchText} }} // otherwise we put search-query in our filters
            // the above does a full-text-search from our titles 
            // note: u can only do this is u enabled it from backend using: collection.create_index([('your field', 'text')])
        }
        const requestParams = {
            method:"POST",
            headers:{"Content-type":"application/json"},
            body: JSON.stringify(body)
        }
        fetch(url, requestParams).then(data=>data.json())
        .then(data => {
            if(data.code=="success"){
                const blogsFromBackend = data.blogs;
                setBlogs(blogsFromBackend)
            }else if(data.code=="error"){
                window.open("https://abdullah.is-a.dev/#/") // any error, then we send user back to home page
            }
            setLoading(false)
        }).catch(err => console.log(err))

    }, [searchText])

    if(loading){
return <LoadingComponent />
    }
    else{
return (
<>
    <Header />
    <div className="gradient-line"></div>
    <br /> <br />
    <div className="d-flex flex-wrap">
        <div style={{flex:2}}>
            {blogs.map(blog => 
                <BlogCard {...blog} />
            )}
        </div>
        <div style={{flex:1}} className="d-flex justify-content-start flex-column">
            <div className="mt-4 mx-auto d-flex align-items-center">
                <form onSubmit={ e =>{
                    e.preventDefault();
                    const srchTxt = document.getElementById("searchInput").value
                    setSearchText(srchTxt)
                }} 
                className="form relative">
                    <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                        <IoIosSearch size={18} />
                    </button>
                    <input id="searchInput" 
                    className="input rounded-full px-8 py-3 border-2 focus:outline-none focus:border-red-300 placeholder-gray-400 transition-all duration-300 shadow-md" placeholder="Search Blogs..." type="text" />
                    <button type="reset" className="absolute right-3 -translate-y-1/2 top-1/2 p-1">
                        <HiXMark />
                    </button>
                </form>
                <button style={{width:"40px",height:"40px"}} 
                data-bs-toggle="tooltip" data-bs-placement="right" title="Reset Search"
                onClick={()=>window.location.reload()}
                className="d-flex justify-content-center align-items-center ml-4 rounded-circle btn btn-sm btn-outline-danger">
                    <GrPowerReset />
                </button>
            </div>
            <br />
            <RecommendedPosts />
        </div>
    </div>
    <br /><br /><br />
    <Footer />
</>
    );}
}

function BlogCard(props){
    const navigate = useNavigate()
    return (
    <div className="card mx-auto my-4" style={{maxWidth:"795px"}}>
        <img decoding="async" src={`/${props.imageFileName}`} width={795} height={400} 
        className="card-img-top blogCardImg1" alt="..." />
        <div className="card-body p-4">
            <p className="text-muted">{props.genre}</p>
            <h5 className="card-title blogPageTitle" style={{fontSize:"30px"}}>{props.title}</h5>
            <p className="card-text">
                Notion began without a data catalog. Our data grew organically and chaotically, stored mostly in unstructured formats like JSON. This approach was supported by tools like Amplitude, which facilitated rapid data integration and analysis without the need for strict data management practices. We prioritized speed in order to accommodate a diverse audience, from developers to data scientists to product managers.
            </p>
            <br />
            <hr />
            <div className="mt-3 d-flex justify-content-between align-items-center">
                <button onClick={()=>navigate(`/blogs/${props._id}`)} 
                className="Readbutton card-link blogPageTitle" style={{fontSize:"16px"}}>READ THIS</button>
                <button className="shareButton" 
                onClick={()=>navigator.share({title:"Abdullah's Blog-Post",url:`https://abdullah.is-a.dev/#/blogs/${props._id}`})}>
                    <FaShareNodes size={12} color="white" className="svgIcon"/>
                </button>
            </div>
        </div>
    </div>
    );
}

export function RecommendedPosts() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    
    const [recommendedBlogs, setRecommendedBlogs] = useState([])

    useEffect(() => {
        setLoading(true)
        const url = `${backend_url}/getBlogs/`
        const body = { filters:{recommended:true} } // we get recommended blogs thru filtering
        const requestParams = {
            method:"POST",
            headers:{"Content-type":"application/json"},
            body: JSON.stringify(body)
        }
        fetch(url, requestParams).then(data=>data.json())
        .then(data => {
            if(data.code=="success"){
                const blogsFromBackend = data.blogs;
                setRecommendedBlogs(blogsFromBackend)
                setLoading(false)
            }
        }).catch(err => console.log(err))


    }, [])

    if(loading){
        // below we are using a loading-card-like animation from tailwind-css
        return <div className="animate-pulse p-4 card mx-2">
            <h4 className="blogPageTitle" style={{fontSize:"19px"}}>
                Recommended Posts
            </h4>
            <br />
            <div className="d-flex gap-3">
                <div className="rounded-circle bg-secondary h-9 w-10"></div>
                <div className="rounded bg-secondary h-10 w-100"></div>
            </div>
            <br />
            <div className="d-flex gap-3">
                <div className="rounded-circle bg-secondary h-9 w-10"></div>
                <div className="rounded bg-secondary h-10 w-100"></div>
            </div>
            <br />
            <div className="d-flex gap-3">
                <div className="rounded-circle bg-secondary h-9 w-10"></div>
                <div className="rounded bg-secondary h-10 w-100"></div>
            </div>
        </div>
    }
    return (
            <div className="card p-3 mx-2 rounded-3 shadow-lg">
                <h4 className="blogPageTitle" style={{fontSize:"19px"}}>
                    Recommended Posts
                </h4>
                <br />
                {recommendedBlogs.map((recommendedBlog,postIndex) => 
                <>
                    <div onClick={()=>navigate(`/blogs/${recommendedBlog._id}`)} className="d-flex cursor-pointer">
                        <img decoding="async" src={`/${recommendedBlog.imageFileName}`} style={{width:"60px",height:"60px"}} className="rounded-circle" />                
                        <div className="ml-4">
                            <p style={{fontSize:"0.813rem"}} className="blogPageTitle">
                                {recommendedBlog.title}
                            </p>
                            <p className="text-muted" style={{fontSize:"1rem"}}>{recommendedBlog.genre}</p>
                        </div>
                    </div>
                    {postIndex !== recommendedBlogs.length-1 && <>
                        <br /> <hr />
                    </>} {/* dont put that hr for th last item */}
                    <br />
                </>
                )}
            </div>
    );
}

function dropDownBtn( {onClick, children}, ref ){
    return(
        <button onClick={onClick} 
        className="d-flex align-items-center gap-2 dropDownBtn rounded-pill px-3 py-2">
            {children}
            <IoIosArrowDown />
        </button>
    );
}