import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ConnectUs from '../images/ConnectUs.png'

export default function ConnectUsForm() {
    return (
        <>
            <div className="container-fluid py-5 " style={{ backgroundColor: 'rgb(39, 43, 68)' }}>
                <div className="row justify-content-center mx-0">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-7">
                                <Form>
                                    <div className="d-flex justify-content-between">
                                        <FloatingLabel controlId="FirstName" className='text-white' style={{ width: '49%' }}
                                            label="First Name ">
                                            <Form.Control type="text" className='mb-4 darknavyBg text-white'
                                                placeholder="First Name" />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="LastName" className='text-white' style={{ width: '49%' }}
                                            label="Last Name">
                                            <Form.Control type="text" className='mb-4 darknavyBg text-white'
                                                placeholder="Last Name" />
                                        </FloatingLabel>
                                    </div>
                                    <FloatingLabel controlId="EmailId" className='text-white' label="Email">
                                        <Form.Control type="email" className='mb-4 darknavyBg text-white'
                                            placeholder="Email ID" />
                                    </FloatingLabel>

                                    <FloatingLabel controlId="Message" className='text-white' label="Message">
                                        <Form.Control as="textarea" className='mb-4 darknavyBg text-white' rows={5}
                                            style={{ height: '150px' }} type="text" placeholder="Message" />
                                    </FloatingLabel>

                                    <Button variant="primary" className='btn greenBgColor px-3 text-white border border-success'
                                        type="submit">Submit</Button>
                                </Form>
                            </div>
                            <div className="col-md-5">
                                <img className="w-100" src={ConnectUs} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}