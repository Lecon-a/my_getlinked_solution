import React from 'react'

const Idea = () => {
  return (
    <>
      <div className='idea-wrapper'>
          <img className='idea-star idea-s-right' src="images/star_pu_confirm.png" alt="Idea"/>
          <img className='idea-star' src="images/star_gra.png" alt="Idea"/>
          <div className="idea-wrapper-inner">
              <img className='idea-image' src="images/big_idea.png" alt="Idea"/>
              <img className='idea-arrow' src="images/arrow.png" alt="Idea"/>
          </div>
          <div className='idea-content'>
              <h3 className='title'>Introduction to getlinked<br /><span className='span-color'>tech Hackathon 1.0</span></h3>
              <p className='paragraph'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
          </div> 
      </div>
      <hr className='idea-divider' />
    </>
  )
}

export default Idea