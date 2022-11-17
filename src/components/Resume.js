import React from "react";
import Table from 'react-bootstrap/Table';

export default function Resume(props) {
    const post = [{year:2022, designnation:'Web Developer', Company:'GBTech'},
        {year:2021, designnation:'Jr. Web Developer', Company:'GBTech'},{year:2022, designnation:'Web Developer', Company:'GBTech'},{year:2022, designnation:'Web Developer', Company:'GBTech'},{year:2022, designnation:'Web Developer', Company:'GBTech'},


    ]
    return (
        <>
            <div className="container-fluid darknavyBg">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <h2 className='greenColor pb-2 pt-5 rubicFont text-capitalize text-center'>SKILL &
                            EXPERIENCE</h2>
                        <h1 className='mb-5 playfairFont pt-2 text-center text-white'><b>My Resume</b></h1>
                        <div className="row">
                            <div className="col-6">
                                <div className="skills d-none">
                                    <div className="react">
                                        <img src={props.react} alt=""/>
                                        <h4 className='text-white'>70%</h4>
                                    </div>
                                    <div className="HTML">
                                        <img src={props.html} alt=""/>
                                        <h4 className='text-white'>70%</h4>
                                    </div>
                                    <div className="CSS">
                                        <img src={props.css} alt=""/>
                                        <h4 className='text-white'>60%</h4>
                                    </div>
                                    <div className="Wordpress">
                                        <img src={props.js} alt=""/>
                                        <h4 className='text-white'>60%</h4>
                                    </div>
                                </div>
                                <div className="html">
                                    <img src="" alt=""/>
                                </div>
                                <img src={props.resumeImage} className='orbitImage' alt=""/>
                            </div>
                            <div className="col-6 text-white">


                                <Table borderless className='playfairFont' style={{color: "white"}}>

                                    <tbody>
                                    <tr>
                                        <td><h4>2022</h4></td>
                                        <td>
                                            <h3>Web Developer</h3>
                                            <h6>GBTech</h6>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td colSpan={2}>Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </Table>
                                );
                                }

                                export default BasicExample;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="container-fluid darknavyBg">*/}
            {/*    <div className="row ">*/}
            {/*        <div className="col-5">*/}
            {/*            <div className="Skills position-relative">*/}
            {/*                <div className="HTMLSkill">*/}
            {/*                    <img src="" alt=""/>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            */}
            {/*        </div>*/}
            {/*        <div className="col-7"></div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}