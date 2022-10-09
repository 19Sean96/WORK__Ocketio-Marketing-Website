import { ContactPortal, ContactFAQ } from "../../components/Pages.Body/Contact";
import Head from "../../components/Pages.Head/Contact";

export default function Contact() {
  return (
    <>
      <Head />
      <div>
        <main className="main" id="main">
          <ContactPortal />
          <ContactFAQ />
        </main>
      </div>
    </>
  );
}
