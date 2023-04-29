import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const [ismobile, setIsmobile]=useState(false)
    return (
        <div className='navbar'>
            <p >Portfolio</p>
            <ul className={ismobile? 'nav-links-mobile' : 'nav-links' } 
            onClick={()=>{setIsmobile(false)}}>
                <li className='nav-menu'>Home</li>
                <li className='nav-menu'>Skills</li>
                <li className='nav-menu'>Resume</li>
                <li className='nav-menu'>Contact</li>
            </ul>

            <button className='mobile-menu-icon' onClick={()=>setIsmobile(!ismobile)}>
                {ismobile ? (<FontAwesomeIcon icon={faXmark} color='#FF725E' fontSize='35px' />)
                 : 
                 (<FontAwesomeIcon icon={faBars}  color='#FF725E' fontSize='35px' />)  }
            </button>

            

          
        </div>
    );
};

export default Navbar;