import React from 'react'
import { AuthContext } from './Context';
import { Link } from 'react-router-dom'
import Images from './Images'
import '../Style/Nav.css';
import { useContext } from 'react';
import { LoginContext } from '../contextapi/LoginContext';

const Nav = () => {
    const { showLogin } = useContext(LoginContext);
    const { isLoggedIn, logout } = useContext(AuthContext);

    const toLogout = () => {
        logout(true);
    };

    return (
        <nav style={{ fontFamily: 'Averta Demo, sans-serif' }}>
            <div className='buy-rent'>
                <Link to={"/"} className="iconimg" style={{ fontFamily: 'Averta Demo, sans-serif' }}>HomeList
                </Link>
            </div>
            <div>
                {isLoggedIn ? (
                    <div className="links link-extends">
                        <Link to={"/"} className="">Home</Link>
                        <a href="#about">About</a>
                        <Link to="/house-posting">List a home</Link>
                        <div className='has-submenu' to="/">
                            <div className="user"><img src={Images.myavatar2} alt="backgroung_imgcd" /></div>
                            <ul>
                                <li><a href="/1">Profile</a></li>
                                <li><a href="/2">Saved Home</a></li>
                                <li><Link to="/createrealtor">Become a Realtor</Link></li>
                                <li><a href="/4">eCommerce</a></li>
                                <li><Link onClick={toLogout}>Sign Out </Link></li>
                            </ul>
                        </div>
                        <div></div>
                    </div>
                ) : (
                    <div className='links sidenav'>
                        {/* <Link class="">About Us</Link> */}
                        <Link to="">Home</Link>
                        <Link to="">About</Link>
                        <div onClick={showLogin}>List a home</div>
                        {/* <Link to="/login" className="">Login</Link> */}
                        <div className="signup" onClick={showLogin}>Sign up </div>
                    </div>
                )}
            </div>
        </nav >)
}

export default Nav;