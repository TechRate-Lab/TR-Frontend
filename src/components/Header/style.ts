import styled from 'styled-components'

export const StyledHeader = styled.div`
  width: 100%;
  padding: 1rem 6.5rem;  

  display: flex;
  justify-content: space-between;
`

export const Logo = styled.img``

export const Menu = styled.div`
  display: flex;
  gap: 2rem;

  button{
    all: unset;

    color: ${(props) => props.theme.colors.grey.normal};
    font-size: ${(props) => props.theme.typography.desktop.body1.fontSize};
    line-height: ${(props) => props.theme.typography.desktop.body1.height};
    font-weight: ${(props) => props.theme.typography.desktop.body1.fontWeight};

    cursor: pointer;
  }
`
