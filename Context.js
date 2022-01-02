import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {

  // Holds the X and Y value of the mouse cursor position with a range [-1,1]
  const [mouseCoord, setMouseCoord] = useState([0, 0]);

  // Holds the X and Y position (in pixels) of the cursor in direct relation to the monitor
  const [mousePositionPixels, setMousePositionPixels] = useState([0,0])

  // Holds the value of the number of pixels scrolled down on the page
  const [scrollOffset, setScrollOffset] = useState(0);

  // Describes if the viewport width is mobile or desktop (875px or less = mobile)
  const [isMobile, setMobile] = useState();

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
    
    setMousePositionPixels([clientX, clientY])
    setMouseCoord([newX, newY]);
  }

  useEffect(() => {
    handleResize();

    function handleScroll() {
      setScrollOffset(window.pageYOffset);
    }

    function handleResize() {
      if (window.innerWidth <= 875) {
        setMobile(true);
        console.log("MOBILE");
      } else {
        setMobile(false);
        console.log("DESKTOP");
      }
    }

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
        mouseCoord,
        mousePositionPixels,
        scrollOffset,
        isMobile,
        handleMouseMove
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}