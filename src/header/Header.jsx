
import { IoHomeOutline,IoPersonOutline, IoLinkOutline, IoNewspaperOutline } from "react-icons/io5";
import "./Header.css"
import { useNavigate } from "react-router-dom";

import { useMediaQuery } from  "react-responsive";
import { useEffect } from "react";

export default function Header () {
    const navigate = useNavigate(); // used for navigating to other pages

    // the below will help us to make our site reponsive
    // it will let us know if the device used is a mobile/tablet
    const isMobileorTablet = useMediaQuery({
      query: "(max-width:1224px)"
    })
    
    useEffect(() => {

    })

    return <div style={{backgroundColor:"azure"}}>
    <div className="border pt-2 pb-1 border-gray-300 flex shadow-xl rounded-md justify-content-center">
      <div className="group relative px-4 cursor-pointer" onClick={()=>navigate("/")}>
        <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
            <IoHomeOutline size={22} />
        </div>
        <span className="absolute -top-8 left-[50%] -translate-y-[-180%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
          Home
        </span>
      </div>
      <div className="group relative px-4 cursor-pointer" onClick={()=>navigate("/about")}>
        <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500"> 
            <IoPersonOutline size={22} />
        </div>
        <span className="absolute -top-8 left-[50%] -translate-y-[-180%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
          About
        </span>
      </div>
      <div className="group relative px-4 cursor-pointer" onClick={()=>navigate("/blogs")}>
        <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
            <IoNewspaperOutline size={22} />
        </div>
        <span className="absolute -top-8 left-[50%] -translate-y-[-180%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
          Blogs
        </span>
      </div>
      {!isMobileorTablet&&
      <div className="group relative px-4 cursor-pointer" onClick={()=>window.location.href="#footer"}>
        <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500"> 
            <IoLinkOutline size={24} />
        </div>
        <span className="absolute -top-8 left-[50%] -translate-y-[-180%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
          Links
        </span>
      </div>}
      {isMobileorTablet ? 
          <div className="align-self-center ml-auto mr-2">
            <a href="/cv.pdf" target="_blank" className="btn btn-sm btn-danger rounded-4 rounded-5 btn-theme h-auto p-2">
                Download CV
            </a>
          </div>
      :<div className="CVButton ml-auto">
          <a href="/cv.pdf" target="_blank" className="anchor">
              <span>Download CV</span>
          </a>
      </div>}
    </div>
  </div>
}