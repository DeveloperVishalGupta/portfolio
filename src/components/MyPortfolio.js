import React from "react";
import Button from 'react-bootstrap/Button';

export default function MyFortfolio(props) {
    const ProjectArray = [
        {name: 'Sukaii', class: 'site1BgImage', image: props.ss1},
        {name: 'Margom', class: 'site2BgImage', image: props.ss2},
        {name: 'Vishal', class: 'site3BgImage', image: props.ss3},
        {name: 'VishalVegitables', class: 'site4BgImage', image: props.ss4},
        {name: 'Board System', class: 'site4BgImage', image: props.ss4},
        {name: 'Ecovis', class: 'site4BgImage', image: props.ss4}
    ];
    const ProjectDiv = ProjectArray.map((v, i) => {
        return <div className="col-md-6 mb-3 " style={{height: "50vh"}}>
            <div className="outerImage rounded-2 w-100 mx-auto position-relative">
                <div className="innerImage rounded-2 w-100"></div>
                <div className="position-absolute projectName" style={{bottom: '10%', left: '5%'}}>
                    <h1 className='playfairFont'>{v.name}</h1>
                    <h5>Project {i + 1}</h5>
                </div>
            </div>
        </div>
    })
    return (
        <>
            <div className="container-fluid " style={{backgroundColor: '#272b44'}}>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <h2 className='greenColor pb-2 pt-5 rubicFont text-capitalize text-center'>latest work</h2>
                        <h1 className='mb-5 playfairFont pt-2 text-center text-white'><b>My Portfolio</b></h1>
                        <div className="row">
                            {ProjectDiv}
                            <div className="text-center mb-4">
                                <Button className='greenBgColor border-success' style={{letterSpacing: '.5px'}}><b>View
                                    More</b></Button>{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}