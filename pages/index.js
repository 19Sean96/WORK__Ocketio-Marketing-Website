import Header from "../components/Header";
import { Hero } from '../components/Heros/homepage'
import ContentWrapper from "../components/ContentWrapper";

export default function Home() {
  return (
    <main className="main" id="main">

      <ContentWrapper>
        <Header />
      </ContentWrapper>

      <ContentWrapper>
        <Hero />
      </ContentWrapper>
    </main>
  );
}
