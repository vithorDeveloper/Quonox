import styled from 'styled-components'
import { cores } from '../../style/CSSglobal'

export const Container = styled.button`
  background-color: ${cores.corButton};

  border-radius: 0.3rem;
  border: none;

  font-size: 1rem;

  padding: 0.3rem 0.5rem;

  transition: all 0.2s;

  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: ${cores.corTitulo};

    border: 1px solid ${cores.corTitulo};
  }
`
