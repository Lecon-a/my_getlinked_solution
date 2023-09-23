import React, { useEffect, useState } from 'react'
import Time from './Time'

const Banner = () => {

  return (
    <>
    <div className='banner-wrapper'>
        <div className='banner-text'>
            <p className='b-text-text'><i>Igniting a Revolution in HR Innovation</i></p>
            <img className='b-text-image' src="images/Vector.png" alt="Vectot" />
        </div>
        <div className='banner-content'>
            <div className='banner-left-content'>
                <img className='top-star' src="images/star.png" alt="Star" />
                <img className='right-star' src="images/brown-star.png" alt="Star_1" />
                <img className='big-star' src="images/1f4a5.png" alt="If4a5" />
                <h1 className='cover-text'>
                    <img className='globe-idea' src="images/Creative_1.png" alt="Creative" />
                    getlinked Tech<br />
                    <h1 className='cover-text-sub'>
                        Hackathon <span className='span-color'>1.0</span>
                        <img className='chain' src="images/chain-9365116-7621444.png" alt="Creative" />
                    </h1>
                </h1>
                <p className='welcome-text'>
                    Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
                </p>
                <button type="button" className="btn-register hm-btn">Register</button>
                <img className='rs-2' src="images/brown-star.png" alt="Star_2" />
                <Time />
            </div>
            <div className='banner-right-content'>
                <img className='b-r-c-man' src="images/man-wearing-smart-glasses-touching-virtual-screen 1man.png" alt="Man" />
                <img className='b-r-c-moon' src="images/image-banner.png" alt="Moon" />
            </div>
        </div>
    </div>
    <hr className='banner-divider' />
    </>
  )
}

export default Banner