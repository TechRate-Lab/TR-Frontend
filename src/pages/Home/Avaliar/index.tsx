import React from "react";
import {
  AvaliarButton,
  AvaliarCard,
  AvaliarCardSubtitle,
  AvaliarCardTitle,
  AvaliarSection,
} from "./style";

const Avaliar: React.FC = () => {
  return (
    <>
      <AvaliarSection>
        <AvaliarCard>
          <AvaliarCardTitle>Compartilhe sua experiência</AvaliarCardTitle>
          <AvaliarCardSubtitle>
            Ajude outro profissional a se candidatar com confiança, autonomia e
            clareza.
          </AvaliarCardSubtitle>
          <AvaliarButton>Avaliar uma empresa</AvaliarButton>
        </AvaliarCard>
      </AvaliarSection>
    </>
  );
};

export default Avaliar;
