import React from 'react'
import icon from "../assets/icon.png"
import super1 from "../assets/super1.png"
import release2 from "../assets/release2.png"
import { Card } from './Card'
export const Free = () => {
  return (
    <div className='free'>
      <div className="container">
        <div className="background">
        <div className="ellipse pink"></div>        
        <div className="ellipse green"></div> 
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon"/>
          </div>
          <h2 className="title">Free NFT for early birds</h2>
          <p className="description">
            Sign up today and you will receive a free NFT on launch day
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="Floop Series"
            title="Purple Man"
            price={2.99}
            tag={123894}
            time={1} />
        </div>
        <div className="card2">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.46}
            tag={123894}
            time={2} />

        </div>
      </div>
    </div>
  )
}
