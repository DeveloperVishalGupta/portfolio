  import React from "react";
  // import Animate from 'animate.css-react'

  import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

  export default function ServicesPage(props) {
      const serviceData = [{
          image: props.pencilIcon,
          name: 'Web Designer',
          discription: 'We Build Websites For Your Needs. Whether you\'re a business, organization, or an individual looking for a website.'
      },
          {
              image: props.codeIcon,
              name: 'Web Developer',
              discription: 'We Build Websites For Your Needs. Whether you\'re a business, organization, or an individual looking for a website.'
          }]
      const services = serviceData.map((value, index) => {
          return <div className="col-md-6 " key={index}>
              <div className="text-start px-4 position-relative">
                  <div className="serviceNumber playfairFont">0{index +1}</div>
                  <div className='Centerflex border text-dark mb-2 bg-white rounded-circle' style={{width: '53px', height: '53px'}}>
                      <FontAwesomeIcon icon={value.image} size='xl'/>
                  </div>l̥
                  <h2 className='serviceHeadig'>{value.name}</h2>
                  <h2 className='serviceHeadig'>{value.name}</h2>
                  <p className='latoFont'>{value.discription}</p>
              </div>
          </div>
      })
      return (
          <>
              <div className="align-items-center container-fluid d-flex darknavyBg text-white" style={{minHeight:'90vh'}}>
                  <div className="row text-center justify-content-center rubicFont">
                      <div className="col-12">
                          <div className="">
                              <h2 className='rubicFont mt-5  greenColor'>Web Developer & Designer</h2>
                              <h1 className='playfairFont mx-auto pb-4 my-5 animate__animated ' style={{width: '80%'}}>Get
                                  creative and enjoy the most
                                  dedicated web development
                                  services from Vishal.</h1>
                          </div>
                      </div>
                      <div className="col-10 mb-5">
                          <div className="row">
                              {services}
                          </div>
                      </div>


                  </div>
              </div>
          </>
      )
  }
