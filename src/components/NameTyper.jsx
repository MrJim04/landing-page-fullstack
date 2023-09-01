"use client";

import React from 'react'
import Typed from 'typed.js';
import ExportData from '../../data/data';

function NameTyper() {
    
    const data = ExportData()
    const typedStrings = data.info.profession
    typedStrings.unshift(data.info.name)

    const el = React.useRef(null)

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: typedStrings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="font-mono 
          font-bold 
          text-gray-50 
          text-4xl 
          md:text-6xl 
          text-center 
          md:text-left 
          uppercase 
          py-20 
          md:ml-10">
          <span ref={el}></span>
      </div>
    </> 
  )
}

export default NameTyper