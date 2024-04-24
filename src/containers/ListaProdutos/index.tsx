import { CardProduto } from '../../components/CardProduto'
import { ContainerProdutos } from './style'
import { Game } from '../../models/games'

type Props = {
  titulo?: string
  games: Game[]
}

export const ListaDeProdutos = ({ titulo, games }: Props) => (
  <ContainerProdutos>
    <h2>{titulo}</h2>

    <div className="conteudo">
      {games.map((game) => (
        <CardProduto
          key={game.id}
          backgroundImage={game.backgroundImage}
          nomeDoJogo={game.nomeDoJogo}
          descricao={game.descricao}
          infos={game.infos}
        />
      ))}
    </div>
  </ContainerProdutos>
)
