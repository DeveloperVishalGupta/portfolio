import React from "react";

// import Images
import aboutUsVishal from '../images/aboutUsVishal.png'

export default function AboutMe() {
return (
    <>
        <div className="container-fluid darknavyBg" >
            <div className="row">
                <div className="col-md-6">
                   <div className="">
                       <img src={aboutUsVishal} className='w-100' alt=""/>
                   </div>
                </div>
            </div>
        </div>
    </>
)
}