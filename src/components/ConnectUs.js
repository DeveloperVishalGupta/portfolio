import React from "react";
// import Images
import callIconImage from '../images/callOnImage.png';
import emailIconImage from '../images/Email.png';

// import component
import ConnectUsForm from "./ConnectUsForm";

export default function ConnectUs(props) {
<<<<<<< HEAD
    const connectArray = [{image:callIconImage, ContactName:'Call Us.', ConnectWith:'+91 9320206598'},
        {image:emailIconImage, ContactName:'Email.', ConnectWith:'vishalguptaramasare@gmail.com'},
        {image:locationIconImage, ContactName:'Location.', ConnectWith:'216 B wing Lallubhi Compound MAnkhurd, Mumbai'}];

    const connectStructure = connectArray.map((value, index)=>{
        return  <div className="col-md-4 playfairFont" key={index}>
            <div className="d-flex ">
                <div className="align-items-center d-flex justify-content-center rounded-circle me-3"
                     style={{
                         background: '#434764',
                         width: '75px',
                         height: '75px',
                     }}>
                    <img src={value.image} alt="" style={{width: '60%'}}/>
                </div>
                <div className="w-75" style={{width:`calc(100% - 92px);`}}>
                    <h3 className='border-bottom' style={{
                        fontWeight: 700,
                        letterSpacing: '1px',
                        paddingBottom: '8px',
                        borderBottom: '2px solid green',
                    }}>{value.ContactName}</h3>
                    <h5>{value.ConnectWith}</h5>
=======
    const connectArray = [{image: callIconImage, ContactName: 'Call Us.',ConnectAT:'tel:+91 9320206598', ConnectWith: '+91 9320206598'},
        {image: emailIconImage, ContactName: 'Email.',ConnectAT:'mailto:vishalguptaramasare@gmail.com', ConnectWith: 'vishalguptaramasare@gmail.com'},
    ];

    const connectStructure = connectArray.map((value, index) => {

        // const borderBottom = `1px solid ${index+1 % 2 == 0 ? 'red':'none'}`;
        // console.log(borderBottom);

        return <div className="col-md-6 playfairFont" style={{}} key={index}>
            <div className="d-flex justify-content-center py-5">
                <div className="align-items-center d-flex justify-content-center me-4 rounded-circle"
                     style={{background: '#434764',width: '75px',height: '75px'}}>
                    <img src={value.image} alt="" style={{width: '65%'}}/>
                </div>
                <div className="" style={{width: `calc(100% - 92px)`}}>
                    <h3 className='border-bottom d-inline-block pe-3 ps-1' style={{fontWeight: 700,letterSpacing: '1px',
                        paddingBottom: '8px',borderBottom: '2px solid green',}}>
                        {value.ContactName}
                    </h3>
                    <a href={value.ConnectAT} className='text-white'> <h5>{value.ConnectWith}</h5></a>

>>>>>>> dac6fbfc67e8ac1958f34cc2c895f33acb025b2b
                </div>
            </div>

        </div>

    })
    return (
        <>
            <div className="container-fluid text-white" style={{background: 'rgb(39, 43, 68)'}}>
                <div className="row mx-0">
                    <div className="col-md-12">

<<<<<<< HEAD
                        <h1 className='playfairFont '><b>Get In <span className='greenColor'>Touch.</span></b></h1>
                        <p className='mb-1'>It is a long established fact that a reader will be distracted by the readable </p>
                        <p>content of a page when looking at its layout.</p>
                        <div className="border border-2 mx-5 px-2 pt-5 pb-4 rounded-4 row">
                                {connectStructure}
                        </div>
                        <h1 className='playfairFont mt-5 mb-4 text-center text-white'><b>Contact us and <span className='greenColor'>stay in touch</span></b></h1>
                        {/*<div className="">*/}
                        {/*    <input type="email" className='form-control'/>*/}
                        {/*    <button type='button' className='btn btn-light'>Send E-mail</button>*/}
                        {/*</div>*/}
=======
                        <div className=" justify-content-center mb-2 mx-4  row">
                            <div className="col-10">
                                <h1 className='playfairFont mt-5'><b>Get In <span className='greenColor'>Touch.</span></b></h1>
                                <p className='mb-1'>It is a long established fact that a reader will be distracted by the readable </p>
                                <p>content of a page when looking at its layout.</p>
                                <div className="row border mt-5 border-2 rounded-4">
                                    {connectStructure}
                                </div>
                            </div>
                        </div>
                        <h1 className='playfairFont text-center text-white mt-5 mb-4'><b>Contact us and <span className='greenColor'>stay in touch</span></b></h1>

>>>>>>> dac6fbfc67e8ac1958f34cc2c895f33acb025b2b
                    </div>
                </div>
            </div>
            <ConnectUsForm/>
        </>
    )
}