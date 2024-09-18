import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

// import { BrowserRouter, Route, Router } from "react-router-dom";


export default function Header(props) {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    return (
        <>

            <div className="container-fluid px-0">
                <div className="themeBlueBg d-flex align-items-center justify-content-between">
                    <a href="./">
                        <div className="navyBorder Centerflex" style={{ width: "80px", height: "80px" }}>
                            <h1 className='playfairFont mb-0 italicBold text-white'>V<span className='logoStyle'>G</span>
                            </h1>
                        </div>
                    </a>

                    <div className={`${!mobileMenuVisible && 'd-none'} d-md-block  menuWidth`}>
                        <ul className='HeaderMenu text-white d-md-flex justify-content-around list-unstyled mb-0 ms-auto w-75 f600 rubicFont'>
                            <a href="./">
                                <li>HOME</li>
                            </a>
                            <a href="./">
                                <li>ABOUT</li>
                            </a>
                            <a href="./">
                                <li>PAGES</li>
                            </a>
                            <a href="./">
                                <li>BOLG</li>
                            </a>
                            <a href="./">
                                <li>CONTACT</li>
                            </a>
                        </ul>

                    </div>
                    <div
                        // onClick={() => { setMobileMenuVisible(!mobileMenuVisible) }}
                        className="navyBorder Centerflex d-md-none" style={{ width: "80px", height: "80px" }}>
                        {/* <h1 className='playfairFont mb-0 italicBold text-white'>V<span className='logoStyle'>G</span></h1> */}
                        <FontAwesomeIcon className='text-white' icon={faBars} size='2xl' />
                    </div>

                </div>
            </div >
        </>
    )
} 