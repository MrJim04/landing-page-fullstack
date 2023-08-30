"use client";

import React from 'react'
import { useRouter } from 'next/navigation'

function MainButton({text = "Button", href}) {

  const router = useRouter()

  const buttonEventHandler = () => {
    router.push(href)
  }

  return (
    <>
        <button className="bg-gray-900 
        text-gray-50 
        p-10 
        md:text-2xl 
        text-center 
        font-bold 
        uppercase 
        hover:bg-gray-800
        rounded-sm" onClick={buttonEventHandler}>
            {text}
        </button>
    </>
  )
}

export default MainButton