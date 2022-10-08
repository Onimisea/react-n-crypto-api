import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Featured.css";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";

const Featured = () => {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) return [];

  const coins = data.map((coin) => {
    // console.log(coin);
    return (
      <section className="coin--card">
        <figure className="coin--img">
          <img src={coin.image} alt={coin.name} />
        </figure>
        <section className="coin--details">
          <h5>{coin.name}</h5>
          <p className="coin--price">${coin.current_price.toLocaleString()}</p>
        </section>

        {coin.price_change_percentage_24h < 0 ? (
          <section className="red pcc">
            <span>
              <FiArrowDown className="price-change-icon" />
            </span>
            <span>{coin.price_change_percentage_24h.toFixed(2)}%</span>
          </section>
        ) : (
          <section className="green pcc">
            <span>
              <FiArrowUpRight className="price-change-icon" />
            </span>
            <span>{coin.price_change_percentage_24h.toFixed(2)}%</span>
          </section>
        )}
      </section>
    );
  });

  return (
    <>
      <section className="featured">
        <section className="container">
          <section className="leftColumn">
            <h2>Explore top Crypto's like Bitcoin, Ethereum and Dogecoin</h2>
            <p>See all available assets: Cryptocurrencies and NFT's</p>
            <button className="btn">See More Coins</button>
          </section>

          <section className="rightColumn">{coins}</section>
        </section>
      </section>
    </>
  );
};

export default Featured;
