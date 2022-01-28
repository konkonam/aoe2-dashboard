import React from 'react'

import { Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

import './App.css'

import Index from "./pages/index/index.page";
import Pricing from "./pages/pricing/pricing.page";
import Company from "./pages/company/company.page";
import Contact from "./pages/contact/contact.page";

import Header from "./components/header/header.component";

const App = () => {
  return (
    <div className='app'>
        <Header/>

        <div className='main' role='main'>
            <Routes>
                <Route path="/" element={ <Index/> }/>
                <Route path="/pricing" element={ <Pricing/> }/>
                <Route path="/company" element={ <Company/> }/>
                <Route path="/contact" element={ <Contact/> }/>
            </Routes>
        </div>
    </div>
  );
}

export default App
