import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {FontAwesomeIconBrand} from '@fortawesome/free-brands-svg-icons';
import {faFacebookF, faInstagram, faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

export default function SideSocialNavigator() {
    const SocialIcons = [{icon: faFacebookF, link: '',}, {icon: faInstagram, link: 'https://www.instagram.com/vishalgupta1189/',}, {
        icon: faGithub,link: 'https://github.com/vvrvishal',
    }, {icon: faLinkedinIn, link: 'https://www.linkedin.com/in/vishal2210/',}]
    const iconList = SocialIcons.map((value, index) => {
        console.log(value.icon);
        return <a href={value.link} target='_blank' className='text-secondary'>
            <li key={index} className='border socialIconBorder border-secondary mb-2 px-2 py-1 rounded-1'>
                <FontAwesomeIcon icon={value.icon} size='xl'/>
            </li>
        </a>
    })
    return (
        <>
            <div className="themeBlueBg d-none d-md-block">
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