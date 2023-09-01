import React from 'react'

function Label({text = "Label", background, listKey}) {

  return (
    <>
        <div className={`text-gray-50 font-bold text-center p-1 text-sm md:text-lg rounded-sm md:rounded-md`} style={{backgroundColor: background}}>
            {text}
        </div>
    </>
  )
}

export default Label