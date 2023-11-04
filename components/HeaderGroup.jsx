import React from 'react'

function HeaderGroup({header="Header", subHeader="This is the introduction sub header"}) {
  return (
    <>
        <hgroup>
            <h2>{header}</h2>
            <h3>{subHeader}</h3>
        </hgroup>
    </>
  )
}

export default HeaderGroup