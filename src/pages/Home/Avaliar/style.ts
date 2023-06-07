import styled from "styled-components";

export const AvaliarSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  padding: 0 100px;
`;

export const AvaliarCard = styled.div`
  width: 1376px;
  height: 415px;

  background-color: #013a37;

  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  padding: 0 100px;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("src/assets/homeBackground-branco.png");
    background-size: cover;
    opacity: 0.3;
  }
`;

export const AvaliarCardTitle = styled.h1`
  width: 412px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: ${(props) =>
    props.theme.typography.desktop.headline2.fontWeight};
  font-size: ${(props) => props.theme.typography.desktop.headline2.fontSize};
  line-height: ${(props) => props.theme.typography.desktop.headline2.height};
  letter-spacing: ${(props) =>
    props.theme.typography.desktop.headline2.spacing};

  z-index: 5;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  color: #ffffff;
`;
export const AvaliarCardSubtitle = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: ${(props) =>
    props.theme.typography.desktop.subtitle1.fontWeight};
  font-size: ${(props) => props.theme.typography.desktop.subtitle1.fontSize};
  line-height: ${(props) => props.theme.typography.desktop.subtitle1.height};
  letter-spacing: ${(props) =>
    props.theme.typography.desktop.subtitle1.spacing};

  z-index: 5;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

export const AvaliarButton = styled.button`
  font-weight: medium;
  font-size: 22px;
  letter-spacing: 0px;
  line-height: 100%;
  padding: 24px 32px;
  width: 329px;
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 8px;
  color: white;
  margin-top: 60px;
  cursor: pointer;
  z-index: 5;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary.dark};
  }
`;
