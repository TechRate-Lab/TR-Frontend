import styled from "styled-components";

export const ReputacaoSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0 100px;
  width: 100%;
  height:790px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding:30px 5px;
    height: 700px;
  }
`;

export const ReputacaoCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

`;

export const ReputacaoCard = styled.div`

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 16px;
  width: 315px;
  height: 590px;

  border: 1px solid #d8d8d8;
  backdrop-filter: blur(5px);
  border-radius: 8px;
  &.melhores {
    background: #009c4f;
    
  }
  &.piores {
    background: ${(props) => props.theme.colors.grey.normal};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 470px;
  }
`;

export const ReputacaoCardTitle = styled.h2`
  font-style: normal;
  font-weight: ${(props) =>
    props.theme.typography.desktop.subtitle1.fontWeight};
  font-size: ${(props) => props.theme.typography.desktop.subtitle1.fontSize};
  line-height: ${(props) => props.theme.typography.desktop.subtitle1.height};
  letter-spacing: ${(props) =>
    props.theme.typography.desktop.subtitle1.spacing};

  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  margin-bottom: 20px;
  color: #ffffff;
`;

export const ReputacaoCardListaEmpresas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;
export const ReputacaoCardEmpresa = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 17px 158.13px 17px 17px;
  gap: 15.4px;
  width: 283px;
  height: 78px;
  background: #ffffff;
  border-radius: 6px;

  img {
    box-sizing: border-box;
    width: 44px;
    height: 44px;
    border: 2px solid ${(props) => props.theme.colors.grey.light_active};
    border-radius: 22px;
  }

  p {
    font-style: normal;
    font-weight: ${(props) => props.theme.typography.desktop.body1.fontWeight};
    font-size: ${(props) => props.theme.typography.desktop.body1.fontSize};
    line-height: ${(props) => props.theme.typography.desktop.body1.height};
    letter-spacing: ${(props) => props.theme.typography.desktop.body1.spacing};

    display: flex;
    align-items: center;
    letter-spacing: 0.15px;

    color: ${(props) => props.theme.colors.grey.darker};
  }
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 56px;
   
  }
`;
export const ReputacaoText = styled.div`
  width: 512px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

export const ReputacaoTextTitle = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: ${(props) =>
    props.theme.typography.desktop.headline2.fontWeight};
  font-size: ${(props) => props.theme.typography.desktop.headline2.fontSize};
  line-height: ${(props) => props.theme.typography.desktop.headline2.height};
  letter-spacing: ${(props) =>
    props.theme.typography.desktop.headline2.spacing};

  color: ${(props) => props.theme.colors.secondary.normal};
`;

export const ReputacaoTextSubTitle = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: ${(props) =>
    props.theme.typography.desktop.subtitle1.fontWeight};
  font-size: ${(props) => props.theme.typography.desktop.subtitle1.fontSize};
  line-height: ${(props) => props.theme.typography.desktop.subtitle1.height};
  letter-spacing: ${(props) =>
    props.theme.typography.desktop.subtitle1.spacing};
  color: ${(props) => props.theme.colors.grey.darker};
`;
