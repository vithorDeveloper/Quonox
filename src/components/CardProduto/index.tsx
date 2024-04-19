import { Tag } from '../Tag'
import { ContainerCard, ImagemCard } from './style'
import { Desktop, GameController } from '@phosphor-icons/react'

export type ImagemDoJogo = {
  backgroundImage: string
  nomeDoJogo: string
  descricao: string
}

export const CardProduto = ({
  backgroundImage,
  nomeDoJogo,
  descricao
}: ImagemDoJogo) => (
  <ContainerCard>
    <ImagemCard className="imagemCard">
      <img src={backgroundImage} />
      <div className="tags">
        <Tag fontSize={'0.7rem'}>R$ 59,90</Tag>
        <Tag fontSize={'0.7rem'}>-33%</Tag>
      </div>
    </ImagemCard>

    <div className="infos">
      <h3>{nomeDoJogo}</h3>
      <span>
        <GameController size={19} />
      </span>
      <span>
        <Desktop size={19} />
      </span>
      <p>{descricao}</p>
    </div>
  </ContainerCard>
)
