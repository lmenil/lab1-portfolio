import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.jpg'; // Ensure you have a logo.png in assets


const Layout = () => {
  return (
    // <div>
    //     <h1>Welcome to My Portfolio</h1>
    //         <nav className="navbar">
    //         <div className="navbar-logo">
    //             <Link to="/">
    //             <img src={logo} alt="Logo" />
    //             </Link>
    //         </div>
            
    //         <ul className="navbar-links">
    //             <li><Link to="/">Home</Link></li>
    //             <li><Link to="/about">About Me</Link></li>
    //             <li><Link to="/projects">Projects</Link></li>
    //             <li><Link to="/services">Services</Link></li>
    //             <li><Link to="/contact">Contact Me</Link></li>
    //         </ul>
            
    //         </nav>
    // </div>
    <div>

    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
        <img src={logo} alt="Logo" />
        </Link>
        {/* <span>enzo</span> */}
      </div>
        {/* <h1>Portfolio</h1> */}
      <div className="navbar-links">
        {/* <a href="/blog">BLOG</a> */}
      </div>
      <div className="navbar">
        {/* <span>☰</span> Hamburger icon */}
        <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
            
        </ul>
      </div>
    </nav>
    </div>  
  );
};

export default Layout;