import styled from 'styled-components'
import { cores } from '../../style/CSSglobal'

export const Conteudo = styled.div`
  scrollbar-color: red;
  overflow-y: auto;
  height: 53rem;

  scrollbar-color: ${cores.corFundo} ${cores.corFundo};
  scrollbar-width: thin;
`
