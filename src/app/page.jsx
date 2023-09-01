import React from 'react'
import LandingLeftSideComponents from '@/components/LandingPage/LandingLeftSideComponents'
import LandingRightSideComponents from '@/components/LandingPage/LandingRightSideComponents'

export default function Home() {

  return (
    <>
      <div className="m-5 flex flex-col md:flex-row gap-4">
        <LandingRightSideComponents></LandingRightSideComponents>
        <LandingLeftSideComponents></LandingLeftSideComponents>
      </div>
    </>
  )
}
