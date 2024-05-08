import { Link } from 'react-router-dom'
import { Conteudo, HeaderPages } from './style'
import { ArrowLeft } from '@phosphor-icons/react'
import { NavBar } from '../../../containers/Navbar'
import { Container } from '../../../style/CSSglobal'
import { ListaDeProdutos } from '../../../containers/ListaProdutos'

import { Game } from '../../Home'

const promocoes: Game[] = []

export const Promocoes = () => (
  <Container>
    <NavBar />
    <Conteudo>
      <HeaderPages>
        <Link to="/">
          <ArrowLeft size={30} />
        </Link>
        <h2>Jogos de simulação</h2>
      </HeaderPages>

      <ListaDeProdutos games={promocoes} />
    </Conteudo>
  </Container>
)
