import React from "react";
import "../Styles/Portfolio.css"; // Make sure to create a corresponding CSS file for styling
import Bitcoin from "../Images/Bitcoin-logo.png";
import Ethereum from "../Images/Eth-logo.png";
import Solana from "../Images/Solana-logo.png";
import Tether from "../Images/Tether-logo.png";

const Portfolio = () => {
  // Dummy data for the portfolio
  const cryptoPortfolio = [
    { id: 1, name: "Bitcoin" , symbol: "BTC", amount: "$2,340.32" },
    { id: 2, name: "Ethereum", symbol: "ETH", amount: "$5,340.32" },
    { id: 3, name: "Solana", symbol: "SOL", amount: "$2,340.32" },
    { id: 4, name: "Tether", symbol: "USDT", amount: "$5,340.32" },
    { id: 5, name: "Bitcoin", symbol: "BTC", amount: "$2,340.32" },
    { id: 6, name: "Ethereum", symbol: "ETH", amount: "$5,340.32" },
    { id: 7, name: "Solana", symbol: "SOL", amount: "$2,340.32" },
    { id: 8, name: "Tether", symbol: "USDT", amount: "$5,340.32" },
    { id: 9, name: "Bitcoin", symbol: "BTC", amount: "$2,340.32" },
    { id: 10, name: "Ethereum", symbol: "ETH", amount: "$5,340.32" },
    { id: 11, name: "Solana", symbol: "SOL", amount: "$2,340.32" },
    { id: 12, name: "Tether", symbol: "USDT", amount: "$5,340.32" },
  ];

  return (
    <div className="portfolio-grid">
      {cryptoPortfolio.map((crypto) => (
        <div key={crypto.id} className="portfolio-item">
          <div className="item-symbol">
            {crypto.name === "Bitcoin" && <img src={Bitcoin} alt="Bitcoin" />}
            {crypto.name === "Ethereum" && <img src={Ethereum} alt="Ethereum" />}
            {crypto.name === "Solana" && <img src={Solana} alt="Solana" />}
            {crypto.name === "Tether" && <img src={Tether} alt="Tether" />}
          </div>
          <div className="item-details">
            <div className="item-name">{crypto.name}</div>
            <div className="item-amount">{crypto.amount}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;