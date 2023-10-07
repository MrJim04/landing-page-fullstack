import React from 'react'
import LinkButton from './LinkButton'
import Hgroup from './Hgroup'

function Intro({buttonLink="#", introHeader, introSubHeader}) {
  return (
    <>
        <header class="container">
            <Hgroup header={introHeader} subHeader={introSubHeader}></Hgroup>
            <p>
                <LinkButton name='Get started' link={buttonLink}></LinkButton>
            </p>
        </header>
    </>
  )
}

export default Intro