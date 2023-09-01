"use client";

import React from 'react'
import { useState } from 'react'
import TextCard from '../TextCard'
import MainButton from '../MainButton'
import Message from '../Message'
import ExportData from '../../../data/data';

function SlideIntro() {

  const introData = ExportData().content.introduction

  const [showMessage, setShowMessage] = useState(false)

  const handleClick = () => {
    setShowMessage(true);
  };

  const handleClose = () => {
    setShowMessage(false);
  };


  return (
    <>
        <div id="page" className="page-item">
            <div className="m-10 flex flex-col items-center justify-center md:flex-row gap-10 md:pt-20">
                <TextCard text={introData}></TextCard>
                <div onClick={handleClick}>
                  <MainButton text="Proceed" ></MainButton>
                </div>
                <div className="absolute">
                  { showMessage &&
                    <Message text="This section is comming soon please back again later." background="bg-red-800" messageEvent={handleClose}></Message>
                  }   
                </div>
            </div>
        </div>
    </>
  )
}

export default SlideIntro