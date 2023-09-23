import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar/Navbar'
import Banner from '../Banner/Banner'
import Idea from './Idea/Idea'
import Rule from './Rule/Rule'
import Judge from './Judge/Judge'
import Faq from './FAQ/Faq'
import Timeline from '../Timeline/Timeline'
import Prize from '../Prize/Prize'
import Partner from '../Partner/Partner'
import Privacy from '../Privacy/Privacy'
import Footer from '../Footer/Footer'
import FormStyles from "../FormComponent/Register/FormStyles"


const Body = () => {
  return (
    <div className='header-wrapper' style={FormStyles.dimension}>
        <Navbar />
        <Banner />
        <Idea />
        <Rule />
        <Judge />
        <Faq />
        <Timeline />
        <Prize />
        <Partner />
        <Privacy />
        <Footer />
    </div>
  )
}

export default Body;