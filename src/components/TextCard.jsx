import React from 'react'

function TextCard({text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam molestias eius veritatis sunt ipsa assumenda rem dolorum itaque et incidunt sit, laborum, ab error nisi!'}) {
  return (
    <>
        <div className="bg-gray-900 rounded-sm">
            <div className="text-gray-50 text-3xl text-justify m-5">{text}</div>
        </div>
    </>
  )
}

export default TextCard

