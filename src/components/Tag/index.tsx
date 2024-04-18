import { ContainerTag } from './style'

export type Titulo = {
  children: string
  fontSize?: string
}

export const Tag = ({ children, fontSize }: Titulo) => (
  <ContainerTag fontSize={fontSize}>{children}</ContainerTag>
)
