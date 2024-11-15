import { Navigate } from "react-router-dom";


// if someone goes to a 404-page, they get redirected to home page
export default function ErrorPage(){
    return <Navigate to="/" />
}