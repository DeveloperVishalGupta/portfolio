import React from "react";

export default function MyFortfolio(props) {
    const ProjectArray = [
        {name: 'Sukaii', class: 'site1BgImage', image: props.ss1},
        {name: 'Margom',class: 'site2BgImage',image: props.ss2},
        {name: 'Vishal', class: 'site3BgImage', image: props.ss3},
        {name: 'VishalVegitables',class: 'site4BgImage',image: props.ss4}
        ];
    const ProjectDiv = ProjectArray.map((v, i) => {
        return <div className="col-md-6 " >
            <div className={v.class + ' position-relative mb-3'}>
                <div className=''>
                    <img src={v.image} className='w-100 rounded-3' alt=""/>
                    <div className="position-absolute "style={{bottom:0}}>
                        <h5>Page {i}</h5>
                        <h1>{v.name}</h1>
                    </div>
                </div>
            </div>
        </div>
    })
    return (
        <>
            <div className="container-fluid" style={{backgroundColor:'#272b44'}}>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <h2 className='greenColor pb-2 pt-5 rubicFont text-capitalize text-center'>latest work</h2>
                        <h1 className='mb-5 playfairFont pt-2 text-center text-white'><b>My Portfolio</b></h1>
                        <div className="row">
                            {ProjectDiv}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}