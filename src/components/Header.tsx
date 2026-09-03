//import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo-coffee.png";
import "../pages/Home.css"; // header styles are in Home.css

export default function Header() {
  return (
    <header className="hdr" role="banner">
      <div className="hdr__inner">
        <div className="hdr__brand">
          <Link to="/" aria-label="Home">
            <img src={logo} alt="COFFEE" style={{ height: 60 }} />
          </Link>
        </div>

        <nav className="hdr__nav--desktop" role="navigation" aria-label="Main">
          <NavLink to="/mentorship" className="navlink">MENTORSHIP</NavLink>
          <NavLink to="/events" className="navlink">EVENTS</NavLink>
          <NavLink to="/about" className="navlink">ABOUT</NavLink>
          <NavLink to="/contact" className="navlink">CONTACT</NavLink>
        </nav>

        {/* mobile hamburger/menu omitted for brevity (keeps existing behavior) */}
      </div>
    </header>
  );
}