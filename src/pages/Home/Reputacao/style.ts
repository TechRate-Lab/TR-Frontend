import styled from "styled-components";

export const Container = styled.section`
  padding: 3rem 5rem;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
`;
export const Content = styled.section`
  display: flex;
  justify-content: center;
  gap: 4rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 1rem;
  }
`;

export const ReputacaoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 300px;
  }
`;

export const ReputacaoCard = styled.div`
  display: flex;
  max-width: 315px;
  flex-direction: column;
  border-radius: 8px;
  background: #009c4f;
  width: 200px;
  &.piores {
    background: ${(props) => props.theme.colors.grey.normal};
    width: 200px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    background: ${(props) => props.theme.colors.primary.light};
    border-radius: 0;
    width: 100%;
  }
`;

export const ReputacaoCards = styled.div`
  display: flex;
  max-width: 654px;
  gap: 14px;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;    
    height: 15rem;
  } 
`;

export const ReputacaoCardTitle = styled.h2`
  font-style: normal;
  font-weight: ${(props) => props.theme.typography.mobile.headline8.fontWeight};
  font-size: ${(props) => props.theme.typography.mobile.headline8.fontSize};
  line-height: ${(props) => props.theme.typography.mobile.headline8.height};
  max-width: 170px;
  padding: 12px 10px;
  color: #ffffff;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: 283px;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 32px */
    letter-spacing: 0.15px;
    padding: 16px 20px;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: ${(props) => props.theme.typography.desktop.headline6.fontSize};
    max-width: 100%;
  }
`;

export const ReputacaoCardListaEmpresas = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-inline: 10px;
  padding-bottom: 10px;
  gap: 15px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    margin-inline: 16px;
  }
`;
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

    @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      width: 44px;
      height: 44px;
    }
  }

  p:first-child {
    font-style: normal;
    font-weight: ${(props) => props.theme.typography.mobile.body3.fontWeight};
    font-size: ${(props) => props.theme.typography.mobile.body1.fontSize};
    line-height: ${(props) => props.theme.typography.mobile.body3.lineHeight};
    font-family: ${(props) => props.theme.typography.mobile.body3.fontFamily};
    color: ${(props) => props.theme.colors.secondary.normal};
  }

  p:last-child {
    font-style: normal;
    font-weight: ${(props) =>
      props.theme.typography.mobile.headline5.fontWeight};
    font-size: ${(props) => props.theme.typography.mobile.headline5.fontSize};
    line-height: ${(props) =>
      props.theme.typography.mobile.headline5.lineHeight};
    font-family: Nunito;
    letter-spacing: 0.9px;
    color: ${(props) => props.theme.colors.grey.soft_dark};
  }
  cursor: pointer;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    gap: 15px;
    padding: 17px 0 17px 17px;
    p:first-child {
      font-family: Nunito;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 150%; /* 24px */
      letter-spacing: 0.15px;
    }
    p:last-child {
      font-family: Nunito;
      font-size: 25px;
      font-style: normal;
      font-weight: 700;
      line-height: 150%; /* 37.5px */
      letter-spacing: 0.15px;
    }
  }
`;

export const ReputacaoTextTitle = styled.h2`
  width: 512px;

  color: ${(props) => props.theme.colors.primary.normal};

  font-size: ${(props) => props.theme.typography.desktop.headline2.fontSize};
  font-weight: ${(props) =>
    props.theme.typography.desktop.headline2.fontWeight};
  line-height: ${(props) => props.theme.typography.desktop.headline2.height};
  letter-spacing: ${(props) => props.theme.typography.mobile.headline2.spacing};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.typography.desktop.headline4.fontSize};
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: ${(props) => props.theme.typography.mobile.headline2.fontSize};
    max-width: 80%;
  }
`;

export const ReputacaoTextSubTitle = styled.p`
  width: 520px;
  font-weight: ${(props) =>
    props.theme.typography.desktop.subtitle2.fontWeight};
  font-size: ${(props) => props.theme.typography.desktop.subtitle2.fontSize};
  line-height: ${(props) => props.theme.typography.desktop.subtitle2.height};

  a {
    color: ${(props) => props.theme.colors.secondary.normal};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 300px;
    font-size: ${(props) => props.theme.typography.desktop.body2.fontSize};
    font-weight: lighter;
  }
`;
