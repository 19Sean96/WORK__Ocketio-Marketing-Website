import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
const AppContext = createContext();

export function AppWrapper({ children }) {
  const router = useRouter();
  // Holds the X and Y position (in pixels) of the cursor in direct relation to the monitor
  const [mousePositionPixels, setMousePositionPixels] = useState([0, 0]);

  // Holds the value of the number of pixels scrolled down on the page
  const [scrollOffset, setScrollOffset] = useState(0);

  // Describes if the viewport width is mobile or desktop (875px or less = mobile)
  const [isMobile, setMobile] = useState();

  // Simple boolean hook which tracks whether the browser is Safari based or not
  const [isSafari, setIsSafari] = useState(null);

  const [windowInnerHeight, setWindowInnerHeight] = useState();
  const [windowScrollY, setWindowScrollY] = useState();

  // For managing certain styling where element is on dark background
  const [headerDarkMode, setHeaderDarkMode] = useState(false);
  const [footerDarkMode, setFooterDarkMode] = useState(false);

  const handleMouseMove = ({ clientX, clientY }) =>
    setMousePositionPixels([clientX, clientY]);

  useEffect(() => {
    handleResize();
    function handleScroll() {

      if (isSafari) setScrollOffset(0)
      else setScrollOffset(window.pageYOffset);
      setWindowInnerHeight(window.innerHeight);
      setWindowScrollY(window.scrollY);
    }

    function handleResize() {
      if (window.innerWidth < 875) {
        setMobile(true);
        console.log("MOBILE");
      } else {
        setMobile(false);
        console.log("DESKTOP");
      }
      setWindowInnerHeight(window.innerHeight);
      setWindowScrollY(window.scrollY);
    }

    let safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    setIsSafari(safari);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(router);
    if (
      router.pathname === "/features" ||
      router.pathname.includes("/blog") ||
      router.pathname === "/contact"
    ) {
      setHeaderDarkMode(true);
    } else setHeaderDarkMode(false);

    if (
      router.pathname === "/" ||
      router.pathname === "/features" ||
      router.pathname === "/blog/[category]" ||
      router.pathname === "/blog"
    ) {
      setFooterDarkMode(true);
    } else setFooterDarkMode(false);
  }, [router.asPath]);

  return (
    <AppContext.Provider
      value={{
        mousePositionPixels,
        scrollOffset,
        isMobile,
        handleMouseMove,
        isSafari,
        windowInnerHeight,
        windowScrollY,
        headerDarkMode,
        footerDarkMode
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
