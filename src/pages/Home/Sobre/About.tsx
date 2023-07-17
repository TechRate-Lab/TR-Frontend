import React from 'react'
import {
  BoxImage,
  SobreBoxMain,
  SobreBoxMainButton,
  SobreBoxMainParagraph,
  SobreBoxMainText,
  SobreBoxMainTitle,
  BoxSecondary,
  SobreSection, OverlayBg
} from './About.styled'

import teamImage from '../../../assets/successful-happy-business-team.png'

const Sobre: React.FC = () => {
  return (
    <>
      <SobreSection>
        <OverlayBg/>
        <SobreBoxMain>
          <SobreBoxMainText>
            <SobreBoxMainTitle>Sobre nós</SobreBoxMainTitle>
            <SobreBoxMainParagraph>
              A TechRate nasceu do desejo de democratizar e simplificar a
              pesquisa a empresas que possuam os mesmos valores que você. Com as
              informações mais relevantes em evidência, você poderá se
              candidatar com confiança, autonomia e clareza.
            </SobreBoxMainParagraph>
            <SobreBoxMainParagraph>
              Acreditamos que a transparência é o primeiro passo para que
              trabalhadores e empregadores possam estar alinhados.
            </SobreBoxMainParagraph>
            <SobreBoxMainParagraph>
              Nossa missão é unir pessoas e negócios que possuam as mesmas
              visões e valores. E assim, o match perfeito acontecer!
            </SobreBoxMainParagraph>
            <SobreBoxMainParagraph>
              Nosso time é formado por aspirantes e profissionais de tecnologia
              voluntários, unidos com um único objetivo: colocar em prática todo
              o conhecimento teórico adquirido.
            </SobreBoxMainParagraph>
            <SobreBoxMainParagraph>
              Vamos juntos transformar o mercado tech? Estamos aqui para
              ouvi-los.
            </SobreBoxMainParagraph>
          </SobreBoxMainText>
          <SobreBoxMainButton>Enviar E-mail</SobreBoxMainButton>
        </SobreBoxMain>
        <BoxSecondary />
        <BoxImage
          src={teamImage} alt="image"
        />
      </SobreSection>
    </>
  )
}

export default Sobre
