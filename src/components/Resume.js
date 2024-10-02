import React from "react";
import Table from 'react-bootstrap/Table';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import vishalGuptaResume from '../file/Vishal-Gupta-Resume.pdf'
import reactJs from '../svg/react-2.svg'
import figma from '../svg/figma-icon.svg'
import github from '../svg/github-2.svg'
import nodejs from '../svg/nodejs-1.svg'
import nextjs from '../svg/nextjs-2.svg'
import bootstrap5 from '../svg/bootstrap-5-1.svg'
import html from '../svg/html-1.svg'
import css from '../svg/css-3.svg'
import javascript from '../svg/javascript-1.svg'
import tailwindcss from '../svg/tailwindcss.svg'


export default function Resume() {
    const options = {
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        },
    };
    const OwlCarouselData = [
        { image: reactJs },
        { image: figma },
        { image: github },
        { image: nodejs },
        { image: nextjs },
        { image: bootstrap5 },
        { image: html },
        { image: css },
        { image: javascript },
        { image: tailwindcss },

    ]
    const post = [
        { year: 2023, designnation: 'Frontend Ninja', Company: 'TAILWND-Flow Learning Solutions LLP' },
        { year: 2022, designnation: 'Web Developer', Company: 'GBTech' },
        { year: 2021, designnation: 'Jr. Web Developer', Company: 'GBTech' }

    ]
    const designnationList = post.map((value, index) => {
        return <tr key={index}>
            <td><h3 className="greenColor">{value.year}</h3></td>
            <th>
                <h3>{value.designnation}</h3>
                <h5>{value.Company}</h5>
            </th>

        </tr>
    });
    const OwlCarouselDataHTML = OwlCarouselData.map((value, index) => {
        return <div className='item' key={index}>
            <div className="SkillCard">
                <div className="content">
                    <div className="cartHeading">
                        <img src={value.image} className='' style={{ width: '100px' }} alt="" />
                    </div>

                </div>

            </div>
        </div>
    })
    return (
        <>
            <div className="container-fluid " id="Skills" style={{ color: '#eff0f4', minHeight: '100vh' }}>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <h2 className='greenColor pb-2 pt-5 rubicFont text-capitalize text-center'>SKILL &
                            EXPERIENCE</h2>
                        <div className="align-items-center row">
                            <div className="col-md-8">
                                <OwlCarousel nav='false' dots='false' autoplay='true' loop className='SkillCardCarousel' {...options}>
                                    {OwlCarouselDataHTML}
                                </OwlCarousel>
                            </div>
                            <div className="col-md-4 text-white">
                                <Table borderless className='playfairFont' style={{ color: "white" }}>
                                    <tbody className='text-dark'>
                                        {designnationList}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-3 mb-4 mx-auto p-4 rounded-4 shadow-lg showResume">
                    <h1 className='playfairFont themeBlueText mb-3'><b> My Resume</b></h1>
                    <div className="text-end w-100">
                        <a className="border btn me-4 resumeOptions" href={vishalGuptaResume} download>
                            Download Resume
                        </a>
                        <a className="border btn resumeOptions" href={vishalGuptaResume} target="_">
                            View Resume
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
