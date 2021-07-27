import React from "react";
import "./Navbar.css";
import NavLogo from "../../assets/180DC-Waterloo Logos/TRANSPARENT GLOBE.png"
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      {/* <div className="navbar_logo">
          <img
            src={NavLogo}
            alt="180 Degrees Consulting Logo"
          ></img>
      </div> */}
      <div className="navbar">
        <div className="nav_container">
          <img
            src={NavLogo}
            className="nav_logo"
            alt="180 Degrees Consulting Logo"
          ></img>
          <div className="nav_links">
            <Link to="/home" className="middle">
              Home
            </Link>
            <Link to="/about" className="middle">
              About Us
            </Link>
            <Link to="/services" className="middle">
              Services
            </Link>
            <Link to="/contact" className="middle">
              Contact Us
            </Link>
            <Link href="/join_us" className="middle">
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
