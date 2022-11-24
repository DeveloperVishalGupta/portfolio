import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function FeedBack(props) {
    const feedbackArray = [{
        fb: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point.',
        clientName: 'Vishal Gupta'
    },
        {
            fb: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected',
            clientName: 'Abhishek Gupta'
        }];

    const feedbackHtml = feedbackArray.map((value, index) => {
        return <div className='item' key={index}>
                    <div className="align-items-center row border">
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
                            </div>
                        </div>
                    </div>
                </div>
    });

    return (
        <>
            <div className="align-items-center container-md-fluid d-flex darknavyBg position-relative text-white"
                 style={{minHeight: '100vh'}}>
                <div className="justify-content-around row mx-0">
                    <div className="col-md-11">
                        <OwlCarousel nav='false' dots='false' autoplay='true' loop className='sk'>
                            {feedbackHtml}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    )
}   