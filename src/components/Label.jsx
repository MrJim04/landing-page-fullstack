import React from 'react'

function Label({text = "Label", background="bg-gray-800"}) {
  return (
    <>
        <div className={background + " text-gray-50 font-bold text-center p-1 text-sm md:text-lg rounded-sm md:rounded-md"}>
            {text}
        </div>
    </>
  )
}

export default Label