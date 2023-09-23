import React, { useEffect, useReducer, useState } from 'react'
import { baseUrl } from '../../../Constant/constants'
import { Link } from 'react-router-dom'
import Navbar from '../../Header/Navbar/Navbar'
import Confirmation from "../Confirmation/Confirmation"
import FormStyles from './FormStyles'


const Register = () => {

    const [categories, setCategories] = useState([])
    const [isShow, setIsShow] = useState(true)
    const [state, dispatch] = useReducer((state, action) => {
        return {
            ...state,
            ...action
        }
    }, 
    {
        email:"",
        phone_number:"",
        team_name: "",
        group_size: 0,
        project_topic:"",
        category: 0,
        privacy_poclicy_accepted: false
    })

    useEffect(() => {
        fetch(`${baseUrl}/hackathon/categories-list`)
        .then(response => response.json())
        .then(data => setCategories(data))
        .catch(error => console.log("Error: ", error))
    }, [])

    const categoryElements = categories.map(category => {
        return <option key={category.id} value={category.name}>{category.name}</option>
    })

    const register = (e) => {
        e.preventDefault();

        if (state.category === '') {
            return;
        }

        if (state.group_size === '') {
            return;
        }

        fetch(`${baseUrl}/hackathon/registration`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(state)
        })
        .then(res => {
            if(res.status) {
                setIsShow(false);
                console.log("Successfully registered!");
            }
        })
        .catch(error => console.log("Error: ", error))
    }

  return (
    <div  style={FormStyles.dimension}>
        <Navbar Link={Link} register={true}/>  
        {isShow ?  
        <div className='form-container'>
            <div className='f-c-inner-dev'>
                <img className='register-img' src="images/register.png" alt="Register Image" />
            </div>
            <div className='f-c-inner-dev'>
                <form>
                    <div className='upper-form-control-group upper-form-control-group-top'>
                        <h3 className='span-color register-title'>Register</h3>
                        <div className='man-woman'>
                            <span>Be part of this movement!</span>
                            <div className='mw'>
                                <img src="images/p1.png" alt="p1"/>
                                <img src="images/p2.png" alt="p2" />
                            </div>
                        </div>
                        <h6>CREATE YOUR ACCOUNT</h6>
                    </div>
                    <div className='upper-form-control-group'>
                        <div className="group-controls">
                            <div className="form-control">
                                <label htmlFor="team_name">Team’s Name</label>
                                <input
                                    required
                                    type="text" 
                                    value={state.team_name} 
                                    onChange={(e) => dispatch({team_name: e.target.value})}
                                    name='team_name' 
                                    id='team_name' 
                                    placeholder='Enter the name of your group' 
                                />
                            </div>
                            <div className="form-control">
                                <label htmlFor="phone_number">Phone</label>
                                <input 
                                    required
                                    type="text" 
                                    name='phone_number' 
                                    value={state.phone_number} 
                                    onChange={(e) => dispatch({phone_number: e.target.value})}
                                    id='phone_number' 
                                    placeholder='Enter your phone number' 
                                />
                            </div>
                        </div>
                        <div className="group-controls">
                            <div className="form-control">
                                <label htmlFor="email">Email</label>
                                <input 
                                    required
                                    type="email" 
                                    name='email' 
                                    value={state.email}
                                    onChange={(e) => dispatch({email: e.target.value})} 
                                    id='email' 
                                    placeholder='Enter your email address' 
                                />
                            </div>
                            <div className="form-control">
                                <label htmlFor="project_topic">
                                    Project Topic</label>
                                <input 
                                    required
                                    type="text" 
                                    name='project_topic' 
                                    value={state.project_topic} 
                                    onChange={(e) => dispatch({project_topic: e.target.value})}
                                    id='project_topic' 
                                    placeholder='What is your group project topic' 
                                />
                            </div>
                        </div>
                        <div className="group-controls select-group">
                            <div className="form-control">
                                <label htmlFor="category">Category</label>
                                <select 
                                    name="category" 
                                    id="category" 
                                    // value={state.category}
                                    defaultValue={state.category}
                                    onChange={(e) => dispatch({category: e.target.selectedIndex})}
                                >
                                    <option value=""> -- Select Category -- </option>
                                    {categoryElements}
                                </select>
                            </div>
                            <div className="form-control">
                                <label htmlFor="group_size">Group Size</label>
                                <select 
                                    required
                                    name="group_size" 
                                    id="group_size" 
                                    defaultValue={state.group_size}
                                    onChange={(e) => dispatch({group_size: e.target.selectedIndex})}
                                >
                                    <option value=""> -- Select Number -- </option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                        </div>
                        <i className='italic-text span-color'>Please review your registration details before submitting</i>
                        <div className="group-controls">
                            <div className="form-control policy-block">
                                <input 
                                    required
                                    type="checkbox" 
                                    checked={state.privacy_poclicy_accepted} 
                                    onChange={(e) => dispatch({privacy_poclicy_accepted: !state.privacy_poclicy_accepted})}
                                    name="privacy_option" 
                                    id="privacy_option" 
                                />
                                <label htmlFor="privacy_option">I agreed with the event terms and conditions and privacy policy</label>
                            </div>
                        </div>
                        <button type="button" className="btn-register btn-register-large" onClick={register}>Register Now</button>
                    </div>
                </form>
            </div>
        </div>
        : 
        <Confirmation />
    }  
    </div>
  )
}

export default Register