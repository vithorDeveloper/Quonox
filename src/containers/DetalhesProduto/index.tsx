import { useParams } from 'react-router-dom'
import { SectionBanner } from '../../components/Banner/style'

import bannerResident from '../../assets/banner-terror/9.png'
import capaResident from '../../assets/terror/capasLG/2.png'
import { Container } from './style'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { ButtonVoltar } from '../../components/ButtonVoltar'
import { Game } from '../../pages/Home'
import { useEffect, useState } from 'react'

export const Detalhes = () => {
  const { id } = useParams()

  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  return (
    <>
      <Container>
        <ButtonVoltar />
        <SectionBanner backgroundImage={bannerResident}>
          <Tag>PS4 e PC</Tag>

          <img src={capaResident} alt="" />

          <div className="containInfos">
            <h1>Titulo do jogo</h1>

            <p>
              <span>de R$ 000,00</span>
              <span>por R$ 000,00</span>
            </p>

            <Button>Adicionar ao carrinho</Button>
          </div>
        </SectionBanner>

        <p className="descricao">
          Para se defender de Infectados e outros sobreviventes humanos, os
          jogadores usam armas como pistolas, rifles e explosivos caseiros,
          assim como ataques corpo a corpo com chaves de braço, bastões e canos
          de metal. Os jogadores também podem entrar em sequências de combate
          furtivo que incluem perspectiva de câmera em close. Ataques explosivos
          e com armas podem resultar em decapitação e/ou desmembramento. As
          cenas exibem atos intensos de violência, incluindo temáticas de
          suicídio e tortura. Durante o jogo, um personagem faz comentários de
          tom sexual sobre uma revista adulta, e um personagem jovem ingere
          bebida alcoólica. Linguagem chula é usada frequentemente nos diálogos.
        </p>

        <div className="videos">
          <iframe
            width="300"
            height="250"
            src="https://www.youtube.com/embed/kE7li_u1nmg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <iframe
            width="300"
            height="250"
            src="https://www.youtube.com/embed/kE7li_u1nmg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <iframe
            width="300"
            height="250"
            src="https://www.youtube.com/embed/kE7li_u1nmg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </Container>
    </>
  )
}
