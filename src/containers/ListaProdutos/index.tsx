import { CardProduto } from '../../components/CardProduto'
import { ContainerProdutos } from './style'
import jogoBlack from '../../assets/1.png'
import jogoGod from '../../assets/2.png'
import jogoBomba from '../../assets/4.png'

type Props = {
  titulo: string
}

export const ListaDeProdutos = ({ titulo }: Props) => (
  <ContainerProdutos>
    <h2>{titulo}</h2>

    <div className="conteudo">
      <CardProduto
        backgroundImage={jogoBlack}
        nomeDoJogo="Black"
        descricao="Um jogo de tiro em primeira pessoa com ação intensa e cenários destrutíveis."
        infos={['R$ 59,90', '33%']}
      />
      <CardProduto
        backgroundImage={jogoGod}
        nomeDoJogo="God of War"
        descricao="o primeiro de série de jogos de ação e aventura baseada na mitologia grega, com um guerreiro espartano chamado Kratos."
        infos={['R$ 79,90', '23%']}
      />
      <CardProduto
        backgroundImage={jogoBomba}
        nomeDoJogo="Bomba Patch"
        descricao="Os melhores de mods para o jogo de futebol Pro Evolution Soccer, criada por Allan Jefferson no Brasil."
        infos={['R$ 9,90', '15%']}
      />
    </div>
  </ContainerProdutos>
)
