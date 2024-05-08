import { Link } from 'react-router-dom'
import { Conteudo, HeaderPages } from './style'
import { ArrowLeft } from '@phosphor-icons/react'
import { NavBar } from '../../../containers/Navbar'
import { Container } from '../../../style/CSSglobal'
import { ListaDeProdutos } from '../../../containers/ListaProdutos'

import { Game } from '../../Home'

const emBreve: Game[] = []

export const EmBreve = () => (
  <Container>
    <NavBar />
    <Conteudo>
      <HeaderPages>
        <Link to="/">
          <ArrowLeft size={30} />
        </Link>
        <h2>Jogos em promoção</h2>
      </HeaderPages>

      <ListaDeProdutos games={emBreve} />
    </Conteudo>
  </Container>
)
