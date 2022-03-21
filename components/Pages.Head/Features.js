import { NextSeo } from "next-seo";

const Head = () => {
  const DIRECTUS_CMS_URL = process.env.DIRECTUS_CMS_URL;
  const THIS_URL = process.env.THIS_URL;

  return (
    <NextSeo
      title="Explore The Features | Wirewise"
      description="All of the essentials, none of the complexity. Get brand new capabilities on top of the WireGuard framework that just make life easier."
      openGraph={{
        url: `${THIS_URL}/features`,
        title: "Explore The Features | Wirewise",
        description:
          "All of the essentials, none of the complexity. Get brand new capabilities on top of the WireGuard framework that just make life easier.",
        images: [
          {
            url: `${DIRECTUS_CMS_URL}/assets/dca92e08-54bc-491d-9646-1b4a98aa5153.png`,
            width: 800,
            height: 600,
            alt: "Diagram of how Wirewise functions. From enabled devices to cloud services to admin",
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