import styled from 'styled-components'
import { cores } from '../../style/CSSglobal'

export const ContainerProdutos = styled.section`
  margin-top: 3rem;

  .conteudo {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  h2 {
    display: inline-block;

    margin: 0 0 1rem 0.5rem;
    padding: 0.2rem 0.3rem;

    border-radius: 0.2rem;

    font-weight: normal;
    font-size: 1.2rem;

    background-color: ${cores.corButton};
    color: ${cores.corFundo};
  }
`
