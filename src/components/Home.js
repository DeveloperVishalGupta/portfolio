import React from "react";
import SideSocialNavigator from "./SideSocialNavigator";
import VishalGupta from '../images/fullImage.png';

export default function Home() {
    return (
        <>
            <div className="container-fluid px-0  introSection" >
                <div className="d-flex h-100" style={{ borderBottom: '2px solid var(--themeBlue)' }}>
                    <SideSocialNavigator />
                    <div className="w-100 bg-info " >
                        <div className="row mx-0 darknavyBg h-100 position-relative align-items-center ">
                            <div className="align-items-center col-12 col-md-6 d-flex nameIntro justify-content-center playfairFont text-white">
                                <div>
                                    <h1 style={{ fontSize: '2.3rem' }} className='greenColor HelloEveryOne'>--Hello Everyone</h1>
                                    <h1 style={{ fontSize: '4rem' }} className='DeveloperName'><b>I'm Vishal Gupta</b></h1>
                                    <h1 style={{ fontSize: '4.5rem' }} className='greenColor Degination'>Web Developer</h1>
                                </div>
                            </div>
                            <div className="col-md-6 col-12" style={{ height: '68%' }}>
                                <div className="position-absolute bottom-0 bottom-0 text-center text-lg-start">
                                    <img src={VishalGupta} className='w-100 h-100 selfImage' alt="DeveloperVishalGupta" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}