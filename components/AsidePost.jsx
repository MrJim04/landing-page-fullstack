import React from 'react'

function AsidePost({header="Post heading", body="Post body", url, imageUrl}) {
  return (
    <>
        <a href={url} aria-label="Example">
            <img src={imageUrl} alt="image"/>
        </a>
        <p>
            <a href={url}>{header}</a>
            <br />
            <small>{body}</small>
        </p>
    </>
  )
}

export default AsidePost