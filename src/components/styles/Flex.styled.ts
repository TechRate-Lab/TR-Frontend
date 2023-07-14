import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  align-items: center;
  & > div {
    flex: 1;
  }
  
  @media(min-width: 1600px) {
    gap: 311px;
  }

`
