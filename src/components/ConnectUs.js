import React from "react";
export default function ConnectUs(props) {
return (
    <>
        <div className="container-fluid" >
            <div className="row">
                <div className="col-md-12">
                    <h1 className='playfairFont text-center themeBlueText'><b>{props.Heading}</b></h1>
                    <div className="">
                        <input type="email" className='form-control'/>
                        <button type='button' className='btn btn-light' >Send E-mail</button>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}