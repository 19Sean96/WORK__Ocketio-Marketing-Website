import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
const AppContext = createContext();

export function AppWrapper({ children }) {
	const router = useRouter();
	// Holds the value of the number of pixels scrolled down on the page
	const [scrollOffset, setScrollOffset] = useState(0);
	// Describes if the viewport width is mobile or desktop (875px or less = mobile)
	const [isMobile, setMobile] = useState(null);
  // Dimensions of browser window
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});
	// For managing certain styling where element is on dark background
	const [headerDarkMode, setHeaderDarkMode] = useState(false);
	const [footerDarkMode, setFooterDarkMode] = useState(false);

	const headerDarkModeURLs = [
		"/features",
		"/blog",
		"/blog/[category]",
		"/pricing",
	];

	const footerDarkModeURLs = ["/", "features", "/blog", "/blog/[category]"];

	useEffect(() => {

    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    setMobile(window.innerWidth < 875)

		const scrollHandler = () => {
			setScrollOffset(
				/^((?!chrome|android).)*safari/i.test(navigator.userAgent)
					? 0
					: window.pageYOffset
			);
		};
		const resizeHandler = () =>
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});

		window.addEventListener("scroll", scrollHandler);
		window.addEventListener("resize", resizeHandler);

		return () => {
			window.removeEventListener("scroll", scrollHandler);
			window.removeEventListener("resize", resizeHandler);
		};
	}, []);

  useEffect(() => setMobile(windowSize.width < 875), [windowSize.width])

	useEffect(() => {
		setHeaderDarkMode(headerDarkModeURLs.some((url) => router.pathname == url));
		setFooterDarkMode(footerDarkModeURLs.some((url) => router.pathname == url));
	}, [router.asPath]);

	return (
		<AppContext.Provider
			value={{
				scrollOffset,
				isMobile,
        windowSize,
				headerDarkMode,
				footerDarkMode,
			}}>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
