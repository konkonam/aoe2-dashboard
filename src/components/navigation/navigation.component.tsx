import React from 'react'
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <ul className='nav'>
            <li className='nav-item'>
                <Link to='/' className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to='/pricing' className='nav-link'>Pricing</Link>
            </li>
            <li className='nav-item'>
                <Link to='/company' className='nav-link'>Company</Link>
            </li>
            <li className='nav-item'>
                <Link to='/contact' className='nav-link'>Contact</Link>
            </li>
        </ul>
    )
}

export default Navigation