import React from 'react'
import Dropdown from './Dropdown'

function Navbar({name="Name"}) {
  return (
    <>
        <nav className="container-fluid">
          <ul>
            <li>
              <a href="/" className="contrast"><strong>{name}</strong></a>
            </li>
          </ul>
          <ul>
            <li>
              <Dropdown></Dropdown>
            </li>
            <li>
              <Dropdown></Dropdown>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Navbar