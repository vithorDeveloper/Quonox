import styled from 'styled-components'
import { cores } from '../../style/CSSglobal'

export const ContainerHeader = styled.header`
  width: 1024px;

  margin: 1.5rem auto;

  display: flex;
  justify-content: space-between;

  .logo {
    font-family: 'Chakra Petch', sans-serif;
    cursor: pointer;
  }

  .divCart {
    display: flex;
    align-items: center;
    gap: 1.8rem;

    a,
    .iconUser {
      display: flex;
      align-items: center;

      color: ${cores.corTexto};

      transition: all 0.2s;

      cursor: pointer;

      &:hover {
        color: ${cores.hoverTexto};
      }
    }
  }
`
