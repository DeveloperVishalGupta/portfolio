import React from "react";
export default function ConnectUs(props) {
return (
    <>
        <div className="container-fluid" style={{background: 'rgb(39, 43, 68)'}} >
            <div className="row">
                <div className="col-md-12">
                    <h1 className='playfairFont text-center text-white'><b>{props.HeadingLine1}</b></h1>
                    <h1 className='playfairFont text-center text-white'><b>{props.HeadingLine2}</b></h1>
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