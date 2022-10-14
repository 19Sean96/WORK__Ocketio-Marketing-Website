import { NextSeo } from "next-seo";
import Logo from 'public/ocketio-logo.svg'

const Head = () => {
  const DIRECTUS_CMS_URL = process.env.DIRECTUS_CMS_URL;
  const THIS_URL = process.env.THIS_URL;

  return (
    <NextSeo
      title="We Built The VPN We Wanted | Wirewise"
      description="Wirewise is a streamlined VPN that facilitates remote access to networks you manage. Set up across devices and add users in minutes."
      openGraph={{
        url: THIS_URL,
        title: "We Built The VPN We Wanted | Wirewise",
        description:
          "Wirewise is a streamlined VPN that facilitates remote access to networks you manage. Set up across devices and add users in minutes.",
        images: [
          {
            url: Logo,
            width: 800,
            height: 600,
            alt: "Preview of the Wirewise Admin Panel - where you can manage devices and administer Tenant management",
          },
        ],
      }}
      twitter={{
        cardType: "summary_large_image",
      }}
    />
  );
};

export default Head;
