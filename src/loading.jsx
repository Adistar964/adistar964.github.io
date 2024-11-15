
// this file contains the loading component

import Header from "./header/Header";
import Footer from "./Footer/Footer"

import BeatLoader from "react-spinners/BeatLoader"

export default function LoadingComponent(){
    return (
<div className="d-flex flex-column" style={{height:"100vh"}}>
        <Header />
        <div
        className="w-100 mt-5 d-flex justify-content-center">
            <BeatLoader 
            color="darkorange"
            // loading={true}
            size={36}
            />
        </div>
        <p className="text-muted text-center mt-2">Give us a moment !</p>
        <div style={{width:"100%", marginTop:"auto"}}>
            <Footer />
        </div>
</div>
    );
}