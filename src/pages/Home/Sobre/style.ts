import styled from "styled-components";

export const SobreSection = styled.section`
  position: relative;
  width: 100%;
  height: 818px;
`;
export const SobreBoxMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 112px;
  gap: 64px;

  position: absolute;
  width: 65%;
  left: 0px;
  top: 0px;

  background: ${(props) => props.theme.colors.secondary.normal};
  border-radius: 0px 0px 100px 0px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 75%;
    padding: 40px 10px;
  }
`;

export const BoxSecondary = styled.div`
  position: absolute;
  width: 35%;
  height: 700px;
  right: 0;
  top: 0;
  background: ${(props) => props.theme.colors.primary.normal};
  border-radius: 0px 0px 100px 0px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 25%;
  }
`;

export const BoxImage = styled.img`
  position: absolute;
  width: 600px;
  height: 510.12px;
  left: 850px;
  top: calc(50% - 610.12px / 2 + 0.06px);
  background: grey;
  border-radius: 100px 8px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 300px;
    height: 247px;
    top: calc(50% - 350.12px / 2 + 0.06px);
    left:525px;
  }
`;

export const SobreBoxMainTitle = styled.h1`
  color: #ffffff;

  font-family: "Poppins";
  font-style: normal;
  font-weight: ${(props) =>
    props.theme.typography.desktop.headline2.fontWeight};
  font-size: ${(props) => props.theme.typography.desktop.headline2.fontSize};
  line-height: ${(props) => props.theme.typography.desktop.headline2.height};
  letter-spacing: ${(props) =>
    props.theme.typography.desktop.headline2.spacing};
`;

export const SobreBoxMainText = styled.p`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SobreBoxMainParagraph = styled.p`
  width: 500px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: ${(props) => props.theme.typography.desktop.body2.fontWeight};
  font-size: ${(props) => props.theme.typography.desktop.body2.fontSize};
  line-height: ${(props) => props.theme.typography.desktop.body2.height};
  letter-spacing: ${(props) => props.theme.typography.desktop.body2.spacing};
  color: #ffffff;
`;

export const SobreBoxMainButton = styled.button`
  font-weight: medium;
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 100%;
  padding: 18px 24px;
  width: 180px;
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 8px;
  color: white;
  margin-top: 60px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary.dark};
  }
`;
