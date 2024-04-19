import styled from 'styled-components'
import { cores } from '../../style/CSSglobal'
import { ContainerTag } from '../Tag/style'

type SectionBannerProps = {
  backgroundImage: string
}

export const SectionBanner = styled.section<SectionBannerProps>`
  height: 18rem;
  width: 100%;

  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  border: 1px solid rgba(95, 95, 95, 0.1);
  border-radius: 0.5rem;

  box-shadow: 0px 0px 11px 0px rgba(105, 105, 105, 0.1);

  position: relative;

  div {
    position: absolute;
    bottom: 0.5rem;
    left: 6rem;

    color: ${cores.corTitulo};

    font-weight: bold;

    span {
      padding-right: 0.3rem;
    }

    .preco {
      margin-top: 0.8rem;

      text-decoration: line-through;
      font-weight: 400;

      color: #777;
    }
  }

  ${ContainerTag} {
    position: absolute;
    top: 1rem;
    left: 6rem;
  }
`

export const ButtonBanner = styled.button`
  background-color: transparent;
  color: ${cores.corTitulo};

  border: 1px solid ${cores.corTitulo};
  border-radius: 0.5rem;

  font-size: 1rem;

  padding: 0.5rem;

  position: absolute;
  bottom: 1rem;
  right: 6rem;

  transition: all 0.2s;

  cursor: pointer;

  &:hover {
    background-color: ${cores.corButton};
    color: ${cores.corFundo};

    border: none;
  }
`
