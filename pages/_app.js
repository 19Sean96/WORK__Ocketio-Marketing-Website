import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import { GTM_ID, pageview, datalayerloaded } from "../lib/gtm";
import { AppWrapper } from "../Context";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/main.scss";
import 'animate.css'
import TagManager from "react-gtm-module";
// import OSTest from "../components/testing/OS.test";
function MyApp({ Component, pageProps }) {
  const router = useRouter();


  useEffect(() => {
    TagManager.initialize({ gtmId: GTM_ID})
  }, [])

  // useEffect(() => {
  //   router.events.on("routeChangeComplete", pageview);
  //   return () => {
  //     router.events.off("routeChangeComplete", pageview);
  //   };
  // }, [router.events]);

  return (
    <>
      {/* Google Tag Manager - Global base code */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
      <AppWrapper>
        {/* <OSTest /> */}
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AppWrapper>
    </>
  );
}

export default MyApp;
