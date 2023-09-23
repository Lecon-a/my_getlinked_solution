import React from 'react'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='top-footer'>
            <div className='first_container'>
                <div className='logo'><span className='logo-get'>get</span><span>linked</span></div>
                <p className='paragraph footer-para'>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
                <div className='legal'>
                    <span className='div'>Terms of Use</span>
                    <span className='div'>Privacy Policy</span>
                </div>
            </div>
            <div className='left_align'>
                <ul>
                    <li className='span-color'>Useful Links</li>
                    <li>Overview</li>
                    <li>Timeline</li>
                    <li>FAQS</li>
                    <li>Register</li>
                    <li className='span-color' style={{alignItems: "center"}}>
                        <span style={{marginRight: "16px"}}>Follow us</span>
                        <img className='social-icon' src="images/instagram.png" alt="Social Icon" />
                        <img className='social-icon' src="images/twitter.png" alt="Social Icon" />
                        <img className='social-icon' src="images/facebook.png" alt="Social Icon" />
                        <img className='social-icon' src="images/linkedln.png" alt="Social Icon" />
                    </li>
                </ul>
            </div>
            <div className='right_align'>
                <ul>
                    <li className='span-color'>Contact Us</li>
                    <li className='footer-item'>
                        <img src="images/phone.png" alt="Phone" />
                        <span>+234 6707653444</span>
                    </li>
                    <li className='footer-item'>
                        <img src="images/location.png" alt="Location" />
                        <span>27,Alara Street Yaba 100012 Lagos State</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className='footer' style={{position: "relative"}}>
            <img className='footer-star' src="images/sata_gra.png" alt="Star" />
            <p className='paragraph'>All rights reserved. © getlinked Ltd.</p>
        </div>
    </div>
  )
}

export default Footer