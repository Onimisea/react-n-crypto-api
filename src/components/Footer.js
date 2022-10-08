import React from "react";
import "../styles/Footer.css";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <section className="container">
          <section className="col col-1">
            <h1>
              De<span className="primary">Fi</span>
            </h1>
          </section>
          <section className="col">
            <h5>Support</h5>
            <span className="bar"></span>
            <a href="/">Contact Us</a>
            <a href="/">Chat</a>
            <a href="/">Help Center</a>
            <a href="/">FAQ</a>
          </section>
          <section className="col">
            <h5>Developer</h5>
            <span className="bar"></span>
            <a href="/">Cloud</a>
            <a href="/">Commerce</a>
            <a href="/">Pro</a>
            <a href="/">API</a>
          </section>
          <section className="col">
            <h5>Company</h5>
            <span className="bar"></span>
            <a href="/">About</a>
            <a href="/">Information</a>
            <a href="/">Legal</a>
            <a href="/">Privacy</a>
          </section>
          <section className="col">
            <h5>Social</h5>
            <span className="bar"></span>
            <a href="/">
              <FaFacebook className="icon" />
            </a>
            <a href="/">
              <FaTwitter className="icon" />
            </a>
            <a href="/">
              <FaLinkedin className="icon" />
            </a>
            <a href="/">
              <FaGithub className="icon" />
            </a>
          </section>
        </section>
      </section>
    </>
  );
};

export default Footer;
