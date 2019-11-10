import React from 'react';
import './App.css';
import Charssection from './components/Layouts/Charssection'
import Particlesjs from './components/Layouts/Particlesjs'
import Footer from './components/Layouts/parts/Footer';
import Logo from './image/logo.svg'
import Nav from './components/Layouts/Nav'
import {BrowserRouter as Router,Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
 
    <Particlesjs />
    <Router>
    <Nav />
    <Link to="/"> <img src={Logo} className="logo" />
    </Link>
   
    <Charssection/>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
