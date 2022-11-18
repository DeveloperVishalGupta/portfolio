import React from "react";
import Table from 'react-bootstrap/Table';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function Resume(props) {
    const post = [
        {year: 2022, designnation: 'Web Developer', Company: 'GBTech'},
        {year: 2022, designnation: 'Student', Company: 'Complete Bsc CS'},
        {year: 2021, designnation: 'Jr. Web Developer', Company: 'GBTech'}

    ]
    const designnationList = post.map((value, index) => {
        return <tr key={index}>
            <td><h4 className="greenColor">{value.year}</h4></td>
            <td>
                <h4>{value.designnation}</h4>
                <h6>{value.Company}</h6>
            </td>

        </tr>
    })
    return (
        <>
            <div className="container-fluid " style={{color: '#eff0f4'}}>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <h2 className='greenColor pb-2 pt-5 rubicFont text-capitalize text-center'>SKILL &
                            EXPERIENCE</h2>
                        <h1 className='mb-5 playfairFont pt-2 text-center text-white'><b>My Resume</b></h1>
                        <div className="row">
                            <OwlCarousel autoPlay items='3' className='owl-theme' loop margin={10} nav>
                                <div class='item'>
                                    <img src={props.css} alt=""/>
                                </div>
                                <div class='item'>
                                    <img src={props.html} alt=""/>
                                </div>
                                <div class='item'>
                                    <img src={props.react} alt=""/>
                                </div>
                                <div class='item'>
                                    <img src={props.bts} alt=""/>
                                </div>
                                <div class='item'>
                                    <img src={props.resumeImage} alt=""/>
                                </div>
                                <div class='item'>
                                    <img src={props.wp} alt=""/>
                                </div>
                            </OwlCarousel>;
                            <div className="col-md-4">
                                <div className="SkillCard">
                                    <div className="drop" style={{color: '#ff0f5b'}}>
                                        <div className="content">
                                            <div className="cartHeading">
                                                <img src={props.react} className='' style={{height: '60%'}} alt=""/>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Consequatur, ipsa.।</p>
                                            <a href="./" className="readMoreLink">Read more..</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="SkillCard">
                                    <div className="drop" style={{color: '#ff0f5b'}}>
                                        <div className="content">
                                            <div className="cartHeading">
                                                <img src={props.html} className='' style={{height: '60%'}} alt=""/>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Consequatur, ipsa.।</p>
                                            <a href="./" className="readMoreLink">Read more..</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="SkillCard">
                                    <div className="drop" style={{color: '#ff0f5b'}}>
                                        <div className="content">
                                            <div className="cartHeading">
                                                <img src={props.css} className='' style={{height: '60%'}} alt=""/>
                                                <img src="" alt=""/>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Consequatur, ipsa.।</p>
                                            <a href="./" className="readMoreLink">Read more..</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">

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
