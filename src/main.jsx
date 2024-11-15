import React from "react";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import HomePage from './HomePage/Home'
import ErrorPage from './error'
import AboutPage from './AboutPage/About'
import BlogListPage from './blogPage/blogList'
import BlogPage from './blogPage/blogPage'
import ProjectsPage from './projectsPage/ProjectsPage';

// typing animation!!!

const myRouter = createBrowserRouter([
  {path:"/", element: <HomePage />, errorElement: <ErrorPage />},
  {path:"/about", element: <AboutPage />},
  {path:"/blogs", element: <BlogListPage />},
  {path:"/blogs/:blogID", element: <BlogPage />},
  {path:"/projects/:projectsCategory", element: <ProjectsPage />},
], {basename:import.meta.env.BASE_URL})

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={myRouter} />
      <ToastContainer /> {/* This is needed for react-toastify to work */}
  </StrictMode>,
)


// defining some standard variables:
export const backend_url = "http://localhost:8000/api"
