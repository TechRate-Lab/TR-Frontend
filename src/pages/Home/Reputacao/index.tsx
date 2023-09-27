import React from "react";
import {
  ReputacaoCard,
  ReputacaoCardEmpresa,
  ReputacaoCardListaEmpresas,
  ReputacaoCardTitle,
  ReputacaoCards,
  Container,
  ReputacaoText,
  ReputacaoTextSubTitle,
  ReputacaoTextTitle,
  Content,
} from "./style";
import empresa1 from "../../../assets/logo_ifood.png";
import empresa2 from "../../../assets/logo_tim.png";
import empresa3 from "../../../assets/logo_perfectpay.png";
import empresa4 from "../../../assets/logo_shopee.png";
import empresa5 from "../../../assets/logo_magazine-luiza.png";

const Reputacao: React.FC = () => {
  const isMobile = window.innerWidth <= 460;
  console.log(window.innerWidth)

  return (
    <Container>
      <Content>
        <ReputacaoCards>
          <ReputacaoCard className="melhores">
            <ReputacaoCardTitle>
              {isMobile ? 'MELHORES AVALIAÇÕES' : 'Empresas com melhor avaliação na TechRate'}
            </ReputacaoCardTitle>
            <ReputacaoCardListaEmpresas>
              <ReputacaoCardEmpresa>
                <p>1°</p>
                <img src={empresa1} alt="empresa" />
                <p>iFood</p>
              </ReputacaoCardEmpresa>
              <ReputacaoCardEmpresa>
                <p>2°</p>
                <img src={empresa2} alt="empresa" />
                <p>TIM</p>
              </ReputacaoCardEmpresa>
              <ReputacaoCardEmpresa>
                <p>3°</p>
                <img src={empresa3} alt="empresa" />
                <p>PerfectPay</p>
              </ReputacaoCardEmpresa>
              <ReputacaoCardEmpresa>
                <p>4°</p>
                <img src={empresa4} alt="empresa" />
                <p>Shopee</p>
              </ReputacaoCardEmpresa>
              <ReputacaoCardEmpresa>
                <p>5°</p>
                <img src={empresa5} alt="empresa" />
                <p>Magalu</p>
              </ReputacaoCardEmpresa>
            </ReputacaoCardListaEmpresas>
          </ReputacaoCard>

          <ReputacaoCard className="piores">
            <ReputacaoCardTitle>
              Empresas com pior avaliação na TechRate
            </ReputacaoCardTitle>
            <ReputacaoCardListaEmpresas>
              <ReputacaoCardEmpresa>
                <p>1°</p>
                <img src={empresa1} alt="empresa" />
                <p>iFood</p>
              </ReputacaoCardEmpresa>
              <ReputacaoCardEmpresa>
                <p>2°</p>
                <img src={empresa2} alt="empresa" />
                <p>TIM</p>
              </ReputacaoCardEmpresa>
              <ReputacaoCardEmpresa>
                <p>3°</p>
                <img src={empresa3} alt="empresa" />
                <p>PerfectPay</p>
              </ReputacaoCardEmpresa>
              <ReputacaoCardEmpresa>
                <p>4°</p>
                <img src={empresa4} alt="empresa" />
                <p>Shopee</p>
              </ReputacaoCardEmpresa>
              <ReputacaoCardEmpresa>
                <p>5°</p>
                <img src={empresa5} alt="empresa" />
                <p>Magalu</p>
              </ReputacaoCardEmpresa>
            </ReputacaoCardListaEmpresas>
          </ReputacaoCard>
        </ReputacaoCards>

        <ReputacaoText>
          <ReputacaoTextTitle>
            Em breve: Empresas em destaque
          </ReputacaoTextTitle>
          <ReputacaoTextSubTitle>
            Só aqui você escolhe as melhores empresas para seu ingresso no
            mercado da tecnologia de acordo com as avaliações de outros
            usuários. <a href="#">Cadastre-se</a> e avalie você também!
          </ReputacaoTextSubTitle>
        </ReputacaoText>
      </Content>
    </Container>
  );
};

export default Reputacao;
