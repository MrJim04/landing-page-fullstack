import React from 'react'

function Message({text="Your message content goes here.", background="bg-gray-900", messageEvent}) {

    
  return (
    <>
        <div className="container mx-auto">
            <div className={background + " relative text-white p-5 rounded-sm"}>
                {text}
                <button className="absolute top-0 right-0 mt-2 mr-2 text-gray-50 hover:text-gray-300" onClick={messageEvent}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    </>
  )
}

export default Message