import { Hero } from "../../components/Heros/features";
import {
  ArchitectureSection,
  FineTunedControlSection,
  ThirdPartyAuthentication,
  OptimizedExperienceSection,
  SetupSection,
} from "../../components/Pages.Body/Features";
import { useAppContext } from "../../Context";
import Head from "../../components/Pages.Head/Features";

export default function Features() {
  const { scrollOffset } = useAppContext();

  return (
    <>
      <Head />
      <main className="main" id="main">
        <span id="vertLineCenter"></span>

        <Hero offset={scrollOffset} />
        <ArchitectureSection />
        <FineTunedControlSection />
        <ThirdPartyAuthentication />
        <OptimizedExperienceSection />
        <SetupSection />
      </main>
    </>
  );
}
