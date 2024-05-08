import { Banner } from '../../components/Banner'
import { ListaDeProdutos } from '../../containers/ListaProdutos'

import { Container } from '../../style/CSSglobal'
import { NavBar } from '../../containers/Navbar'
import { Conteudo } from './style'
import { useEffect, useState } from 'react'

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category?: string
    system: string
  }
  media: {
    thumbnail: string
    cover: string
  }
}

export const Home = () => {
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))
  }, [])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setEmBreve(res))
  }, [])
  return (
    <Container>
      <NavBar />
      <Conteudo>
        <Banner />
        <ListaDeProdutos titulo="Promoções" games={promocoes} />
        <ListaDeProdutos titulo="Em Breve" games={emBreve} />
      </Conteudo>
    </Container>
  )
}
