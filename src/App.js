import React from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import { Router } from 'react-router-dom';
import Allroutes from './Components/Allroutes';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Allroutes/>
    </div>
  );
}

export default App;
