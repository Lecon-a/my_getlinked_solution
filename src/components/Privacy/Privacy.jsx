import React from 'react'

const Privacy = () => {
  return (
    <div className='privacy-wrapper'>
        <div className='p-w-word'>
            <div className='privacy-title-block'>
                <h3 className='title'>Privacy Policy and <br /><span className='span-color'>Terms</span></h3>
                <span className='last_updated'>Last updated on September 12, 2023</span>
                <p className='paragraph'>Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</p>
            </div>
            <div className='privacy-block'>
                <p className='paragraph'>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>
                <h6 className='span-color'>Licensing Policy</h6>
                <p>Here are terms of our Standard License:</p>
                <ul>
                    <li className='icon-list-parent'><span><img className='icon-list' src='images/list-icon.png' alt='List Icon'/></span>The Standard License grants you a non-exclusive right to navigate and register for our event</li>
                    <li className='icon-list-parent'><span><img className='icon-list' src='images/list-icon.png' alt='List Icon'/></span>You are licensed to use the item available at any free source sites, for your project developement</li>
                </ul>
                <button type="button" className="btn-register">Read More</button>
            </div>
        </div>
        <div className='privacy-images'>
            <img className='privacy-image' src="images/vector_behind_padlock.png" alt="Vector Padlock" />
            <img className='privacy-image ontop_image' src="images/padlock.png" alt="Padlock" />
        </div>
    </div>
  )
}

export default Privacy