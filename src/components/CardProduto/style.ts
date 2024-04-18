import styled from 'styled-components'

export type ImgJogo = {
  imagem: string
}

export const ContainerCard = styled.div`
  backdrop-filter: blur(5px) saturate(100%);
  background-color: rgba(37, 37, 40, 0.4);
  border: 1px solid rgba(95, 95, 95, 0.1);

  box-shadow: 0px 0px 11px 0px rgba(105, 105, 105, 0.1);

  border-radius: 0.8rem;

  padding: 0.2rem;

  width: 12rem;
  height: 13rem;
`

export const FotoDoJogo = styled.div<ImgJogo>`
  background-image: url(${(props) => props.imagem});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  width: 100%;
  height: 100%;

  border-radius: 0.6rem;
`
