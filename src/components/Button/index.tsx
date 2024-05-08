import { Container } from './style'

type Props = {
  children: string
}

export const Button = ({ children }: Props) => <Container>{children}</Container>
