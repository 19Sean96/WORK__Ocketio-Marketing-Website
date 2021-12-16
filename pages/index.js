import {useState, useEffect} from 'react'

import Header from "../components/Header";
import { Hero } from "../components/Heros/homepage";
import {
  FirstBanner,
  WhoSection,
  WhatSection,
} from "../components/Body/homepage";

export default function Home() {

  const [mouseCoord, setMouseCoord] = useState([0,0])
  const remapNum = (oldVal, oldMin, oldMax, newMin, newMax) =>
    ((oldVal - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin;

  function handleMouseMove(e) {
    // console.log(e.view);
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const minX = 0;
    const minY = 0;
    const maxX = innerWidth;
    const maxY = innerHeight;
    const newMin = -1;
    const newMax = 1;


    const newX = remapNum(clientX, minX, maxX, newMin, newMax);
    const newY = remapNum(clientY, minY, maxY, newMin, newMax);

    setMouseCoord([newX, newY]);
  }



  return (
    <main className="main" id="main" onMouseMove={e => handleMouseMove(e)}>
      <Header />
      <Hero mouseCoord={mouseCoord}/>
      <FirstBanner />
      <WhoSection />
      <WhatSection />
    </main>
  );
}
