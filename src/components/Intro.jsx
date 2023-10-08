import React from 'react'
import LinkButton from './LinkButton'
import HeaderGroup from './HeaderGroup'

function Intro({buttonLink="#", introHeader, introSubHeader}) {
  return (
    <>
        <header className="container">
            <HeaderGroup header={introHeader} subHeader={introSubHeader}></HeaderGroup>
            <p>
                <LinkButton name='Get started' link={buttonLink}></LinkButton>
            </p>
        </header>
    </>
  )
}

export default Intro