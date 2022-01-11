
import { Hero } from "../../components/Heros/features";
import { ArchitectureSection, FineTunedControlSection, OptimizedExperienceSection, SetupSection } from "../../components/Body/features"; 
import { useAppContext } from "../../Context";

export default function Features() {

  const { mouseCoord, mousePositionPixels, scrollOffset, isMobile, handleMouseMove } = useAppContext()


  return (
    <main className="main" id="main" onMouseMove={e => handleMouseMove(e)}>
      <Hero mouseCoord={mouseCoord} offset={scrollOffset}/>
      <ArchitectureSection mouseCoord={mouseCoord}/>
      <FineTunedControlSection />
      <OptimizedExperienceSection />
      <SetupSection />
    </main>
  );
}
