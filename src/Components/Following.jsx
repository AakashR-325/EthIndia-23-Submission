import React from "react";
import "../Styles/Following.css"; // Make sure to create and import your stylesheet
import Follower from "../Images/Follower-logo.png";

const Following = () => {
  // This would be populated with actual data in a real application
  const dummyFollowing = [
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
      followers: "1.1K",
      following: "1.1K",
    },
    {
      id: 3,
      name: "User Name",
      handle: "@username3",
      followers: "2.2K",
      following: "1.7K",
    },
    {
      id: 4,
      name: "User Name",
      handle: "@username4",
      followers: "1.8K",
      following: "1.5K",
    },
    {
      id: 5,
      name: "User Name",
      handle: "@username5",
      followers: "2.5K",
      following: "2.2K",
    },

    // ... other following
  ];

  return (
    <div className="following-container">
      {dummyFollowing.map((follow) => (
        <div key={follow.id} className="following-item">
          <img className="user-logo" src={Follower}/>
          <div className="following-info">
            <span className="following-name">{follow.name}</span>
            <span className="following-handle">{follow.handle}</span>
          </div>
          <div className="following-stats">
            <span className="followers"><span className="bold-number">{follow.followers}</span> Followers</span>
            <span className="following"><span className="bold-number">{follow.following}</span> Following</span>
          </div>
          <button className="unfollow-button">Unfollow</button>
        </div>
      ))}
    </div>
  );
};

export default Following;