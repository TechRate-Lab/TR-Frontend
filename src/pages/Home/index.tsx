import { Footer } from "../../components/Footer";
import Header from "../../components/Header/Header";
import Avaliar from "./Avaliar";
import Inicio from "./Inicio";
import Reputacao from "./Reputacao";
import Sobre from "./Sobre";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Inicio />
      <Sobre />
      <Reputacao />
      <Avaliar />
      <Footer/>
    </>
  );
};

export default Home;
