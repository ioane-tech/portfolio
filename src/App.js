import React from 'react';

import Navbar from './Components/Navbar';
import { Router } from 'react-router-dom';
import Allroutes from './Components/Allroutes';

import "./CSS/App.css"
import "./CSS/home.css"
import "./CSS/navbar.css"
import "./CSS/aboutMe.css"
import "./CSS/projects.css"


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Allroutes/>
    </div>
  );
}

export default App;
