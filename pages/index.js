import { useState, useEffect } from "react";

import Header from "../components/Header";
import { Hero } from "../components/Heros/homepage";
import {
  FirstBanner,
  WhoSection,
  WhatSection,
} from "../components/Body/homepage";

import { useAppContext } from "../Context";

export default function Home() {

  const { mouseCoord, scrollOffset, isMobile, handleMouseMove } = useAppContext()

  return (
    <main className="main" id="main" onMouseMove={(e) => handleMouseMove(e)}>
      <Header isMobile={isMobile} scrollOffset={scrollOffset}/>
      <Hero mouseCoord={mouseCoord} offset={scrollOffset} />
      <FirstBanner />
      <WhoSection />
      <WhatSection />
    </main>
  );
}
