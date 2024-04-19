import { Tag } from '../Tag'
import { ContainerCard, ImagemCard } from './style'
import { Desktop, GameController } from '@phosphor-icons/react'

export type PropsCard = {
  backgroundImage: string
  nomeDoJogo: string
  descricao: string
  infos: string[]
}

export const CardProduto = ({
  backgroundImage,
  nomeDoJogo,
  descricao,
  infos
}: PropsCard) => (
  <ContainerCard>
    <ImagemCard className="imagemCard">
      <img src={backgroundImage} />

      <div className="tags">
        {infos.map((info) => (
          <Tag fontSize={'0.7rem'} key={info}>
            {info}
          </Tag>
        ))}
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
