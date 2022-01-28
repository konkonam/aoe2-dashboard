import React from 'react'
import { Link} from "react-router-dom";
import './header.css'

import Navigation from "../navigation/navigation.component";

const Header = () => {
    return (
        <header className='navbar navbar-light bg-light'>
            <div className='container'>
                <Link to='/' className='navbar-brand'>Your logo</Link>
                <Navigation/>
            </div>
        </header>
    )
}

export default Header