import React from 'react'
import HeaderGroup from './HeaderGroup'

function TextPost({header="Post heading", subHeader="This is post sub heading", body}) {
  return (
    <>
        <HeaderGroup header={header} subHeader={subHeader}></HeaderGroup>
        <p>
            {body}
        </p>
    </>
  )
}

export default TextPost