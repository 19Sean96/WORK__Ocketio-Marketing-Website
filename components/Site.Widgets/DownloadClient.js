import { useEffect, useState } from "react";
import Link from "next/link";
import platform from "platform-detect";
import {
  WaveTop,
  WaveBot,
} from "../Site.Graphics/Waves/DownloadWidget";
import ContentWrapper from "../Site.Globals/ContentWrapper";
import DownloadWidgetIllustration from "../Site.Graphics/DownloadWidgetIllustration";
import { clientDownloadLinks } from "../../lib/downloadLinks";
const DownloadClient = (props) => {
    const [operatingSystem, setOperatingSystem] = useState();
    const [primaryInput, setPrimaryInput] = useState(null);
  
    const {
      android,
      linux,
      ios,
      macos,
      windows, // FOR TESTING OPERATING SYSTEM (bool)
      touch,
      mouse, // FOR TESTING PRIMARY INPUT TYPE (bool)
    } = platform;
  
    useEffect(() => {
      if (touch) {
        if (mouse) {
          setPrimaryInput("mouse with touchscreen");
        } else setPrimaryInput("mobile/tablet without mouse");
      } else {
        if (mouse) {
          setPrimaryInput("mouse without touchscreen");
        } else setPrimaryInput("neither mouse nor touchscreen");
      }
  
      setOperatingSystem(
        android
          ? "Android"
          : linux
          ? "Linux"
          : ios
          ? "iOS"
          : macos
          ? "macOS"
          : windows
          ? "Windows"
          : "unknown"
      );
    }, []);
  
    return (
      <section className="section section__with-flex" id="downloadWidget">
        <WaveTop />
        <div id="circleLeftTop"></div>
        <ContentWrapper>
        <div className="section--inner main_wrapper">
          <div className="section--heading">
            <h2 className="h2">
              Download <br />
              {operatingSystem === "Windows" ? "Wirewise" : "Wireguard"} Client
              for {operatingSystem}
            </h2>
            <p className="p-large">Install the client and get started in just minutes with a guided setup process that ensures nothing is missed.</p>
          </div>
          <div className="section--body">
              <a target="_blank" href={clientDownloadLinks[operatingSystem?.toLowerCase()]} className="btn btn--filled">Download - {operatingSystem}</a>
              {
                  operatingSystem === 'Android' ? ''
                  : operatingSystem === 'Linux' ? <a href={'#'} className="download-alt p-small">Prefer terminal? Click Here</a>
                  : operatingSystem === 'iOS' ? <a href={clientDownloadLinks['macos']} className="download-alt p-small">Tap here for macOS</a>
                  : operatingSystem === 'macOS' ? <a href={clientDownloadLinks['ios']} className="download-alt p-small">Click here for iOS</a>
                  : operatingSystem === 'Windows' ? <a href={`#`} className="download-alt p-small">Click here for Windows 10/11 (32x)</a> : ''
              }
              <div className="section--body__see-all">
                  <p className="p-large">Need Wirewise Client on a different OS? </p>
                  <Link href="/downloads#allDownloads">
                      <a className="btn btn--bordered">See All Download Options</a>
                  </Link>
              </div>
          </div>
          <div className="img-wrapper">
            <DownloadWidgetIllustration />
          </div>
        </div>
        </ContentWrapper>
        <WaveBot />
      </section>
    );
  };
  
  export default DownloadClient;