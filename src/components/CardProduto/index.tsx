import { Tag } from '../Tag'
import { ContainerCard, FotoDoJogo } from './style'
import jogoBlack from '../../assets/1.png'
import { Desktop, GameController } from '@phosphor-icons/react'

export const CardProduto = () => (
  <ContainerCard>
    <FotoDoJogo imagem={jogoBlack}>
      <Tag fontSize={'0.7rem'}>R$ 59,90</Tag>
      <Tag fontSize={'0.7rem'}>-33%</Tag>
    </FotoDoJogo>

    <h3>nome do jogo</h3>
    <span>
      <GameController />
    </span>
    <span>
      <Desktop />
    </span>
    <p>descrição</p>
  </ContainerCard>
)
