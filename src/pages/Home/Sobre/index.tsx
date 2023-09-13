import React from 'react'
import {
  BoxImage,
  SobreBoxMain,
  SobreBoxMainButton,
  SobreBoxMainParagraph,
  SobreBoxMainText,
  SobreBoxMainTitle,
  BoxSecondary,
  Container, OverlayBg,
  Content
} from './styles'

import teamImage from '../../../assets/successful-happy-business-team.png'
import ButtonGlobal from '../../../components/Buttons/ButtonGlobal'
import { defaultTheme } from '../../../styles/themes/themes'

const Sobre: React.FC = () => {
  const {colors} = defaultTheme
  return (
    <Container>
      <OverlayBg />
      <Content>
        <SobreBoxMain>
          <SobreBoxMainText>
            <SobreBoxMainTitle>Sobre nós</SobreBoxMainTitle>
            <SobreBoxMainParagraph>
              A TechRate nasceu do desejo de democratizar e simplificar a pesquisa a empresas que possuam os mesmos valores que você. Com as informações mais relevantes em evidência, você poderá se candidatar com confiança, autonomia e clareza.
              <br /><br />
              Acreditamos que a transparência é o primeiro passo para que trabalhadores e empregadores possam estar alinhados.
              <br /><br />
              Nossa missão é unir pessoas e negócios que possuam as mesmas visões e valores. E assim, o match perfeito acontecer!
              <br /><br />
              Nosso time é formado por aspirantes e profissionais de tecnologia voluntários, unidos com um único objetivo: colocar em prática todo o conhecimento teórico adquirido.
              <br /><br />
              Vamos juntos transformar o mercado tech? Estamos aqui para ouvi-los.
            </SobreBoxMainParagraph>
            <SobreBoxMainButton>SAIBA MAIS</SobreBoxMainButton>
            <ButtonGlobal 
            children='SAIBA MAIS'
            heigth='72px'
            width='226px'
            padding='0px'
            backgroundColor={colors.primary.normal}
          />
          </SobreBoxMainText>
        </SobreBoxMain>
        <BoxImage
          src={teamImage} alt="image"
        />
      </Content>
    </Container>
  )
}

export default Sobre
