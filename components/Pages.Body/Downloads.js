import ContentWrapper from "../Site.Globals/ContentWrapper";
import Link from "next/link";
const AllDownloads = (props) => {
  const downloadOptions = {
    managedDevices: [
      {
        OS: "Windows",
        versions: "7,10,11",
        downloadLink: "#",
        setupGuide: "#",
      },
    ],
    supervisedDevices: [
      {
        OS: "MacOS",
        versions: "7,10,11",
        downloadLink: "#",
        setupGuide: "#",
      },
      {
        OS: "iOS",
        versions: "7,10,11",
        downloadLink: "#",
        setupGuide: "#",
      },
      {
        OS: "Android",
        versions: "7,10,11",
        downloadLink: "#",
        setupGuide: "#",
      },
      {
        OS: "Linux",
        versions: "7,10,11",
        downloadLink: "#",
        setupGuide: "#",
      },
    ],
  };

  return (
    <ContentWrapper>
      <section className="section__with-grid all-columns" id="allDownloads">
        <div className="section--heading">
          <h2 className="h2 capitalize">All Downloads</h2>
          <p className="p-small">
            Are you an admin trying to set-up your tenant?
          </p>
          <Link href="/">
            <a className="p-small">Check out our set-up guide here</a>
          </Link>
        </div>
        <div className="section--body">
          <article className="group" id="managedDevices">
            <div className="group--heading">
              <h4 className="h4 capitalize">managed device installation</h4>
              <p className="p-small capitalize">(wirewise client)</p>
            </div>
            <div className="group--body">
              <table>
                <tr className="heading">
                  <td className="j-text">Operating System</td>
                  <td className="j-text">Supported Versions</td>
                  <td className="j-text">Download Link</td>
                  <td className="j-text">Set up Guide</td>
                </tr>
                {downloadOptions.managedDevices.map((opt) => (
                  <tr className="body">
                    <td className="j-text">{opt.OS}</td>
                    <td className="j-text">{opt.versions}</td>
                    <td className="j-text">
                      <a href={opt.downloadLink} className="btn btn--filled">
                        Download
                      </a>
                    </td>
                    <td className="j-text">
                      <Link href={opt.setupGuide}>
                        <a className="guide-link">See Guide</a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </article>
          <article className="group" id="supervisedDevices">
            <div className="group--heading">
              <h4 className="h4 capitalize">managed device installation</h4>
              <p className="p-small capitalize">(Wireguard client)</p>
            </div>
            <div className="group--body">
              <table>
                <tr className="heading">
                  <td className="j-text">Operating System</td>
                  <td className="j-text">Supported Versions</td>
                  <td className="j-text">Download Link</td>
                  <td className="j-text">Set up Guide</td>
                </tr>
                {downloadOptions.supervisedDevices.map((opt) => (
                  <tr className="body">
                    <td className="j-text">{opt.OS}</td>
                    <td className="j-text">{opt.versions}</td>
                    <td className="j-text">
                      <a href={opt.downloadLink} className="btn btn--filled">
                        Download
                      </a>
                    </td>
                    <td className="j-text">
                      <Link href={opt.setupGuide}>
                        <a className="guide-link">See Guide</a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </article>
        </div>
      </section>
    </ContentWrapper>
  );
};

export { AllDownloads };
