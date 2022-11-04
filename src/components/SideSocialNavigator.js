import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {FontAwesomeIconBrand} from '@fortawesome/free-brands-svg-icons';
import {faFacebookF, faInstagram, faGithub, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

export default function SideSocialNavigator() {
    const SocialIcons = [faFacebookF, faInstagram, faGithub, faLinkedinIn, faTwitter]
    const iconList = SocialIcons.map((value) => {
        return <li className='border socialIconBorder border-secondary mb-2 px-2 py-1 rounded-1'>
            <FontAwesomeIcon icon={value} size='xl'/>
        </li>
    })
    return (
        <>
            <div className="themeBlueBg">
                <div className="themeBlueBg navyBorder sideNavigator Centerflex">
                    <ul className='list-unstyled text-center text-secondary'>
                        {iconList}
                    </ul>
                </div>
                <div className="navyBorder Centerflex" style={{width: "80px", height: "80px"}}>
                    <FontAwesomeIcon className='text-white' icon={faSearch} size='2xl'/>
                </div>
            </div>


        </>
    )
}