import React from "react"
import { Link } from "react-router-dom"
import './banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1>Welcome to our website</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Link to='/contact' className='btn btn-primary btn-lg'>Contact us</Link>
                    </div>

                    <div className='col-md-6'>
                        <img src="https://getbootstrap.com/docs/5.1/examples/heroes/bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"
                             width="700" height="500" loading="lazy"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner