import React from "react";
import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";

export const Like = () => {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1" />
            <h2 className="title">An NFT like no other</h2>
            <p className="description">
              Qui ullamco occaecat irure laboris velit mollit Ullamco magna
              tempor dolor ad minim reprehenderit officia adipisicing irure ad
              amet id id.
            </p>
            <p className="description">
              Laboris nisi laboris proident sunt exercitation non cupidatat
              magna Sunt amet incididunt id ipsum et voluptate.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" />
            <h2 className="title">An NFT like no other</h2>
            <p className="description">
              Qui ullamco occaecat irure laboris velit mollit Ullamco magna
              tempor dolor ad minim reprehenderit officia adipisicing irure ad
              amet id id.
            </p>
            <p className="description">
              Laboris nisi laboris proident sunt exercitation non cupidatat
              magna Sunt amet incididunt id ipsum et voluptate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
