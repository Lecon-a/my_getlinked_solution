import React from 'react'
import { faqs } from '../../../Constant/constants'

const Faq = () => {

  const listElements = faqs.map((faq, index) => {
    return <li key={index + 1}>
        <p key={index + "-" + index}>{faq}</p>
        <span className='span-color'>+</span>
      </li>
  })

  return (
    <>
        <div className='faq-wrapper'>
            <div className='faq-content faq_list_container'>
                <div className='faq_imgs'>
                    <img className='faq_star fs_1' src="images/star_pu.png" alt="Star_2" />
                    <img className='faq_star fs_2' src="images/star_pu.png" alt="Star_2" />
                    <img className='faq_star fs_3' src="images/star_pu.png" alt="Star_2" />
                    <img className='faq_star fs_4' src="images/star_gra.png" alt="Star_2" />
                    <img className='faq_star fs_5' src="images/star.png" alt="Star_2" />
                </div>
                <h3 className='title'>Frequently Ask <br /><span className='span-color'>Question</span></h3>
                <p className='paragraph'>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
                <ul className='faq_list'>
                    {listElements}
                </ul>
            </div>
            <div className='faq-content'>
                <div className='group_question_mark'>
                    <img className='faq_mark fsm_1' src="images/question_mark.png" alt="Star_2" />
                    <img className='faq_mark fsm_2' src="images/question_mark.png" alt="Star_2" />
                    <img className='faq_mark fsm_4' src="images/question_mark.png" alt="Star_2" />
                </div>
                <img className='faq-image' src="images/cwok_casual.png" alt="Idea"/>
            </div>
        </div>
        <hr className='idea-divider' />
    </>
  )
}

export default Faq