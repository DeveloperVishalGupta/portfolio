import React from "react";
import Button from 'react-bootstrap/Button';

export default function MyFortfolio(props) {
    const ProjectArray = [
        {
            name: 'Carversal',
            class: 'site1BgImage',
            image: props.carvarsalCover,
            discription: 'Here we showcase the latest makes and models, often before they hit the market. We also report on other significant announcements in the automotive industry.'
        },
        {name: 'Margom', class: 'site2BgImage', image: props.ss2},
        {name: 'Vishal', class: 'site3BgImage', image: props.ss3},
        {name: 'VishalVegitables', class: 'site4BgImage', image: props.ss4},
        {name: 'Board System', class: 'site4BgImage', image: props.ss4},
        {name: 'Ecovis', class: 'site4BgImage', image: props.ss4}
    ];
    const ProjectDiv = ProjectArray.map((v, i) => {
        return <div className="col-md-6" style={{marginBottom: '5rem'}}>
            <div className="projectCard">
                <div className="Borderline"></div>
                <div className="imageSection">
                    <img src={v.image} alt=""/>
                </div>
                <div className="Content ">
                    <div className="details">
                        <h2 className='mb-3'>{v.name}</h2>
                        <p>{v.discription}</p>
                        <Button type=''>View More</Button>
                    </div>

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
                        <h1 className='mb-5 playfairFont pt-2 text-center text-white Portfolio'><b>My Portfolio</b></h1>
                        <div className="row" style={{marginTop: '4rem'}}>
                            {ProjectDiv}
                            <div className="text-center mb-4">
                                <Button className='greenBgColor border-success' style={{letterSpacing: '.5px'}}><b>View
                                    More</b></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}