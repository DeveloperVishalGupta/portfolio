import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function FeedBack(props) {
    const options = {
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },
    };
    const feedbackArray = [{
        fb: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point.',
        clientName: 'Vishal Gupta'
    },
        {
            fb: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected',
            clientName: 'Abhishek Gupta'
        }];

    const feedbackHtml = feedbackArray.map((value, index) => {
        return <div className="item">
            <div className="row align-items-center position-relative ">
                <div className="col-md-5">
                    <img src={props.image} className='w-100' alt=""/>
                </div>
                <div className="col-md-7">
                    <h3 className='playfairFont' style={{lineHeight: '1.3', wordSpacing: '3px', letterSpacing: '1px'}}>
                        {value.fb}</h3>
                    <h6 className='mt-4'>- {value.clientName}</h6>
                </div>
                <img src={props.feedbackImage} alt='' className='w-50 position-absolute' style={{ right: '5%', bottom:'5%'}}/>
            </div>
        </div>
    })
    return (
        <>
            <div className="border container-fluid d-flex darknavyBg flex-column justify-content-around text-white" style={{minHeight: '100vh'}}>
                <OwlCarousel {...options} autoplay='true' loop nav >
                    {feedbackHtml}
                </OwlCarousel>

            </div>

        </>
    )
}   