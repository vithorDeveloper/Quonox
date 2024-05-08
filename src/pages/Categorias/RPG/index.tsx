import { Link } from 'react-router-dom'
import { Conteudo, HeaderPages } from './style'
import { ArrowLeft } from '@phosphor-icons/react'
import { NavBar } from '../../../containers/Navbar'
import { Container } from '../../../style/CSSglobal'
import { ListaDeProdutos } from '../../../containers/ListaProdutos'

import { useEffect, useState } from 'react'
import { Game } from '../../Home'

export const RPG = () => {
  const [rpg, setRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setRpg(res))
  }, [])
  return (
    <Container>
      <NavBar />
      <Conteudo>
        <HeaderPages>
          <Link to="/">
            <ArrowLeft size={30} />
          </Link>
          <h2>Jogos de rpg</h2>
        </HeaderPages>

        <ListaDeProdutos games={rpg} />
      </Conteudo>
    </Container>
  )
}
