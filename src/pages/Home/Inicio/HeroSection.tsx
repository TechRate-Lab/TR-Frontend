import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import {
  Call,
  CallSubTitle,
  CallTitle, Hero,
  HeroImage,
  MainSection

} from './HeroSection.styled'
import ButtonGlobal from '../../../components/Buttons/ButtonGlobal'
import heroImage from '../../../assets/newHeroSection.png'
import { Flex } from '../../../components/styles/Flex.styled'
import AvaliarEmpresa from '../../../components/Buttons/AvaliarEmpresa'

const Inicio: React.FC = () => {
  const theme = useContext(ThemeContext)

  return (
    <Hero>
      <MainSection>
          <Flex>
            <Call>
              <CallTitle>Techrate</CallTitle>
              <CallSubTitle>
               Aqui você descobre se o match com aquela empresa é real!
              </CallSubTitle>
              <AvaliarEmpresa/>
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
          </Flex>
      </MainSection>
    </Hero>
  )
}

export default Inicio
