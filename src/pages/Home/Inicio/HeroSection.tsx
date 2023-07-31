import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import {
  Call,
  CallSubTitle,
  CallTitle, Container,
  HeroImage,
  Content

} from './HeroSection.styled'
import ButtonGlobal from '../../../components/Buttons/ButtonGlobal'
import heroImage from '../../../assets/newHeroSection.png'
import AvaliarEmpresa from '../../../components/Buttons/AvaliarEmpresa'

const HeroSection: React.FC = () => {
  const theme = useContext(ThemeContext)

  return (
    <Container>
      <Content>
        <Call>
          <CallTitle>Techrate</CallTitle>
          <CallSubTitle>
            Aqui você descobre se o match com aquela empresa é real!
          </CallSubTitle>
          <AvaliarEmpresa />
          {/* <ButtonGlobal */}
          {/*   hoverColor={theme.colors.secondary.dark} */}
          {/*   backgroundColor={theme.colors.secondary.normal} */}
          {/*   children={'AVALIAR UMA EMPRESA'} */}
          {/*   fontWeight={theme.buttons.large.fontWeight} */}
          {/*   fontSize={theme.buttons.large.fontSize} */}
          {/*   heigth={theme.buttons.large.height} */}
          {/*   spacing={theme.buttons.large.spacing} */}
          {/*   padding={theme.buttons.large.padding} */}
          {/*   color={theme.colors.grey.light} */}
          {/*   width={theme.buttons.large.width} */}
          {/* /> */}
        </Call>
        <HeroImage src={heroImage} />
      </Content>
    </Container>
  )
}

export default HeroSection
