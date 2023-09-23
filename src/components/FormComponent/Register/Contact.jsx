import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from '../../../Constant/constants'
import Navbar from '../../Header/Navbar/Navbar'
import FormStyles from './FormStyles'

const Contact = () => {

    const [state, dispatch] = useReducer((state, action) => ({
        ...state,
        ...action
    }), {
            first_name: "",
            phone_number:"",
            email:"",
            message: ""
    })

    const contact_us = (e) => {
        e.preventDefault();

        if (state.phone_number === '') {
            return;
        }

        if (state.email === '') {
            return;
        }

        if (state.message === '') {
            return;
        } 

        fetch(`${baseUrl}/hackathon/contact-form`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(state)
        })
        .then(res => {
            if(res.status) {
                console.log("Your message has been received!");
            }
        })
        .catch(error => console.log("Error: ", error))
    }

  return (

    <div style={FormStyles.dimension}>
        <Navbar Link={Link} contact_us={true}/>
        <div className='form-container'>
            <div className='f-c-inner-dev contact-us-info'>
                <h3 className='span-color'>Get in touch</h3>
                <div className='c-u-detail'>
                    <p>Contact<br />Information</p>
                    <p>27,Alara Street<br />Yaba 100012<br />Lagos State</p>
                    <p>Call Us : 07067981819</p>
                    <p>we are open from Monday-Friday<br />08:00am - 05:00pm</p>
                </div>
                <div>
                    <p className='span-color'>Share on</p>
                    <div className='contact-icons'>
                        <Link to="#">
                            <img className='social-icon' src="images/instagram.png" alt="Social Icon" />
                        </Link>
                        <Link to="#">
                            <img className='social-icon' src="images/twitter.png" alt="Social Icon" />
                        </Link>
                        <Link to="#">
                            <img className='social-icon' src="images/facebook.png" alt="Social Icon" />
                        </Link>
                        <Link to="#">
                            <img className='social-icon' src="images/linkedln.png" alt="Social Icon" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='f-c-inner-dev'>
                <form className='contact-form'>
                <div className='upper-form-control-group contact-container'>

                    <h4 className='span-color'>Questions or need assistance?<br />Let us know about it!</h4>
                    <p className='show-on-mobile'>Email us below to any question related to our event</p>
                    
                        <div className="contact-form-control">
                            <input 
                                type="text" 
                                name="first_name" 
                                id="first_name" 
                                placeholder="Team's Name" 
                                value={state.first_name}
                                onChange={(e) => dispatch({first_name: e.target.value})}
                                required
                            />
                        </div>
                        <div className="contact-form-control">
                            <input 
                                type="text" 
                                name="phone_number" 
                                id="phone_number" 
                                value={state.phone_number}
                                onChange={(e) => dispatch({phone_number: e.target.value})}
                                placeholder='Phone Number' 
                                required
                            />
                        </div>
                        <div className="contact-form-control">
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                value={state.email}
                                onChange={(e) => dispatch({email: e.target.value})}
                                placeholder='Mail' 
                                required
                            />
                        </div>
                        <div className="contact-form-control">
                            <textarea 
                                name="message" 
                                id="message"
                                spellCheck={true}
                                value={state.message}
                                placeholder='Message'
                                onChange={(e) => dispatch({message: e.target.value})}
                            />
                        </div>
                        <div className="contact-form-control">
                            <button type="button" className="btn-register" onClick={contact_us}>Submit</button>
                        </div>
                    </div>
                </form>
                <div className='footer-contact-icons'>
                    <p className='span-color'>Share on</p>
                    <div className='contact-icons'>
                        <Link to="#">
                            <img className='social-icon' src="images/instagram.png" alt="Social Icon" />
                        </Link>
                        <Link to="#">
                            <img className='social-icon' src="images/twitter.png" alt="Social Icon" />
                        </Link>
                        <Link to="#">
                            <img className='social-icon' src="images/facebook.png" alt="Social Icon" />
                        </Link>
                        <Link to="#">
                            <img className='social-icon' src="images/linkedln.png" alt="Social Icon" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        </div>
  )
}

export default Contact