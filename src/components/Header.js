import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Component/logo";
import { Link } from "react-scroll";

export default function Header() {
    const menuList = [
        {
            name: "About",
            id: "About",
        },
        {
            name: "My Works",
            id: "MyWorks",
        },
        {
            name: "Skills",
            id: "Skills",
        },
        {
            name: "FeedBack",
            id: "FeedBack",
        },
        {
            name: " CONTACT ",
            id: "contactSection",
        },

    ];
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    return (
        <>
            <div className="container-fluid px-0">
                <div className="themeBlueBg d-flex align-items-center justify-content-between">
                    <div className="navyBorder Centerflex" style={{ width: "80px", height: "80px" }}>
                        <Logo />
                    </div>

                    <div className={`d-none d-md-block  menuWidth`}>
                        <ul className='HeaderMenu text-white d-md-flex justify-content-around list-unstyled mb-0 ms-auto w-75 f600 rubicFont'>
                            {menuList.map((item, index) => {
                                return <Link key={index} to={item.id} smooth={true} duration={500}>
                                    {item.name}
                                </Link>
                            })}
                        </ul>
                    </div>

                    <div
                        onClick={() => { setMobileMenuVisible(!mobileMenuVisible) }}
                        className="navyBorder Centerflex d-md-none" style={{ width: "80px", height: "80px" }}>
                        <FontAwesomeIcon className='text-white' icon={faBars} size='2xl' />
                    </div>

                    {mobileMenuVisible &&
                        <div className='d-md-none menuWidth position-absolute rounded' style={{ right: 4, top: 79, width: '250px', zIndex: 100 }}>
                            <ul className=' text-white  list-unstyled mb-0 rubicFont themeBlueBg'>
                                {menuList.map((item, index) => {
                                    return <div className="d-block py-3 px-4">
                                        <Link key={index} to={item.id} style={{ display: 'block' }} smooth={true} duration={500}>
                                            {item.name}
                                        </Link>
                                    </div>
                                })}
                            </ul>
                        </div>
                    }
                </div>
            </div >
        </>
    )
} 