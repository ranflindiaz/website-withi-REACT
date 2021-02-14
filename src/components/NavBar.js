import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { Dropdown } from './Dropdown';

import './Navbar.css';


const NavBar = () => {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(true);
        } else {
            setDropdown(false);
        }
    }

    return(
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    Ralph-Devs<i className="fas fa-code"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-manu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                            About me
                        </Link>
                    </li>
                    <li className="nav-item"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                            Projects <i className="fas fa-caret-down"/>
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign up
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    )
}
export default NavBar;
