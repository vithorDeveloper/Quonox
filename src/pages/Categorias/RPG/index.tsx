import { Conteudo } from './style'
import { Game } from '../../../models/games'
import { NavBar } from '../../../containers/Navbar'
import { Container } from '../../../style/CSSglobal'
import { ListaDeProdutos } from '../../../containers/ListaProdutos'

import jogo1 from '../../../assets/rgp/1.png'
import jogo2 from '../../../assets/rgp/2.png'
import jogo3 from '../../../assets/rgp/3.png'
import jogo4 from '../../../assets/rgp/4.png'
import jogo5 from '../../../assets/rgp/5.png'
import jogo6 from '../../../assets/rgp/6.png'
import jogo7 from '../../../assets/rgp/7.png'
import jogo8 from '../../../assets/rgp/8.png'
import jogo9 from '../../../assets/rgp/9.png'

const rpg: Game[] = [
  {
    id: 1,
    backgroundImage: jogo1,
    nomeDoJogo: 'Black',
    descricao:
      'Um jogo de tiro em primeira pessoa com ação intensa e cenários destrutíveis.',
    infos: ['R$ 59,90', '33%']
  },
  {
    id: 2,
    backgroundImage: jogo2,
    nomeDoJogo: 'God of War',
    descricao:
      'o primeiro de série de jogos de ação e aventura baseada na mitologia grega, com um guerreiro espartano chamado Kratos.',
    infos: ['R$ 79,90', '23%']
  },
  {
    id: 3,
    backgroundImage: jogo3,
    nomeDoJogo: 'Bomba Patch',
    descricao:
      'Os melhores de mods para o jogo de futebol Pro Evolution Soccer, criada por Allan Jefferson no Brasil.',
    infos: ['R$ 9,90', '15%']
  },
  {
    id: 4,
    backgroundImage: jogo4,
    nomeDoJogo: 'Black',
    descricao:
      'Um jogo de tiro em primeira pessoa com ação intensa e cenários destrutíveis.',
    infos: ['R$ 59,90', '33%']
  },
  {
    id: 5,
    backgroundImage: jogo5,
    nomeDoJogo: 'God of War',
    descricao:
      'o primeiro de série de jogos de ação e aventura baseada na mitologia grega, com um guerreiro espartano chamado Kratos.',
    infos: ['R$ 79,90', '23%']
  },
  {
    id: 6,
    backgroundImage: jogo6,
    nomeDoJogo: 'Bomba Patch',
    descricao:
      'Os melhores de mods para o jogo de futebol Pro Evolution Soccer, criada por Allan Jefferson no Brasil.',
    infos: ['R$ 9,90', '15%']
  },
  {
    id: 7,
    backgroundImage: jogo7,
    nomeDoJogo: 'Black',
    descricao:
      'Um jogo de tiro em primeira pessoa com ação intensa e cenários destrutíveis.',
    infos: ['R$ 59,90', '33%']
  },
  {
    id: 8,
    backgroundImage: jogo8,
    nomeDoJogo: 'God of War',
    descricao:
      'o primeiro de série de jogos de ação e aventura baseada na mitologia grega, com um guerreiro espartano chamado Kratos.',
    infos: ['R$ 79,90', '23%']
  },
  {
    id: 9,
    backgroundImage: jogo9,
    nomeDoJogo: 'Bomba Patch',
    descricao:
      'Os melhores de mods para o jogo de futebol Pro Evolution Soccer, criada por Allan Jefferson no Brasil.',
    infos: ['R$ 9,90', '15%']
  }
]

export const RPG = () => (
  <Container>
    <NavBar />
    <Conteudo>
      <ListaDeProdutos titulo="Jogos RPG" games={rpg} />
    </Conteudo>
  </Container>
)
