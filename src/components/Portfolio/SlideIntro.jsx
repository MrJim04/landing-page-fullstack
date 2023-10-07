"use client";

import React from 'react'
import { useState } from 'react'
import TextCard from '../TextCard'
import MainButton from '../MainButton'
import Message from '../Message'
import ExportData from '../../../data/data';

function SlideIntro() {

  const introData = ExportData().content.introduction

  return (
    <>
        <div id="page" className="page-item">
            <div className="m-10 flex flex-col items-center justify-center md:flex-row gap-10 md:pt-20">
                <TextCard text={introData}></TextCard>
                <MainButton text="Proceed" href="/main"></MainButton>
            </div>
        </div>
    </>
  )
}

export default SlideIntro