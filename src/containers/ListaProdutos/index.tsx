import { CardProduto } from '../../components/CardProduto'
import { ContainerProdutos } from './style'
import jogoBlack from '../../assets/1.png'
import jogoGod from '../../assets/2.png'
import jogoBully from '../../assets/3.png'
import jogoBomba from '../../assets/4.png'

export const ListaDeProdutos = () => (
  <ContainerProdutos>
    <CardProduto
      backgroundImage={jogoBlack}
      nomeDoJogo="Black"
      descricao="Um jogo de tiro em primeira pessoa com ação intensa e cenários destrutíveis."
    />
    <CardProduto
      backgroundImage={jogoGod}
      nomeDoJogo="God of War"
      descricao="o primeiro de série de jogos de ação e aventura baseada na mitologia grega, com um guerreiro espartano chamado Kratos."
    />
    <CardProduto
      backgroundImage={jogoBomba}
      nomeDoJogo="Bomba Patch"
      descricao="Os melhores de mods para o jogo de futebol Pro Evolution Soccer, criada por Allan Jefferson no Brasil."
    />
  </ContainerProdutos>
)
