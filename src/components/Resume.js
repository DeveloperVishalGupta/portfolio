import React from "react";
import Table from 'react-bootstrap/Table';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function Resume(props) {
    const options = {
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        },
    };
    const OwlCarouselData = [
        {image: props.react, Knowledge: '60%', shoetDetail: '', Link: ''},
        {image: props.html, Knowledge: '60%', shoetDetail: '', Link: ''},
        {image: props.css, Knowledge: '60%',shoetDetail: '',Link: ''},
        {image: props.wp, Knowledge: '60%', shoetDetail: '', Link: ''},
        {image: props.bts,Knowledge: '60%',shoetDetail: '',Link: ''},
    ]
    const post = [
        {year: 2022, designnation: 'Web Developer', Company: 'GBTech'},
        {year: 2022, designnation: 'Graduated', Company: 'Complete Bsc CS'},
        {year: 2021, designnation: 'Jr. Web Developer', Company: 'GBTech'}

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
    const OwlCarouselDataHTML = OwlCarouselData.map((value, index)=>{
        return <div className='item' key={index}>
            <div className="SkillCard">
                <div className="drop" style={{color: '#ff0f5b'}}>
                    <div className="content">
                        <div className="cartHeading">
                            <img src={value.image} className='' style={{height: '60%', width:'auto'}} alt=""/>
                        </div>
                        <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Consequatur, ipsa.।</p>
                        <a href="./" className="readMoreLink">Read more..</a>
                    </div>
                </div>
            </div>
        </div>
    })
    return (
        <>
            <div className="container-fluid " style={{color: '#eff0f4'}}>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <h2 className='greenColor pb-2 pt-5 rubicFont text-capitalize text-center'>SKILL &
                            EXPERIENCE</h2>
                        <h1 className='playfairFont text-center themeBlueText'><b>My Resume</b></h1>
                        <div className="align-items-center row">
                            <div className="col-md-8">
                                <OwlCarousel nav='false' dots='false' autoplay='true'  loop className='SkillCardCarousel' {...options}>
                                    {OwlCarouselDataHTML}
                                </OwlCarousel>
                            </div>
                            <div className="col-md-4 text-white">

                                <Table borderless className='playfairFont' style={{color: "white"}}>

                                    <tbody  className='text-dark'>
                                    {designnationList}
                                    </tbody>
                                </Table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
