import React from "react";
import home from "../assets/home.png";
export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Launcing soon</p>
          <h1 className="title">An NFT like no thoer</h1>
          <p className="description">
            Dont iss out on the release of our new NFT
          </p>
          <button>Sign up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
