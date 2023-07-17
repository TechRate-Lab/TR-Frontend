import React from 'react'
import {
  FooterContact,
  FooterContainer,
  FooterContainerContactTerms,
  FooterLogo,
  FooterMsg, FooterMsgContainer,
  FooterSocials,
  FooterTerms
} from './style'
import logo from '../../assets/Logo.png'
import facebookIcon from '../../assets/bxl-facebook.svg'
import instagramIcon from '../../assets/bxl-instagram.svg'
import linkedinIcon from '../../assets/bxl-linkedin.svg'
import twitterIcon from '../../assets/bxl-twitter.svg'

export const Footer: React.FC = () => {
  return (
    <>
      <FooterContainer>
        <FooterLogo src={logo} />
        <FooterContainerContactTerms>
          <FooterContact>
            <p>Contato</p>
            <p>(00) 0000-0000</p>
            <p>usuario@gmail.com</p>
          </FooterContact>
          <FooterTerms>
            <p>Politica e privacidade</p>
            <p>Termos de uso</p>
          </FooterTerms>
        </FooterContainerContactTerms>
        <FooterSocials>
          <img src={twitterIcon} alt=""/>
          <img src={linkedinIcon} alt=""/>
          <img src={facebookIcon} alt=""/>
          <img src={instagramIcon} alt=""/>
        </FooterSocials>
      </FooterContainer>
      <FooterMsgContainer>
        <FooterMsg>
          Copyright 2023 Techrate. Todos os direitos reservados.
        </FooterMsg>
      </FooterMsgContainer>
    </>
  )
}
