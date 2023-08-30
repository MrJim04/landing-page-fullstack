"use client";

import React, { useEffect } from 'react'
import ScrollPage from 'scrollpage-js';
import SlideCenteredText from './SlideCenteredText';
import SlideIntro from './SlideIntro';

function Slide() {

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
            <SlideCenteredText slideText="I will make your business accessible digitally"></SlideCenteredText>
            <SlideCenteredText slideText="Tell me what the problem and I will fix the problem"></SlideCenteredText>
            <SlideIntro></SlideIntro>
        </div>
    </>
  )
}

export default Slide