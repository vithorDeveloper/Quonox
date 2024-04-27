import styled from 'styled-components'
import { cores } from '../../../style/CSSglobal'

export const Conteudo = styled.div`
  overflow-y: auto;
  height: 53rem;

  section {
    margin-top: 0;

    h2 {
      display: none;
    }
  }

  scrollbar-color: ${cores.corFundo} ${cores.corFundo};
  scrollbar-width: thin;
`

export const HeaderPages = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2rem;

  h2 {
    background-color: ${cores.corButton};
    color: ${cores.corFundo};

    font-weight: normal;
    font-size: 1.2rem;

    border-radius: 0.5rem;

    padding: 0.3rem;
  }

  a {
    color: ${cores.corTitulo};

    transition: all 0.3s;

    &:hover {
      color: ${cores.hoverTexto};
    }
  }
`
