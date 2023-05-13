import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const Navbar = () =>{
  const [ isOpen, setIsOpen] = useState(false)

  return(
    <nav class="navbar is-transparent pt-4" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">

        {/* <figure class="image is-64x64">
          <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
        </figure> */}
        <div className='navbar-item is-rounded'>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'red'}}>
            <p className='is-size-3 has-text-weight-medium has-text-centered has-text-white'>D</p>
          </div>
          {/* <div className='box is-danger'>
          </div> */}
        </div>

        <div role="button" onClick={()=> setIsOpen(!isOpen)} class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div id="navbarBasicExample" class={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <div class="navbar-end">
          <div class="navbar-item">
            <Link to="#" className="navbar-item">
              HOME
            </Link>
            <Link to="#" className="navbar-item is-active">
              BLOG
            </Link>
            <Link to="#" className="navbar-item">
              BOOKMARKS
            </Link>
            <Link to="#" className="navbar-item">
              ELEMENTS
            </Link>
            <Link to="#" className="navbar-item">
              PLAYLISTS
            </Link>
            <Link to="#" className="navbar-item">
              BOOKS
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar