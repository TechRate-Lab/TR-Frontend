import styled from "styled-components";


export const FooterContainer = styled.footer
`
display:flex;
justify-content:space-around;
width:100%;
height:120px;
padding:20px 0px;
@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  margin-top:80px;
}



`

export const FooterLogo = styled.img
`
width: 160px;
  height: 50px;
  margin-left: 100px;

`

export const FooterMsg = styled.span
`
color: ${(props) => props.theme.colors.grey.dark};
font-size: ${(props) => props.theme.typography.headline6}

`

