import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <>
            <header>
                <div className='container'>
                    <div className='inner'>
                        <div className='logo-wrap'>
                            <a href="/">
                                <h1>Logo</h1>
                            </a>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/service">Service</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;