import React from "react";
import "../styles/Signup.css";
import tradeImg from "../images/trade.png";

const Signup = () => {
  return (
    <>
      <section className="signup">
        <section className="container">
          <section className="leftColumn">
            <figure className="img-container">
              <img src={tradeImg} alt="" />
            </figure>
          </section>

          <section className="rightColumn">
            <h2>Earn passive income with Crypto.</h2>
            <p>
              Earn up to 12% annual rewards on 30% digital assets. Simply hold
              your assets in the app to automatically earn rewards at the end of
              each of monthwith no lockups and no limits.
            </p>
            <section className="input-container">
              <input type="email" placeholder="Enter your email" />
              <button className="btn">Sign Up</button>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Signup;
