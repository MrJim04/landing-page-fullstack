"use client";

import React, { useEffect } from 'react'
import ScrollPage from 'scrollpage-js';
import SlideCenteredText from './SlideCenteredText';
import SlideIntro from './SlideIntro';
import ExportData from '../../../data/data';

function Slide() {

    const mottoData = ExportData().content.motto

    useEffect(() => {
        const scrollPage = new ScrollPage("#main-page",{
            animation:"easeInOutCirc",//default easeInSine
            time:1000, //default 500
            scrollBar:false,//show or hide scrollbar (default false),
            pageSelectedClass:"active",//css class name for page element if active or selected (default 'active')
            menuSelectedClass:"active",//css class name for menu element if active or selected (default 'active')
        });
    }, []);

  return (
    <>
        <div  id="main-page">
            {
                mottoData.map((item) => (
                    <SlideCenteredText slideText={item}></SlideCenteredText>
                ))
            }
            <SlideIntro></SlideIntro>
        </div>
    </>
  )
}

export default Slide