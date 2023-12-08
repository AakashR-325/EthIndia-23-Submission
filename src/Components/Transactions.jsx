import React from "react";
import "../Styles/Transactions.css"; // Make sure to create a corresponding CSS file for styling
import Bitcoin from "../Images/Bitcoin-logo.png";
import Ethereum from "../Images/Eth-logo.png";
import Solana from "../Images/Solana-logo.png";
import Tether from "../Images/Tether-logo.png";

const Transactions = () => {
  const transactionData = [
    {
      id: 1,
      name: "Bitcoin",
      balance: "$2,340.32",
      address: "0xd88Ba...6025",
      timestamp: new Date(new Date().getTime() - 45 * 60000),
    },
    {
      id: 2,
      name: "Ethereum",
      balance: "$5,340.32",
      address: "0xd88Ba...6025",
      timestamp: new Date(new Date().getTime() - 90 * 60000),
    },
    {
      id: 3,
      name: "Solana",
      balance: "$2,340.32",
      address: "0xd88Ba...6025",
      timestamp: new Date(new Date().getTime() - 30 * 60000),
    },
    {
      id: 4,
      name: "Bitcoin",
      balance: "$2,340.32",
      address: "0xd88Ba...6025",
      timestamp: new Date(new Date().getTime() - 45 * 60000),
    },
    {
      id: 5,
      name: "Ethereum",
      balance: "$5,340.32",
      address: "0xd88Ba...6025",
      timestamp: new Date(new Date().getTime() - 90 * 60000),
    },
    {
      id: 6,
      name: "Solana",
      balance: "$2,340.32",
      address: "0xd88Ba...6025",
      timestamp: new Date(new Date().getTime() - 30 * 60000),
    },
  ];

  const timeSince = (timestamp) => {
    const now = new Date();
    const elapsed = now - timestamp;

    const minutes = Math.floor(elapsed / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else {
      return `${days} days ago`;
    }
  };

  return (
    <div className="outer">
      <div className="transactions-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Balance</th>
              <th>Address</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {transactionData.map((transaction) => (
              <tr key={transaction.id}>
                <td>
                  <div className="transaction.name-symbol">
                    {transaction.name === "Bitcoin" && <img src={Bitcoin} alt="Bitcoin" />}
                    {transaction.name === "Ethereum" && <img src={Ethereum} alt="Ethereum" />}
                    {transaction.name === "Solana" && <img src={Solana} alt="Solana" />}
                    {transaction.name === "Tether" && <img  src={Tether} alt="Tether" />}
                  </div>
                  {transaction.name}
                </td>
                <td>{transaction.balance}</td>
                <td>{transaction.address}</td>
                <td className="timestamp">{timeSince(transaction.timestamp)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;