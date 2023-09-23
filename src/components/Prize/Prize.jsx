import React from 'react'

const Prize = () => {
  return (
    <div className='prize-wrapper'>
        <div className='prize-title'>
            <h3 className='title'>Prize and <br /><span className='span-color'>Rewards</span></h3>
            <p className='paragraph'>Highlight of the prizes or rewards for winners and for participants.</p>
            <img src="images/star.png" alt="Star_2" />
        </div>
        <div className='prize-content'>
            <div className='prize-image p-c-mini'>
                <img className='prize-background-purple-lens' src='images/Purple-Lens-Flare-PNG.png' alt='Purple Lens Flare' />
                <img className='p-c-trophy-big' src="images/trophy.png" alt="Trophy" />
            </div>
            <img className='prize-image' src="images/Rewards.png" alt="Trophy" />
        </div>
    </div>
  )
}

export default Prize