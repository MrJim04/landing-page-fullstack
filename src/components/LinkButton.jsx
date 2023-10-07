import React from 'react'

function LinkButton({name="Name", link="#"}) {
  return (
    <>
        <a href={link} role="button" onclick="event.preventDefault()">{name}</a>
    </>
  )
}

export default LinkButton