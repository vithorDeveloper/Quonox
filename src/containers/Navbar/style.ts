import styled from 'styled-components'
import { cores } from '../../style/CSSglobal'

export const ContainerNavbar = styled.nav`
  backdrop-filter: blur(5px) saturate(100%);
  background-color: rgba(37, 37, 40, 0.4);
  border: 1px solid rgba(95, 95, 95, 0.1);

  box-shadow: 0px 0px 11px 0px rgba(105, 105, 105, 0.1);

  border-radius: 0.8rem;

  padding: 1rem 0.5rem;

  h2 {
    font-size: 1rem;

    padding-bottom: 0.5rem;
  }

  .containerLogos {
    display: flex;
    justify-content: space-between;

    span {
      transition: all 0.2s;

      cursor: pointer;

      &:hover {
        color: ${cores.hoverTexto};
      }
    }
  }
`

export const Lista = styled.ul`
  padding-bottom: 4rem;

  li {
    padding: 0 0 0.3rem 0.6rem;

    a {
      color: ${cores.corTexto};

      font-size: 0.9rem;

      transition: all 0.2s;

      &:hover {
        color: ${cores.hoverTexto};
      }
    }
  }
`
