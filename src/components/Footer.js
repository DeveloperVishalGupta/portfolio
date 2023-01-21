import React from "react";

// import images
import bottomRound from '../images/bottomRound.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopyright, faChevronUp} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {

    return (
        <>
            <div className="container-fluid darknavyBg position-relative">
                <div className="align-items-end mx-0 py-4 row">
                    <div className="col-12">
                        <a href="./">
                            <h1 className='playfairFont mb-0 italicBold text-white text-center'
                                style={{fontSize: '3rem'}}> V<span className='logoStyle'>G</span>
                            </h1>
                        </a>

                    </div>
                    <div className="col-md-4">
                        <div className="">
                            <h6><span className='greenColor'>Phone : </span> <a className='text-white' href="tel:9320206598">9320206598</a></h6>
                            <h6><span className='greenColor'>Email : </span> <a className='text-white' href="mailto:vishalguptaramasare@gmail.com">vishalguptaramasare@gmail.com</a></h6>
                            <h6><span className='greenColor'>LinkedIn : </span> <a className='text-white' href="https://www.linkedin.com/in/vishal2210/">linkedin.com/in/vishal2210/</a></h6>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="">
                            <h6 className='text-white'>“Design is not just what it looks like and feels like. Design is how it works.”</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className=" text-white text-end">
                            <h6><FontAwesomeIcon icon={faCopyright} className='me-1'/>2022 <span> V<span className='greenColor'>G</span></span></h6>
                            <h6>Made with Love by <span className='greenColor'>Vishal Gupta</span></h6>
                            <h6>Powered by <span className='greenColor'>VG</span></h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}