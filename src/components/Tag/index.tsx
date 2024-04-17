import { ContainerTag } from './style'

type Titulo = {
  titulo: string
  className?: string
  fontSize?: string
}

export const Tag = (props: Titulo) => (
  <ContainerTag className={props.className} fontSize={props.fontSize}>
    {props.titulo}
  </ContainerTag>
)
