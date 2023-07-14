import styled from 'styled-components'

export const ReputacaoSection = styled.section`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 40px;
  margin-left: 20px;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    
  }
`

export const ReputacaoText = styled.div`
  width: 388px;
  margin-bottom: 40px;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`

export const ReputacaoCard = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  border-radius: 8px;
  &.melhores {
    background: #009c4f;
  }
  &.piores {
    background: ${(props) => props.theme.colors.grey.normal};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    
  }
`

export const ReputacaoCards = styled.div`
  display: flex;
  max-width: 393px;
  gap: 14px;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {

  }
`

export const ReputacaoCardTitle = styled.h2`
  font-style: normal;
  font-weight: ${(props) => props.theme.typography.mobile.headline8.fontWeight};
  font-size: ${(props) => props.theme.typography.mobile.headline8.fontSize};
  line-height: ${(props) => props.theme.typography.mobile.headline8.height};
  max-width: 170px;
  padding: 12px 10px;
  color: #ffffff;
`

export const ReputacaoCardListaEmpresas = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-inline: 10px;
  padding-bottom: 10px;
  gap: 15px;
`
export const ReputacaoCardEmpresa = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 9px;
  padding: 10px 0 10px 10px;
  width: 100%;
  background: #ffffff;
  border-radius: 6px;

  img {
    box-sizing: border-box;
    width: 26px;
    height: 26px;
    border: 1px solid ${(props) => props.theme.colors.grey.light_active};
    border-radius: 22px;
  }

  p:first-child {
    font-style: normal;
    font-weight: ${(props) => props.theme.typography.mobile.body3.fontWeight};
    font-size: ${(props) => props.theme.typography.mobile.body1.fontSize};
    line-height: ${(props) => props.theme.typography.mobile.body3.lineHeight};
    font-family: ${props => props.theme.typography.mobile.body3.fontFamily};
    color: ${(props) => props.theme.colors.secondary.normal};
  }
  
  p:last-child {
    font-style: normal;
    font-weight: ${(props) => props.theme.typography.mobile.headline5.fontWeight};
    font-size: ${(props) => props.theme.typography.mobile.headline5.fontSize};
    line-height: ${(props) => props.theme.typography.mobile.headline5.lineHeight};
    font-family: Nunito;
    letter-spacing: 0.9px;
    color: ${(props) => props.theme.colors.grey.soft_dark};
  }
  cursor: pointer;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 56px;
    width:70%;

    p{
      font-size: ${(props) => props.theme.typography.desktop.body2.fontSize};
      letter-spacing: 0px;
    }

    img{
      width:34px;
      height:34px;
    }
  }
`

export const ReputacaoTextTitle = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: ${(props) =>
    props.theme.typography.desktop.headline2.fontWeight};
  font-size: ${(props) => props.theme.typography.mobile.headline2.fontSize};
  line-height: ${(props) => props.theme.typography.mobile.headline2.height};
  letter-spacing: ${(props) =>
    props.theme.typography.mobile.headline2.spacing};
  padding-bottom: 16px;

  color: ${(props) => props.theme.colors.secondary.normal};
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.typography.desktop.headline4.fontSize};

  }
`

export const ReputacaoTextSubTitle = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: ${(props) => props.theme.typography.mobile.headline7.fontWeight};
  font-size: ${(props) => props.theme.typography.mobile.headline7.fontSize};
  line-height: ${(props) => props.theme.typography.mobile.headline7.height};
  color: ${(props) => props.theme.colors.grey.darker};

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.typography.desktop.subtitle2.fontSize};

  }
`
