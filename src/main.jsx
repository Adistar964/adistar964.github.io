import React from "react";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, createHashRouter,RouterProvider } from "react-router-dom"

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import HomePage from './HomePage/Home'
import ErrorPage from './error'
import AboutPage from './AboutPage/About'
import BlogListPage from './blogPage/blogList'
import BlogPage from './blogPage/blogPage'
import ProjectsPage from './projectsPage/ProjectsPage';

// typing animation!!!

// we r not using createBrowserRouter as it doesnt work good with github-pages
// instead we use createHashRouter
const myRouter = createHashRouter([
  {path:"/", element: <HomePage />, errorElement: <ErrorPage />},
  {path:"/about", element: <AboutPage />},
  {path:"/blogs", element: <BlogListPage />},
  {path:"/blogs/:blogID", element: <BlogPage />},
  {path:"/projects/:projectsCategory", element: <ProjectsPage />},
], { // this object is added to ignore few warnings
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
    v7_startTransition: true,
    }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={myRouter} 
      future={{v7_startTransition:true}}/> {/* this future param was added to ignore few warnings */}
      <ToastContainer /> {/* This is needed for react-toastify to work */}
  </StrictMode>,
)
