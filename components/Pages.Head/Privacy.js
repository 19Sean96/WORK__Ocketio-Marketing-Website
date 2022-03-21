import { NextSeo } from "next-seo";

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
      }}
      twitter={{
        cardType: "summary_large_image",
      }}
    />
  );
};

export default Head