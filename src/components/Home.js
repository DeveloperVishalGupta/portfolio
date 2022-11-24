import React from "react";
import SideSocialNavigator from "./SideSocialNavigator";
// import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Home(props) {
    return (
        <>
            <div className="container-fluid px-0">
                <div className="d-flex" style={{borderBottom:'2px solid var(--themeBlue)'}}>
                    <SideSocialNavigator/>
                    <div className=" w-100 " >
                        <div className="row mx-0 darknavyBg h-100 pb-4 position-relative align-items-center">

                            <div className="greenStrip position-absolute w-100 h-100" style={{top: 0}}>

                            </div>

                            <div className="col-md-7 text-white playfairFont">
                                <h1 style={{fontSize: '2.3rem'}} className='greenColor'>--Hello Everyone</h1>
                                <h1 style={{fontSize: '4rem'}}><b>I'm Vishal Gupta</b></h1>
                                <h1 style={{fontSize: '4.5rem'}} className='greenColor'>Web Developer</h1>
                            </div>
                            <div className="col-md-5 ">
                                <div className="position-relative text-center text-lg-start">
                                    <img src={props.VG} className='' alt=""/>
                                    <div className="TotalProject bg-white position-absolute px-3 py-3 rounded rubicFont"
                                         style={{left: '-42%', bottom: '7%'}}>
                                        <div className="position-absolute" style={{left: '115px', top:'44px'}}>
                                            <FontAwesomeIcon className='greenColor' icon={props.circelCheck} size='xl'/>
                                        </div>
                                        <h6>TOTAL PROJECT</h6>
                                        <h5>20+ Done</h5>
                                        <p className='latoFont mb-0'>LAST WEEK <span
                                            className='greenColor'><b>37</b></span> WORK DONE</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="d-flex">*/}
                {/*    */}
                {/*    <div className="">*/}
                {/*        <div className="navyBg">*/}
                {/*            <div className="row mx-0 w-100 ">*/}
                {/*                <div className="col-md-4"></div>*/}
                {/*                <div className="col-md-8">*/}
                {/*                    <div className="">*/}
                {/*                        <img src={props.greenStrip} className='w-100' alt=""/>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-md-6 playfairFont ">*/}
                {/*                <div className="">*/}
                {/*                    */}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="col-md-6">*/}
                {/*                <div className="">*/}
                {/*                    <img src="" alt=""/>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}


                {/*</div>*/}

            </div>

        </>
    )
}