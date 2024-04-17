import styled from 'styled-components'
import { cores } from '../../style/CSSglobal'

export type TamanhoFonte = {
  fontSize?: string
}

export const ContainerTag = styled.span<TamanhoFonte>`
  background-color: ${cores.corButton};
  color: ${cores.corFundo};

  padding: 0.5rem;

  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};

  border-radius: 0.5rem;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background-color: ${cores.corFundo};
    color: ${cores.corButton};
    border: 1px solid ${cores.corFundo};
  }
`
