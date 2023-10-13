import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import Avaliar from "./Avaliar";
import HeroSection from "./Inicio";
import Reputacao from "./Reputacao";
import Sobre from "./Sobre";
import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Header />
      <HeroSection />
      <Sobre />
      <Reputacao />
      <Avaliar />
      <Footer />
    </Container>
  );
}
