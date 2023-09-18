import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%; 
  padding: 3rem 5rem 0;
  margin-bottom: 1rem;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 2rem 1rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`
export const NavFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`

export const InfoFooter = styled.div`
  display: flex;
  gap: 3rem;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap:1.5rem;
  }
`

export const FooterLogo = styled.img`
  width: 130px; 
  height: 40px;
`
export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  span{
    font-size: 16px;
  }
  p{
    font-size: 14px;
  }
`



export const FooterMsg = styled.span`
  width: 90%;
  color: ${(props) => props.theme.colors.grey.dark};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`

export const FooterMsgContainer = styled.div`
  padding-top: 40px;
  text-align: center;
  margin-inline: auto;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding-top: 0px;
    text-align: left;
}
`

export const FooterSocials = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 32px;
  margin-bottom: 40px;
`
