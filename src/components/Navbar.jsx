import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const Navbar = () =>{
  const [ isOpen, setIsOpen] = useState(false)

  return(
    <nav className="navbar is-transparent pt-4" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className='navbar-item is-rounded'>
          <div className='pt-0' style={{ 
            width: '50px', 
            height: '50px', 
            borderRadius: '50%', 
            background: 'linear-gradient(to right, #FF4B2B, #FF416C)'
            }}>
            <p className='is-size-3 has-text-weight-semibold has-text-centered has-text-white'>D</p>
          </div>
          {/* <div className='box is-danger'>
          </div> */}
        </div>

        <div role="button" onClick={()=> setIsOpen(!isOpen)} className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link to="#" className="is-family-secondary navbar-item is-primary">
              HOME
            </Link>
            <Link to="#" className="is-family-secondary navbar-item is-active">
              BLOG
            </Link>
            <Link to="#" className="is-family-secondary navbar-item">
              BOOKMARKS
            </Link>
            <Link to="#" className="is-family-secondary navbar-item">
              ELEMENTS
            </Link>
            <Link to="#" className="is-family-secondary navbar-item">
              PLAYLISTS
            </Link>
            <Link to="#" className="is-family-secondary navbar-item">
              BOOKS
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar