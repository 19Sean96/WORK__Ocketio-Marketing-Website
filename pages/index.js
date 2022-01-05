import { useState, useEffect } from "react";

import Header from "../components/Header";
import { Hero } from "../components/Heros/homepage";
import {
  FirstBanner,
  WhoSection,
  WhatSection,
} from "../components/Body/homepage";
import EmailIntakeBanner from "../components/util/EmailIntakeBanner";

import { useAppContext } from "../Context";

export default function Home() {

  const { scrollOffset, handleMouseMove } = useAppContext()

  return (
    <main className="main" id="main" onMouseMove={(e) => handleMouseMove(e)}>
      <span id="vertLineCenter"></span>
      <Hero offset={scrollOffset} />
      <FirstBanner />
      <WhoSection />
      <WhatSection />
      <EmailIntakeBanner />
    </main>
  );
}
