import React from 'react'
import {
  Container,
  FooterContact,
  Content,
  FooterLogo,
  FooterMsg, FooterMsgContainer,
  FooterSocials,
  NavFooter,
  InfoFooter
} from './style'
import logo from '../../assets/Logo.png'
import facebookIcon from '../../assets/bxl-facebook.svg'
import instagramIcon from '../../assets/bxl-instagram.svg'
import linkedinIcon from '../../assets/bxl-linkedin.svg'
import twitterIcon from '../../assets/bxl-twitter.svg'

export const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <NavFooter>
          <InfoFooter>
            <FooterLogo src={logo} />
            <FooterContact>
              <span><b>Contato</b></span>
              <p>(00)0000-0000</p>
              <p>usuario@gmail.com</p>
            </FooterContact>
            <FooterContact>
              <span><b>Politica e privacidade</b></span>
              <p>Termos de uso</p>
            </FooterContact>
          </InfoFooter>
          <FooterSocials>
            <img src={twitterIcon} alt="" />
            <img src={linkedinIcon} alt="" />
            <img src={facebookIcon} alt="" />
            <img src={instagramIcon} alt="" />
          </FooterSocials>
        </NavFooter>
        <FooterMsgContainer>
          <FooterMsg>
            Copyright 2023 Techrate. Todos os direitos reservados.
          </FooterMsg>
        </FooterMsgContainer>
      </Content>
    </Container>
  )
}
