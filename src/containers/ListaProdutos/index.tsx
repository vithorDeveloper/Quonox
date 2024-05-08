import { CardProduto } from '../../components/CardProduto'
import { Game } from '../../pages/Home'
import { ContainerProdutos } from './style'

type Props = {
  titulo?: string
  games: Game[]
}

export const ListaDeProdutos = ({ titulo, games }: Props) => {
  const formatoReal = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formatoReal(game.prices.current))
    }

    return tags
  }

  return (
    <ContainerProdutos>
      <h2>{titulo}</h2>

      <div className="conteudo">
        {games.map((game) => (
          <li key={game.id}>
            <CardProduto
              id={game.id}
              backgroundImage={game.media.thumbnail}
              nomeDoJogo={game.name}
              descricao={game.description}
              infos={getGameTags(game)}
            />
          </li>
        ))}
      </div>
    </ContainerProdutos>
  )
}
