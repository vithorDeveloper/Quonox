import { Link } from 'react-router-dom'
import { Conteudo, HeaderPages } from './style'
import { ArrowLeft } from '@phosphor-icons/react'
import { NavBar } from '../../../containers/Navbar'
import { Container } from '../../../style/CSSglobal'
import { ListaDeProdutos } from '../../../containers/ListaProdutos'

import { Game } from '../../Home'
import { useEffect, useState } from 'react'

export const Estrategia = () => {
  const [estrategia, setEstrategia] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/estrategia')
      .then((res) => res.json())
      .then((res) => setEstrategia(res))
  }, [])
  return (
    <Container>
      <NavBar />
      <Conteudo>
        <HeaderPages>
          <Link to="/">
            <ArrowLeft size={30} />
          </Link>
          <h2>Jogos de estrategia</h2>
        </HeaderPages>

        <ListaDeProdutos games={estrategia} />
      </Conteudo>
    </Container>
  )
}
