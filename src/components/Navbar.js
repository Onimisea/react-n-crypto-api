import React, { useState } from "react";
import "../styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const toggleNav = () => setNavToggle(!navToggle);

  return (
    <>
      <section className="header">
        <section className="container">
          <h1>
            De<span className="primary">Fi</span>
          </h1>
          <ul className={navToggle ? "nav-menu active" : "nav-menu"}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Featured</a>
            </li>
            <li>
              <a href="/">Earn</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <section className="btn-group">
            <button className="btn">Connect Wallet</button>
          </section>
          <section className="hamburger" onClick={toggleNav}>
            {navToggle ? (
              <FaTimes size={20} style={{ color: "#333" }} />
            ) : (
              <FaBars size={20} style={{ color: "#333" }} />
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default Navbar;
