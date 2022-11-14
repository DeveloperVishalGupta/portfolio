import React from "react";
export default function Resume(props) {
    return(
        <>
            <div className="container-fluid darknavyBg">
                <div className="row ">
                    <div className="col-5">
                        <div className="Skills position-relative">
                            <div className="HTMLSkill">
                                <img src="" alt=""/>
                            </div>
                        </div>
                        <img src={props.resumeImage} alt=""/>
                    </div>
                    <div className="col-7"></div>
                </div>
            </div>
        </>
    )
}