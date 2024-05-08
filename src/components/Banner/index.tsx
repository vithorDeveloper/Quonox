import { Desktop, GameController } from '@phosphor-icons/react'
import bannerImg from '../../assets/home/blur60.png'
import { SectionBanner } from './style'
import { Tag } from '../Tag'
import { Link } from 'react-router-dom'
import { Game } from '../../pages/Home'
import { useEffect, useState } from 'react'

export const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  return (
    <SectionBanner backgroundImage={bannerImg}>
      <Tag>Em Destaque</Tag>

      <div>
        <h2>Resident Evil 4</h2>

        <span>
          <GameController size={20} />
        </span>
        <span>
          <Desktop size={20} />
        </span>

        <p className="preco">De R$ 100,00</p>
        <p>Por R$ 59,90</p>
      </div>

      <Link to={`DetalhesProduto/${game?.id}`}>Aproveitar</Link>
    </SectionBanner>
  )
}
