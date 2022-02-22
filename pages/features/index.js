import { Hero } from "../../components/Heros/features";
import {
  ArchitectureSection,
  FineTunedControlSection,
  ThirdPartyAuthentication,
  OptimizedExperienceSection,
  SetupSection,
} from "../../components/Body/features";
import { useAppContext } from "../../Context";
import { NextSeo } from "next-seo";

export default function Features() {
  const {
    mouseCoord,
    mousePositionPixels,
    scrollOffset,
    isMobile,
    handleMouseMove,
  } = useAppContext();

  return (
    <>
      <NextSeo
        title="Explore The Features | Wirewise"
        description="All of the essentials, none of the complexity. Get brand new capabilities on top of the WireGuard framework that just make life easier."
        openGraph={{
          url: "https://wirewise.vercel.app/features",
          title: "Explore The Features | Wirewise",
          description:
            "All of the essentials, none of the complexity. Get brand new capabilities on top of the WireGuard framework that just make life easier.",
          images: [
            {
              url: `${DIRECTUS_CMS_URL}/assets/9f74d9d9-5bf6-464c-8a7e-6ead6bebf1e7.svg`,
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
      <main className="main" id="main" onMouseMove={(e) => handleMouseMove(e)}>
        <span id="vertLineCenter"></span>

        <Hero mouseCoord={mouseCoord} offset={scrollOffset} />
        <ArchitectureSection mouseCoord={mouseCoord} />
        <FineTunedControlSection />
        <ThirdPartyAuthentication />
        <OptimizedExperienceSection />
        <SetupSection />
      </main>
    </>
  );
}
