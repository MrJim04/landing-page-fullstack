import React from 'react'
import CenteredText from '../CenteredText'

function SlideCenteredText({slideText = 'Text'}) {
  return (
    <>
        <div  id="page" className="page-item">
            <CenteredText text={slideText} size="text-sm" mdSize="md:text-5xl"></CenteredText>
        </div>
    </>
  )
}

export default SlideCenteredText