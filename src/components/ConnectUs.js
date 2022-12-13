import React from "react";
// import Images
import callIconImage from '../images/callOnImage.png';
import emailIconImage from '../images/Email.png';
import locationIconImage from '../images/Location.png';

export default function ConnectUs(props) {
    const connectArray = [{image:callIconImage, ContactName:'Call Us.', ConnectWith:'+91 9320206598'},
        {image:emailIconImage, ContactName:'Email.', ConnectWith:'vishalguptaramasare@gmail.com'},
        {image:locationIconImage, ContactName:'Location.', ConnectWith:'216 B wing Lallubhi Compound MAnkhurd, Mumbai'}];
    const connectStructure = connectArray.map((value, index)=>{
        return  <div className="col-md-4 playfairFont" key={index}>
            <div className="d-flex justify-content-around">
                <div className="align-items-center d-flex justify-content-center rounded-circle"
                     style={{
                         background: '#434764',
                         width: '75px',
                         height: '75px',
                     }}>
                    <img src={value.image} alt="" style={{width: '65%'}}/>
                </div>
                <div className="" style={{width:`calc(100% - 92px);`}}>
                    <h3 className='border-bottom' style={{
                        fontWeight: 700,
                        letterSpacing: '1px',
                        paddingBottom: '8px',
                        borderBottom: '2px solid green',
                    }}>{value.ContactName}</h3>
                    <h5>{value.ConnectWith}</h5>
                </div>
            </div>

        </div>
    })
    return (
        <>
            <div className="container-fluid text-white" style={{background: 'rgb(39, 43, 68)'}}>
                <div className="row">
                    <div className="col-md-12">

                        <h1 className='playfairFont '><b>Get In <span className='greenColor'>Touch.</span></b></h1>
                        <p>It is a long established fact that a reader will be distracted by the readable </p>
                        <p>content of a page when looking at its layout.</p>
                        <div className="row justify-content-center">
                                {connectStructure}
                        </div>
                        <h1 className='playfairFont text-center text-white'><b>{props.HeadingLine2}</b></h1>
                        <div className="">
                            <input type="email" className='form-control'/>
                            <button type='button' className='btn btn-light'>Send E-mail</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}