import { NextSeo } from "next-seo";
import Logo from 'public/ocketio-logo.svg'

const Head = () => {
  const DIRECTUS_CMS_URL = process.env.DIRECTUS_CMS_URL;
  const THIS_URL = process.env.THIS_URL;

  return (
    <NextSeo
      title="Privacy Policy | Wirewise"
      description="This privacy policy (Policy) explains the privacy rules applicable to all information collected or submitted when you access Unwired Revolution services and visit our website. "
      openGraph={{
        url: `${THIS_URL}/privacy`,
        title: "Privacy Policy | Wirewise",
        description:
          "This privacy policy (Policy) explains the privacy rules applicable to all information collected or submitted when you access Unwired Revolution services and visit our website. ",
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