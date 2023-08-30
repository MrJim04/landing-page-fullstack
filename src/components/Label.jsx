import React from 'react'

function Label({text = "Label", background="bg-gray-800"}) {
  return (
    <>
        <div className={background + " text-gray-50 font-bold text-center p-1 rounded-md"}>
            {text}
        </div>
    </>
  )
}

export default Label