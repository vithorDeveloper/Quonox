import { Link } from 'react-router-dom'
import { Conteudo, HeaderPages } from './style'
import { ArrowLeft } from '@phosphor-icons/react'
import { NavBar } from '../../../containers/Navbar'
import { Container } from '../../../style/CSSglobal'
import { ListaDeProdutos } from '../../../containers/ListaProdutos'

import { useEffect, useState } from 'react'
import { Game } from '../../Home'

export const FPS = () => {
  const [fps, setFps] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/fps')
      .then((res) => res.json())
      .then((res) => setFps(res))
  }, [])
  return (
    <Container>
      <NavBar />
      <Conteudo>
        <HeaderPages>
          <Link to="/">
            <ArrowLeft size={30} />
          </Link>
          <h2>Jogos de fps</h2>
        </HeaderPages>

        <ListaDeProdutos games={fps} />
      </Conteudo>
    </Container>
  )
}
