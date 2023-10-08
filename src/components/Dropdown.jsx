import React from 'react'

function Dropdown({name="Name"}) {
  return (
    <>
        <details role="list" dir="rtl">
            <summary aria-haspopup="listbox" role="link" className="contrast">{name}</summary>
            <ul role="listbox">
                <li><a href="#">Auto</a></li>
                <li><a href="#">Light</a></li>
                <li><a href="#">Dark</a></li>
            </ul>
        </details>
    </>
  )
}

export default Dropdown