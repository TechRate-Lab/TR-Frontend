import styled from "styled-components";

interface MenuProps {
  isMenuOpen: boolean;
}

export const StyledHeader = styled.div`
  width: 100%;
  padding: 1rem 6.5rem;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 1rem;
  }
`;

export const Logo = styled.img`
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-right: 1rem;
    width: 93px;
    height: 30px;
  }
`;

export const Menu = styled.div<MenuProps>`
  display: flex;
  gap: 2rem;

  button {
    all: unset;
    color: ${(props) => props.theme.colors.grey.normal};
    font-size: ${(props) => props.theme.typography.desktop.body1.fontSize};
    line-height: ${(props) => props.theme.typography.desktop.body1.height};
    font-weight: ${(props) => props.theme.typography.desktop.body1.fontWeight};
    cursor: pointer;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    position: absolute;
    display: ${(props) => (props.isMenuOpen ? "flex" : "none")};
    background-color: white;
    padding: 1rem;
    width: 100%;
    z-index: 998;
    align-items: center;
    .button {
      margin-top: 10px;
    }
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: block;
    z-index: 999;
    div {
      width: 25px;
      height: 3px;
      background-color: ${(props) => props.theme.colors.grey.normal};
      margin: 4px 0;
      transition: 0.4s;
    }

    &.open {
      div:nth-child(1) {
        transform: rotate(-45deg) translate(-4px, 5px);
      }
      div:nth-child(2) {
        opacity: 0;
      }
      div:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
      }
    }
  }
`;
