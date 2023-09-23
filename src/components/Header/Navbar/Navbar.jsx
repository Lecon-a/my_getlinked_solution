import React from 'react'
import { Link } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <>
        <img className='background-purple-lens' src='images/Purple-Lens-Flare-PNG.png' alt='Purple Lens Flare' />
        <div className='group-logo-navbar'>
            <Link className='logo-link' to="/">
                <div className='logo'><span className='logo-get'>get</span><span>linked</span></div>
            </Link>
            <div className='menu'>
              <nav class="navbar navbar-expand-lg bg-transparent text-white">
            <div class="container-fluid">

              <div class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span>
                  <img src="images/toggle-btn.png" alt="Toggle Image" />
                </span>
              </div>
              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav">
                        <li className="nav-item nav-text">
                            <Link className="nav-link text-white" aria-current="page" to="#">Timeline</Link>
                        </li>
                        <li className="nav-item nav-text">
                            <Link className="nav-link text-white" to="#">Overview</Link>
                        </li>
                        <li className="nav-item nav-text">
                            <Link className="nav-link text-white" to="#">FAQs</Link>
                        </li>
                        <li className="nav-item nav-text">
                            <Link className={true ? "nav-link custom-color" : "nav-link text-white"} to="/contact-us">Contact</Link>
                        </li>
                    </ul>
                    <Link className="btn-register btn-reg" to="/registration">Register</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <hr className='header-divider' />
    </>
  )
}

export default Navbar2