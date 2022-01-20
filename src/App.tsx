import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

import './App.css'

import Example from './components/example/example.component'

const App = () => {

  return (
    <div className='app'>
        <Example content='Hello World!'/>
    </div>
  );
}

export default App
