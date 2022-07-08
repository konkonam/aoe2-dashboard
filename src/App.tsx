import React, {useEffect, useState} from 'react'
import { Matches } from './components'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/js/bootstrap'

import './App.css'

const App = () => {

  return (
    <div className='app'>
        <div className='main' role='main'>
            <Matches/>
        </div>
    </div>
  )
}

export default App
