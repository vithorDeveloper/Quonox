import { Desktop, GameController } from '@phosphor-icons/react'
import bannerImg from '../../assets/blur60.png'
import { SectionBanner } from './style'
import { Tag } from '../Tag'

export const Banner = () => (
  <SectionBanner backgroundImage={bannerImg}>
    <Tag className="tag" titulo={'Em Destaque'} />

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

    <button>Aproveitar</button>
  </SectionBanner>
)
