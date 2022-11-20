import React from "react";

export default function FeedBack(props) {
    return (
        <>
            <div className="container-md-fluid text-white darknavyBg">
                <div className="row">
                    <div className="col-11">
                        <img src={props.image} alt=""/>
                        <div className="">
                            <img src={props.quoteIcon} alt=""/>
                            <h5 className='playfairFont'>It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout The point.</h5>
                            <h6>- Vishal Gupta</h6>
                            <img src={props.feedbackImage} className='position-absolute' alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}