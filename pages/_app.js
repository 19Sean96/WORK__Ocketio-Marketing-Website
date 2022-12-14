import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import {
	GTM_ID,
	pageview,
	datalayerloaded,
	gtmVirtualPageView,
} from "@lib/gtm";
import { AppWrapper } from "@context/app";
import { BlogWrapper } from "@context/blog";
import Header from "@modules/header";
import Footer from "@modules/footer";
import "@styles/main.scss";
import Transition from "@context/Transition";
import "animate.css";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const mainDataLayer = {
			pageTypeName: pageProps.page || null,
			url: router.pathname,
		};
		gtmVirtualPageView(mainDataLayer);
	}, [pageProps]);

	return (
		<>
			<Script id="google-tag-manager" strategy="afterInteractive">
				{`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.GTM_TESTING}');
        `}
			</Script>
			{/* <Transition> */}
				<AppWrapper>
					<BlogWrapper>
						<Header />
						<Component {...pageProps} />
						<Footer />
					</BlogWrapper>
				</AppWrapper>
			{/* </Transition> */}
		</>
	);
}

export default MyApp;
