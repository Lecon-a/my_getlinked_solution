import React from 'react'
import './App.css'
import Body from './components/Header/Body'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/FormComponent/Register/Contact';
import Register from './components/FormComponent/Register/Register';
import Layout from './components/Layout';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Body />} />
          <Route path="registration" element={<Register />} />
          <Route path="contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
