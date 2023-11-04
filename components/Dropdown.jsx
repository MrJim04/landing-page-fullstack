import React from 'react'

function Dropdown({text="Name", data}) {
  return (
    <>
        <details role="list" dir="rtl">
            <summary aria-haspopup="listbox" role="link" className="contrast">{text}</summary>
            <ul role="listbox">
                {data.map((d) => {
              if (d.type == "repository") {
                return (
                  <li><a href={d.url}>{d.name}</a></li>
                )
              }
            })}
            </ul>
        </details>
    </>
  )
}

export default Dropdown