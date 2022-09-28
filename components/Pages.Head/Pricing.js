import { NextSeo } from "next-seo";
import Logo from '../../public/ocketio-logo.svg'

const Head = () => {
  const DIRECTUS_CMS_URL = process.env.DIRECTUS_CMS_URL;
  const THIS_URL = process.env.THIS_URL;

  return (
    <NextSeo
    title="Pricing Tiers | Wirewise"
    description="Download and test the Wirewise beta for free. Stay tuned for simple, cost-effective pricing options launching soon."
    openGraph={{
      url: `${THIS_URL}/pricing`,
      title: "Pricing Tiers | Wirewise",
      description:
        "Download and test the Wirewise beta for free. Stay tuned for simple, cost-effective pricing options launching soon.",
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

export default Head