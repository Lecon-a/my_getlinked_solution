import React from 'react'
import { criteria } from '../../../Constant/constants'

const Judge = () => {

  const criteriaElements = criteria.map((criterium, idx) => {
    return <li key={idx}>
      <span className='span-color'>{criterium.point}</span> 
      {criterium.description}
    </li>
  })

  return (
    <>
      <div className='judge-wrapper'>
          <div className='judge-content'>
                <img className='judge_star_pu' src="images/star_pu_confirm.png" alt="Star_j"/>
                <img className='judge_star_mid' src="images/judge_star_mid.png" alt="Star_j"/>
                <div className='judges-images'>
                  <img className='judge-ellispe' src="images/ellipse.png" alt="Star_j"/>
                  <img className='judge-image' src="images/people.png" alt="Idea"/>
                </div>
                <img className='js_bottom' src="images/star.png" alt="Star_j"/>
          </div>
          <div className='judge-content'>
              <h3 className='title mb-4'>Judging Criteria<br /><span className='span-color'>Key attributes</span></h3>
              <ul className='judge_list'>
                  {criteriaElements}
              </ul>
              <button type="button" className="btn-register judge_list_btn">Read More</button>
          </div>
      </div>
      <hr className='judge-divider' />
    </>
  )
}

export default Judge