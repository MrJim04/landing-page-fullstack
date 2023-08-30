import React from 'react'
import Label from '../Label'

function LandingSkills() {
  return (
    <>
        <div className="container">
              <div className="grid grid-cols-3 grid-rows-3 gap-4 mb-20">

                <Label text='JavaScript' background="bg-yellow-500"></Label>
                <Label text='Python' background="bg-cyan-800"></Label>
                <Label text='React' background="bg-blue-800"></Label>
                
                <Label text='Next.js' background="bg-zinc-900"></Label>
                <Label text='Tailwind' background='bg-indigo-900'></Label>
                <Label text='Boostrap' background='bg-violet-700'></Label>

              </div>
        </div>
    </>
  )
}

export default LandingSkills