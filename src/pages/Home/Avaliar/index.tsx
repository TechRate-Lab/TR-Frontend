import React from "react";
import {
  AvaliarButton,
  AvaliarCard,
  AvaliarCardSubtitle,
  AvaliarCardTitle,
  Container,
  Content,
} from "./style";

const Avaliar: React.FC = () => {
  return (
    <Container>
      <Content>
        <AvaliarCard>
          <AvaliarCardTitle>Compartilhe sua experiência</AvaliarCardTitle>
          <AvaliarCardSubtitle>
            Ajude outro profissional a se candidatar com confiança, autonomia e
            clareza.
          </AvaliarCardSubtitle>
          <AvaliarButton>Avaliar uma empresa</AvaliarButton>
        </AvaliarCard>
      </Content>
    </Container>
  );
};

export default Avaliar;
