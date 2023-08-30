import React from 'react'

function CenteredText({text = 'Text', size='text-2xl', mdSize='md:text-6xl'}) {
  return (
    <>
        <div className="h-screen flex items-center justify-center">
            <h1 className={size + " " + mdSize + " font-bold text-gray-50"}>{text}</h1>
        </div>
    </>
  )
}

export default CenteredText