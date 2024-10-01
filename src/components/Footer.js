import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Component/logo";

export default function Footer() {

    return (
        <>
            <div className="container-fluid darknavyBg">
                <div className="justify-content-center mx-0 py-4 row">
                    <div className="col-12 text-center mb-3">
                        <Logo style={{ fontSize: '3rem' }} />
                    </div>

                    <div className="col-md-4 text-center">
                        <div className="text-center">
                            <h6 className='text-white'>“Design is not just what it looks like and feels like. Design is how it works.”</h6>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}