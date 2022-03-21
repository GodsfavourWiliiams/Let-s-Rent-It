import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../Assets/084 crown.svg';
import './header.css';

const Header = () => (
    <div className='navbar'>
        <div className="header">
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>

        <div className="options">
            <Link className='option' to="/shop">Shop</Link>
            <Link className='option' to="/">Contact</Link>
            <Link className='option' to="/signin">Sign In</Link> 
            <Link className='option' to="/">Cart</Link> 
        </div>
      </div>
    </div>
)

export default Header;
