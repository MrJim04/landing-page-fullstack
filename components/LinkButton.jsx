import React from 'react'

function LinkButton({name="Name", link="#"}) {
  return (
    <>
        <a href={link} role="button">{name}</a>
    </>
  )
}

export default LinkButton