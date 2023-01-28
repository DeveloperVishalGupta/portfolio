import React from "react";
import carImage from '../images/car.png';
import Button from "react-bootstrap/Button";


export default function ProjectCard() {
    return (
        <>
            <div className="ProjectContainer">
                <div className="projectCard">
                    <div className="Borderline"></div>
                    <div className="imageSection">
                        <img src={carImage} alt=""/>
                    </div>
                    <div className="Content ">
                        <div className="details">
                            <h2 className='mb-3'>Project Name</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut earum esse exercitationem explicabo laudantium perferendis quasi totam veniam veritatis? Aliquam eius itaque maiores quam.</p>
                            <Button type='' >View More</Button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}