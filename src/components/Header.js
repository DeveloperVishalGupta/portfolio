import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
    return (
        <>
            <div className="container-fluid px-0">
                <div className="themeBlueBg d-flex align-items-center">
                    <a href="./">
                        <div className="navyBorder Centerflex" style={{width: "80px", height: "80px"}}>
                            <h1 className='playfairFont mb-0 italicBold text-white'>V<span className='logoStyle'>G</span>
                            </h1>
                        </div>
                    </a>

                    <div className="d-md-block d-none menuWidth">
                        <ul className='HeaderMenu text-white d-flex justify-content-around list-unstyled mb-0 ms-auto w-75 f600 rubicFont'>
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
                    <div className="navyBorder Centerflex ms-auto" style={{width: "80px", height: "80px"}}>
                        {/*<h1 className='playfairFont mb-0 italicBold text-white'>V<span className='logoStyle'>G</span></h1>*/}
                        <div className="text-white">
                            <FontAwesomeIcon icon={props.cart} size='2xl'/>
                            <sup className="badge cartBadge">9</sup>
                        </div>
                    </div>
                    <div className="navyBorder Centerflex" style={{width: "80px", height: "80px"}}>
                        {/*<h1 className='playfairFont mb-0 italicBold text-white'>V<span className='logoStyle'>G</span></h1>*/}
                        <FontAwesomeIcon className='text-white' icon={faBars} size='2xl'/>
                    </div>

                </div>
            </div>
        </>
    )
} 