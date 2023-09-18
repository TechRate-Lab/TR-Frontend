import styled from "styled-components";
import background from "../../../assets/homeBackground-branco.png";

export const Container = styled.section`
  width: 100%;
`;
export const Content = styled.section`
  background-color: ${(props) => props.theme.colors.primary.normal};
  position: relative;
`;

export const AvaliarCard = styled.div`
  padding: 5rem 5rem;

  &::before {
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    opacity: 0.3;
    z-index: 0;
    background-image: url(${background});
    background-size: cover;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 2rem 1rem 1rem 1rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
  
  }
`;

export const AvaliarCardTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-family: Poppins;
  font-size: ${(props) => props.theme.typography.desktop.headline4};
  font-style: normal;
  font-weight: 700;
  line-height: 130%;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 412px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.96px;
  }
`;
export const AvaliarCardSubtitle = styled.p`
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: 24px;
  color: ${(props) => props.theme.colors.white};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-weight: ${(props) =>
      props.theme.typography.desktop.subtitle1.fontWeight};
    font-size: ${(props) => props.theme.typography.desktop.subtitle1.fontSize};
    line-height: ${(props) => props.theme.typography.desktop.subtitle1.height};
    letter-spacing: ${(props) =>
      props.theme.typography.desktop.subtitle1.spacing};
  }
`;

export const AvaliarButton = styled.button`
  padding: 12px 20px;
  width: 220px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 8px;
  margin-top: 24px;
  margin-bottom: 35px;
  color: white;
  cursor: pointer;
  z-index: 1;
  position: relative;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  text-transform: uppercase;
  // &:hover {
  //   background-color: ${(props) => props.theme.colors.secondary.dark};
  // }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 16px 24px;
    width: 276px;
    font-size: 20px;
    font-weight: 500;
    line-height: 100%; /* 20px */
    text-transform: uppercase;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 24px 24px;
    margin-bottom: 0;
  }
`;
