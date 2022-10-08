import React from "react";
import "../styles/Hero.css";
import heroImg from "../images/hero-img.png";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <section className="container">
          <section className="leftColumn">
            <p>Buy & Sell Crypto 24/7 using your retirement account</p>
            <h1>Invest in Cryptocurrency with Your IRA</h1>
            <p>Buy, Sell and Store hundreds of cryptocurrencies</p>
            <section className="input-container">
              <input type="email" placeholder="Enter your email" />
              <button className="btn">Learn More</button>
            </section>
          </section>

          <section className="rightColumn">
            <figure className="img-container">
              <img src={heroImg} alt="" />
            </figure>
          </section>
        </section>
      </section>
    </>
  );
};

export default Hero;
