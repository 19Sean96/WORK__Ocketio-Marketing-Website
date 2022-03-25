import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {

  // Holds the X and Y position (in pixels) of the cursor in direct relation to the monitor
  const [mousePositionPixels, setMousePositionPixels] = useState([0,0])

  // Holds the value of the number of pixels scrolled down on the page
  const [scrollOffset, setScrollOffset] = useState(0);

  // Describes if the viewport width is mobile or desktop (875px or less = mobile)
  const [isMobile, setMobile] = useState();

  // Simple boolean hook which tracks whether the browser is Safari based or not
  const [isSafari, setIsSafari] = useState(null)
  
  const handleMouseMove = ( { clientX, clientY} ) => setMousePositionPixels([clientX, clientY])

  useEffect(() => {
    handleResize();
    function handleScroll() {
      setScrollOffset(window.pageYOffset);
    }

    function handleResize() {
      if (window.innerWidth < 875) {
        setMobile(true);
        console.log("MOBILE");
      } else {
        setMobile(false);
        console.log("DESKTOP");
      }
    }

    let safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    setIsSafari(safari)

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        mousePositionPixels,
        scrollOffset,
        isMobile,
        handleMouseMove,
        isSafari
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
