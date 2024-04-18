import styled from 'styled-components'
import { cores } from '../../style/CSSglobal'
import { Titulo } from '.'

export const ContainerTag = styled.span<Titulo>`
  background-color: ${cores.corButton};
  color: ${cores.corFundo};

  padding: 0.3rem 0.5rem;

  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};

  border-radius: 0.5rem;

  transition: all 0.2s;
`
