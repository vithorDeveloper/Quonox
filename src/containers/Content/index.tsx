import { Banner } from '../../components/Banner'
import { ContainerContent } from './style'
import { ListaDeProdutos } from '../ListaProdutos'

export const Content = () => (
  <ContainerContent>
    <Banner />
    <ListaDeProdutos />
  </ContainerContent>
)
