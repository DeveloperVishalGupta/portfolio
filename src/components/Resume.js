import React from "react";
import Table from 'react-bootstrap/Table';

export default function Resume(props) {
    const post = [
      {year:2022, designnation:'Web Developer', Company:'GBTech'},
      {year:2022, designnation:'Student', Company:'Complete Bsc CS'},
      {year:2021, designnation:'Jr. Web Developer', Company:'GBTech'}

    ]
    const designnationList = post.map((value, index)=>{
      return   <tr>
            <td><h4 className="greenColor">{value.year}</h4></td>
            <td>
                <h4>{value.designnation}</h4>
                <h6>{value.Company}</h6>
            </td>

        </tr>
    })
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
                                <div className="skills ">
                                    <div className="react position-absolute">
                                        <img src={props.react} alt=""/>
                                        <h4 className='text-white'>70%</h4>
                                    </div>
                                     {/* <div className="HTML">
                                    //     <img src={props.html} alt=""/>
                                    //     <h4 className='text-white'>70%</h4>
                                    // </div>
                                    // <div className="CSS">
                                    //     <img src={props.css} alt=""/>
                                    //     <h4 className='text-white'>60%</h4>
                                    // </div>
                                    // <div className="Wordpress">
                                    //     <img src={props.js} alt=""/>
                                    //     <h4 className='text-white'>60%</h4>
                                    // </div> */}
                                </div>
                                <div className="html">
                                    <img src="" alt=""/>
                                </div>
                                <img src={props.resumeImage} className='orbitImage' alt=""/>
                            </div>
                            <div className="col-6 text-white">

                                <Table borderless className='playfairFont' style={{color: "white"}}>

                                    <tbody>
                                    {designnationList}
                                    </tbody>
                                </Table>

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
