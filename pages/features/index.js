
import { Hero } from "../../components/Heros/features";
import { ArchitectureSection, FineTunedControlSection, ThirdPartyAuthentication, OptimizedExperienceSection, SetupSection } from "../../components/Body/features"; 
import { useAppContext } from "../../Context";

export default function Features() {

  const { mouseCoord, mousePositionPixels, scrollOffset, isMobile, handleMouseMove } = useAppContext()


  return (
    <main className="main" id="main" onMouseMove={e => handleMouseMove(e)}>
              <span id="vertLineCenter"></span>

      <Hero mouseCoord={mouseCoord} offset={scrollOffset}/>
      <ArchitectureSection mouseCoord={mouseCoord}/>
      <FineTunedControlSection />
      <ThirdPartyAuthentication />
      <OptimizedExperienceSection />
      <SetupSection />
    </main>
  );
}
