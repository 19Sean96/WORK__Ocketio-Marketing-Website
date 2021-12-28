import { useState, useEffect } from "react";

import Header from "../../components/Header";
import { ContactPortal, MoreContact, ContactFAQ } from "../../components/Body/contact";

import { useAppContext } from "../../Context";

export default function Contact() {
  const { mouseCoord, scrollOffset, isMobile, handleMouseMove } = useAppContext()

  return (
    <main className="main" id="main">
      <Header isMobile={isMobile} scrollOffset={scrollOffset}/>
      <ContactPortal />
      <MoreContact />
      <ContactFAQ />
    </main>
  );
}
