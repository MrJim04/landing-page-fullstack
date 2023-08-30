import React from 'react'
import SideImage from '../SideImage'
import MainButton from '../MainButton'

function LandingLeftSideComponents() {
  return (
    <div className="container
        mx-auto
        md:py-5 
        md:px-10">
          <SideImage></SideImage>
          <div className="container mt-4">
            <div className="grid grid-cols-2 gap-4"> 
                <MainButton text='Resume' href="/resume"></MainButton>
                <MainButton text='Portfolio' href="/portfolio"></MainButton>
            </div>
          </div>
    </div>
  )
}

export default LandingLeftSideComponents