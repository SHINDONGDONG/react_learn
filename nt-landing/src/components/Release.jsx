import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import release1 from "../assets/release1.png"
import release2 from "../assets/release2.png"
import { Card } from './Card'

export const Release = () => {
  return (
    <div className="releases">
      <div className="release orange">
        <div className="content">
          <h2 className="title">Initial Release 4/11</h2>
          <p className="description">
          We have released four limited edition NFT's early which which can be bid on via <a href='#'>OpenSea.</a>
          </p>
          <p className="description">
            These NFTs are unique and will not be available again in the future.
          </p>
          <p className="description">
            Make sure to place your bids early to secure your piece of digital art.</p>
          <a href="#" className='link'>Check them out <BsArrowRight/></a>
        </div>
        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>
      <div className="release green">
        <div className="card-container">
        <Card
            image={release2}
            series="Floop Series"
            title="Purple Man"
            price={2.99}
            tag={123894}
            time={1} />
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">Initial Release 4/11</h2>
          <p className="description">
          We have released four limited edition NFT's early which which can be bid on via <a href='#'>OpenSea.</a>
          </p>
          <p className="description">
            These NFTs are unique and will not be available again in the future.
          </p>
          <p className="description">
            Make sure to place your bids early to secure your piece of digital art.</p>
          <a href="#" className='link'>Check them out <BsArrowRight/></a>
        </div>
      </div>
    </div>
  )
}
