import React from 'react'
import Dropdown from './Dropdown'

function Navbar({text="Name", data}) {
  return (
    <>
        <nav className="fixed container-fluid">
          <ul>
            <li>
              <a href="/" className="contrast"><strong>{text}</strong></a>
            </li>
          </ul>
          <ul>
            <li>
              <Dropdown text='Github'data={data}></Dropdown>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Navbar