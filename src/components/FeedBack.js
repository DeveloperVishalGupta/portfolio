import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function FeedBack(props) {
    const feedbackArray = [{
        fb: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point.',
        clientName: 'Vishal Gupta'
    },
        {
            fb: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected',
            clientName: 'Abhishek Gupta'
        },]

    const feedbackHtml = feedbackArray.map((value, index) => {
        return <div className="item">
            <div className="align-items-center row">
                <div className="col-md-5">
                    <img src={props.image} className='w-100' alt=""/>
                </div>
                <div className="col-md-7">
                    <div className="">
                        <img src={props.quoteIcon} className='mb-4 pb-1' style={{width: '4rem'}} alt=""/>
                        <h3 className='playfairFont'
                            style={{lineHeight: '1.3', wordSpacing: '3px', letterSpacing: '1px'}}>
                            {value.fb}</h3>
                        <h6 className='mt-4'>- {value.clientName}</h6>
                        {/*<img src={props.feedbackImage} style={{bottom: '12%', right: '10%'}}*/}
                        {/*     className='position-absolute' alt=""/>*/}
                    </div>
                </div>

            </div>
        </div>
    })
    const pre_icons =<FontAwesomeIcon className='greenColor' icon={props.leftArrow} size='xl'/> 
    const next_icons =<FontAwesomeIcon className='greenColor' icon={props.rightArrow} size='xl'/>  
    const options = {
        responsive: {
            0: {
                items: 1
            }
        },
        navText: ["<div class='align-items-center d-flex justify-content-center nav-btn prenavigate prev-slide rounded-circle'><</div>", "<div class='align-items-center d-flex justify-content-center nav-btn prev-slide rounded-circle postnavigate'> ></div>"],

    }
    return (
        <>
            <div className="d-flex darknavyBg flex-column justify-content-around pb-4 text-white"
                 style={{minHeight: '100vh'}}>
                <div className="justify-content-around row mx-0">
                    <div className="col-md-11">
                        <OwlCarousel nav='false' dots='false' autoplay='false' loop
                                     className='FeedbackCarousel' {...options}>
                            {feedbackHtml}
                        </OwlCarousel>
                        <img src={props.VG} className='' alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}