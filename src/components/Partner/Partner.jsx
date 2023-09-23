import React from 'react'

const Partner = () => {
  return (
    <div className='partner-wrapper'>
        <div className='partner-text'>
            <h3 className='title'>Partners and Sponsors</h3>
            <p className='paragraph'>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
        </div>
        <div className='partner-images'>
            <div className='p-i-partner'>
                <div className='sponsors'>
                    <img src="images/libertyassure.png" alt="Liberty Assure" />
                    <span className='c-circle'></span>
                </div>
                <div className='sponsors'>
                    <img src="images/libertypay.png" alt="Liberty Pay" />
                    <span className='c-circle'></span>
                </div>
                {/* <div className="vertical_divider"></div> */}
                <div className='sponsors last-si'>
                    <img className='p-last-img' src="images/winwise.png" alt="Win Wise" />
                </div>
            </div>
            <div className='p-i-partner partner_below'>
                <div className='partner_below'>
                    <img src="images/wisper.png" alt="Wisper" />
                    <span className='d-circle'></span>
                </div>
                {/* <div className="vertical_divider"></div> */}
                <div className='partner_below'>
                    <img src="images/paybox.png" alt="Paybox" />
                    <span className='d-circle'></span>
                </div>
                {/* <div className="vertical_divider"></div> */}
                <div className='partner_below last-si'>
                    <img className='p-last-img' src="images/vuzualplus.png" alt="Vuzual plus" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partner