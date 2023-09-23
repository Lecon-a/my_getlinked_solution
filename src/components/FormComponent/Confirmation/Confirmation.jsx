import React from 'react'
import { Link } from 'react-router-dom'

const Confirmation = () => {
  return (
    <div className='confirmation-wrapper'>
        <img className='star_confirm' src='images/star_pu_confirm.png' alt='Star confirm' />
        <div className='confirmation-images'>
            <img src="images/successfully-done-5108472-4288033 1.png" alt="Done" />
            <img src="images/successful-man-3025713-2526911 1.png" alt="Man" />
        </div>
        <div>
            <h1>Congratulations<br />you have successfully Registered!</h1>
            <p>Yes, it was easy and you did it! check your mail box for next step</p>
        </div>
        <Link to="/" className="btn-register back-btn">Back</Link>
    </div>
  )
}

export default Confirmation
