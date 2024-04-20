import { Banner } from '../../components/Banner'
import { ListaDeProdutos } from '../../containers/ListaProdutos'
import { Game } from '../../models/games'

import jogoBlack from '../../assets/BLACK.png'
import { Container } from '../../style/CSSglobal'
import { NavBar } from '../../containers/Navbar'
import jogoGod from '../../assets/GOD.png'
import jogoBomba from '../../assets/BOMBA.png'
import jogoBully from '../../assets/BULLY.png'
import jogoGta from '../../assets/GTA.png'
import jogoNeed from '../../assets/NEED.png'
import { Conteudo } from './style'

const promocoes: Game[] = [
  {
    id: 1,
    backgroundImage: jogoBlack,
    nomeDoJogo: 'Black',
    descricao:
      'Um jogo de tiro em primeira pessoa com ação intensa e cenários destrutíveis.',
    infos: ['R$ 59,90', '33%']
  },
  {
    id: 2,
    backgroundImage: jogoGod,
    nomeDoJogo: 'God of War',
    descricao:
      'o primeiro de série de jogos de ação e aventura baseada na mitologia grega, com um guerreiro espartano chamado Kratos.',
    infos: ['R$ 79,90', '23%']
  },

  {
    id: 3,
    backgroundImage: jogoBomba,
    nomeDoJogo: 'Bomba Patch',
    descricao:
      'Os melhores de mods para o jogo de futebol Pro Evolution Soccer, criada por Allan Jefferson no Brasil.',
    infos: ['R$ 9,90', '15%']
  }
]
const emBreve: Game[] = [
  {
    id: 1,
    backgroundImage: jogoBully,
    nomeDoJogo: 'Bully',
    descricao:
      'Um jogo de ação-aventura em ambiente escolar, onde o jogador enfrenta valentões e desafios sociais em uma academia interna.',
    infos: ['15/06']
  },
  {
    id: 2,
    backgroundImage: jogoGta,
    nomeDoJogo: 'Gta San Andreas',
    descricao:
      'Uma série de jogos de ação-aventura em mundo aberto, onde os jogadores realizam missões e exploram cidades fictícias inspiradas em locais reais.',
    infos: ['06/09']
  },

  {
    id: 3,
    backgroundImage: jogoNeed,
    nomeDoJogo: 'Need for speed',
    descricao:
      'Uma franquia de jogos de corrida que enfatiza corridas de alta velocidade, personalização de veículos e fugas da polícia',
    infos: ['22/11']
  }
]

export const Home = () => (
  <Container>
    <NavBar />
    <Conteudo>
      <Banner />
      <ListaDeProdutos titulo="Promoções" games={promocoes} />
      <ListaDeProdutos titulo="Em Breve" games={emBreve} />
    </Conteudo>
  </Container>
)
