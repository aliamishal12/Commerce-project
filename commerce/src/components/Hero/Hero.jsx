import React from 'react'
import abc from '../Assets/abc.png'
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
import './Hero.css'

const Hero = () => {
    return (
        <div>

            <div className='hero'>
                <div className="hero-left">
                    <h2>NEW ARRIVALS ONLY </h2>
                    <div>
                        <div className="hero-hand-icon">
                            <p> New </p>
                            <img src={abc} alt="" />
                        </div>
                        <p>collections</p>
                        <p>for everyone</p>
                    </div>
                    <div className='hero-latest-btn'>
                        <div> Latest Collection  </div>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
                <div className="hero-right">
                    <img src={hero_image} alt="" />
                </div>
            </div>


        </div>
    )
}

export default Hero
