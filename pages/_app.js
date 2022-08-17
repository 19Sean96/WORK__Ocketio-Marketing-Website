import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import {
  GTM_ID,
  pageview,
  datalayerloaded,
  gtmVirtualPageView,
} from "../lib/gtm";
import { AppWrapper } from "../Context";
import Header from "../components/Site.Globals/Header";
import Footer from "../components/Site.Globals/Footer";
import "../styles/main.scss";
import "animate.css";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    console.log("PAGE PROPS: ", pageProps);
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

      <AppWrapper>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AppWrapper>
    </>
  );
}

export default MyApp;
