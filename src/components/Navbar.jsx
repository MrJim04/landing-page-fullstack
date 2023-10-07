import React from 'react'
import Dropdown from './Dropdown'

function Navbar({name="Name"}) {
  return (
    <>
        <nav class="container-fluid">
          <ul>
            <li>
              <a href="/" class="contrast" onclick="event.preventDefault()"
                ><strong>{name}</strong></a>
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