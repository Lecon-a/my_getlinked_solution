import React from 'react'

const Rule = () => {
  return (
    <>
        <div className='rule-wrapper'>
            <img className='star_' src="images/star_.png" alt="Star_2" />
            <div className='rule-content'>
                <img className='rule-star' src="images/star_rule.png" alt="Star_2" />
                <h3 className='title'>Rules and <br /><span className='span-color'>Guidelines</span></h3>
                <p className='parapgraph'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
            </div>
            <img className='rule-image' src="images/rule.png" alt="Rule"/>
        </div>
        <hr className='rule-divider' />
    </>
  )
}

export default Rule