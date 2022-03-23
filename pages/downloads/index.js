import Head from "../../components/Pages.Head/Downloads";
import DownloadWidget from "../../components/Site.Widgets/DownloadClient";
import { AllDownloads } from "../../components/Pages.Body/Downloads";
export default function Downloads() {

  return (
    <>
      <Head />
      <main className="main" id="main">
        <DownloadWidget />
        <AllDownloads />
      </main>
    </>
  );
}
