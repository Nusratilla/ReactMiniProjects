import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../data'
import Logo from '../images/n-logo.png'

const SideBar = () => {
  return (
    <nav>
      <div className="side-bar">
        <Link to='/' className='logo'>
          <img src={Logo} alt="Logo" />
        </Link>
        <ul className="side-links">
          {
            links.map(({ name, path }, index) => {
              return (
                <li>
                  <NavLink to={path}>{ name }</NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}

export default SideBar