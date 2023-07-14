import styled from 'styled-components'

export const FooterContainer = styled.footer`
  margin-top: 80px;
  margin-inline: 20px;
  
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-inline: 112px;
  }



`

export const FooterLogo = styled.img`
  width: 160px;
  height: 50px;
  object-fit: cover;
  margin-bottom: 12px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-right: 24px;
  }
`

export const FooterMsg = styled.span`
  width: 90%;
  color: ${(props) => props.theme.colors.grey.dark};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */

`

export const FooterMsgContainer = styled.div`
  padding-top: 40px;
  text-align: center;
  margin-inline: auto;
`

export const FooterSocials = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 32px;
  margin-bottom: 40px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-left: 50px;
    margin-top: 12px;
    align-self: flex-start;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    margin-left: 424px;
    margin-top: 12px;
    align-self: flex-start;
  }
`

export const FooterContact = styled.div`
  p {
    margin-top: 12px;
  }
`

export const FooterTerms = styled.div`
  p {
    margin-top: 12px;
  }
`

export const FooterContainerContactTerms = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 53px;
`
