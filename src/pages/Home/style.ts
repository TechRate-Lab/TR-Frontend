import styled from "styled-components";

export const MainSection = styled.section`
  display: flex;
  background-image: url("src/assets/homeBackground.png");
  background-size: cover;
`;

export const Call = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: Center;
  gap: 20px;
`;

export const CallTitle = styled.span`
  color: ${(props) => props.theme.colors.secondary.normal};
  font-size: ${(props) => props.theme.typography.desktop.headline1.fontSize};
  line-height: ${(props) => props.theme.typography.desktop.headline1.height};
  font-weight: ${(props) =>
    props.theme.typography.desktop.headline1.fontWeight};
`;

export const CallSubTitle = styled.span`
  width: 100%;
  color: ${(props) => props.theme.colors.grey.darker};
  font-size: ${(props) => props.theme.typography.desktop.subtitle1.fontSize};
  line-height: ${(props) => props.theme.typography.desktop.subtitle1.height};
  font-weight: ${(props) =>
    props.theme.typography.desktop.subtitle1.fontWeight};
`;

export const HeroSection = styled.div`
  width: 50%;
`;

export const RetangularTop = styled.div`
  position: absolute;
  width: 360px;
  height: 200px;
  top: 27%;

  background: linear-gradient(0deg, #013a37, #013a37);
  border-radius: 90px 8px 8px 8px;
`;

export const RetangularBottom = styled.div`
  position: absolute;
  width: 360px;
  height: 200px;
  top: 42%;
  left:61%;

  background: #6aedab;
  border-radius: 90px 8px;
`;



export const StarsUp = styled.div
`

`

export const HeroImage = styled.img`
  width: 361px;
  height: 250px;
  position: absolute;
  top: 30%;
  left: 60%;
`;



