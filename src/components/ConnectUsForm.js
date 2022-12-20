import React from "react";
// import react component
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

// import images
import ContactFormImage from '../images/ContactImage.png';

export default function ConnectUsForm() {
    return (
        <>
            <div className="container-fluid " style={{backgroundColor: 'rgb(39, 43, 68)'}}>
                <div className="row mx-0">
                    <div className="col-md-6">
                        <Form>
                            <div className="d-flex justify-content-between">
                                <FloatingLabel controlId="FirstName" className='text-white' style={{width: '49%'}}
                                               label="First Name ">
                                    <Form.Control type="text" className='mb-4 darknavyBg text-white'
                                                  placeholder="First Name"/>
                                </FloatingLabel>
                                <FloatingLabel controlId="LastName" className='text-white' style={{width: '49%'}}
                                               label="Last Name">
                                    <Form.Control type="text" className='mb-4 darknavyBg text-white'
                                                  placeholder="Last Name"/>
                                </FloatingLabel>
                            </div>
                            <FloatingLabel controlId="EmailId" className='text-white' label="Email">
                                <Form.Control type="email" className='mb-4 darknavyBg text-white'
                                              placeholder="Email ID"/>
                            </FloatingLabel>

                            <FloatingLabel controlId="Message" className='text-white' label="Message">
                                <Form.Control as="textarea" className='mb-4 darknavyBg text-white' rows={5}
                                              style={{height: '150px'}} type="text" placeholder="Message"/>
                            </FloatingLabel>

                            <Form.Group className="mb-3 text-white" controlId="formBasicCheckbox">
                                <b> <Form.Check type="checkbox" label="Check me out"/> </b>
                            </Form.Group>
                            <Button variant="primary" className='btn greenBgColor px-3 text-white border border-success'
                                    type="submit">Submit</Button>
                        </Form>
                    </div>
                    <div className="col-md-6">
                        <img src={ContactFormImage} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}