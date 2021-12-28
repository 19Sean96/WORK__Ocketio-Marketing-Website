import { useState, useEffect } from "react";

import Header from "../../components/Header";

import { useAppContext } from "../../Context";

export default function Pricing() {
  const { mouseCoord, scrollOffset, isMobile, handleMouseMove } = useAppContext()

  return (
    <main className="main" id="main">
      <Header isMobile={isMobile}/>

    </main>
  );
}
