import React from 'react'
import Hgroup from './hgroup'

function TextPost({postHeader="Post heading", postSubHeader="This is post sub heading"}) {
  return (
    <>
        <Hgroup header={postHeader} subHeader={postSubHeader}></Hgroup>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis est vel
            velit bibendum ultrices. Sed aliquam tortor vel odio fermentum ullamcorper eu vitae
            neque. Sed non diam at tellus venenatis viverra. Vestibulum et leo laoreet arcu tempor
            eleifend venenatis ac leo. Pellentesque euismod justo sed nisl sollicitudin varius. Duis
            venenatis nisl sit amet ante rutrum posuere. Etiam nec ullamcorper leo, sed placerat
            mauris.
        </p>
    </>
  )
}

export default TextPost