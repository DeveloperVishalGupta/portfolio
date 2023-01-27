import React from "react";

// import Images
import aboutUsVishal from '../images/aboutUsVishal.png'

export default function AboutMe() {
return (
    <>
        <div className="container-fluid darknavyBg" >
            <div className="align-items-end py-5 row">
                <div className="col-md-6">
                   <div className="text-center">
                       <img src={aboutUsVishal} className='w-75' alt=""/>
                   </div>
                </div>
                <div className="col-md-6">
                    <div className="text-white playfairFont"   >
                        <h5>About Me -</h5>
                        <h1 style={{fontSize: '3.5rem'}} className='DeveloperName'><b>Hello! I'm Vishal Gupta</b></h1>
                        <h1>Every great design begin with an even better story</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ips um is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here making</p>

                    </div>
                </div>
            </div>
        </div>
    </>
)
}