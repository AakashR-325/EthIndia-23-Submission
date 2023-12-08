import React from "react";
import "../Styles/Followers.css";
import Follower from "../Images/Follower-logo.png";

const Followers = () => {
  // This would be populated with actual data in a real application
  const dummyFollowers = [
    {
      id: 1,
      name: "User Name",
      handle: "@username1",
      followers: "1.3K",
      following: "1.2K",
    },
    {
      id: 2,
      name: "User Name",
      handle: "@username2",
      followers: "1.3K",
      following: "1.2K",
    },
    {
      id: 3,
      name: "User Name",
      handle: "@username3",
      followers: "1.3K",
      following: "1.2K",
    },
    {
      id: 4,
      name: "User Name",
      handle: "@username4",
      followers: "1.3K",
      following: "1.2K",
    },
    // ...other followers
  ];

  return (
    <div className="followers-container">
      {dummyFollowers.map((follower) => (
        <div key={follower.id} className="follower-item">
          <img className="user-logo" src={Follower}/>
          <div className="follower-info">
            <span className="follower-name">{follower.name}</span>
            <span className="follower-handle">{follower.handle}</span>
          </div>
          <div className="follower-stats">
            <span className="followers"><span className="bold-number">{follower.followers}</span> Followers</span>
            <span className="following"><span className="bold-number">{follower.following}</span> Following</span>
          </div>
          <button className="remove-button">Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Followers;