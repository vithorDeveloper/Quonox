import styled from 'styled-components'
import { cores } from '../../style/CSSglobal'

export const ContainerNavbar = styled.nav`
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(9, 9, 9, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  border-radius: 0.8rem;

  padding: 1rem 0.5rem;

  h2 {
    font-size: 1rem;
    padding-bottom: 0.5rem;
  }

  ul {
    li {
      padding-left: 0.6rem;

      a {
        color: ${cores.corTexto};
        font-size: 0.9rem;
      }
    }
  }

  .listaCategorias {
    padding-bottom: 4rem;
  }
`
