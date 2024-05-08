import { Link } from 'react-router-dom'
import { Game } from '../../../models/games'
import { Conteudo, HeaderPages } from './style'
import { ArrowLeft } from '@phosphor-icons/react'
import { NavBar } from '../../../containers/Navbar'
import { Container } from '../../../style/CSSglobal'
import { ListaDeProdutos } from '../../../containers/ListaProdutos'

import jogo1 from '../../../assets/terror/capasSM/1.png'
import jogo2 from '../../../assets/terror/capasSM/2.png'
import jogo3 from '../../../assets/terror/capasSM/3.png'
import jogo4 from '../../../assets/terror/capasSM/4.png'
import jogo5 from '../../../assets/terror/capasSM/5.png'
import jogo6 from '../../../assets/terror/capasSM/6.png'
import jogo7 from '../../../assets/terror/capasSM/7.png'
import jogo8 from '../../../assets/terror/capasSM/8.png'
import jogo9 from '../../../assets/terror/capasSM/9.png'

export const Terror = () => (
  <Container>
    <NavBar />
    <Conteudo>
      <HeaderPages>
        <Link to="/">
          <ArrowLeft size={30} />
        </Link>
        <h2>Jogos de simulação</h2>
      </HeaderPages>

      {/* <ListaDeProdutos games={terror} /> */}
    </Conteudo>
  </Container>
)
