import React from 'react';
import linkedin from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'
import github from '../assets/github.png'
import {faLinkedIn} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsBorder, BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";






const Footer = () => {
    return (
        <div className='footer'>

            <p>CONTACTS</p>
            <div className='social-media'>
                <a href="https://www.linkedin.com/in/brice-kouetcheu-418708181/"><BsLinkedin color='white' className='icon'></BsLinkedin></a>
                <a href="https://github.com/bricekouetcheu"><BsGithub color='white'  className='icon'></BsGithub></a>
                <a href="mailto:brcronld@email.com"><SiGmail color='white'  className='icon'></SiGmail></a>
        

            </div>
            <p>&copy; brice kouetcheu 2023. </p>



            


            
        </div>
    );
};

export default Footer;