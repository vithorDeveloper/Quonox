import {
  AppleLogo,
  SteamLogo,
  TwitchLogo,
  WindowsLogo,
  YoutubeLogo
} from '@phosphor-icons/react'
import { ContainerNavbar, Lista } from './style'

export const NavBar = () => (
  <>
    <ContainerNavbar>
      <h2>Categorias</h2>

      <Lista className="listaCategorias">
        <li>
          <a href="">RPG</a>
        </li>
        <li>
          <a href="">Ação</a>
        </li>
        <li>
          <a href="">Esportes</a>
        </li>
        <li>
          <a href="">Simulação</a>
        </li>
        <li>
          <a href="">Estratégia</a>
        </li>
        <li>
          <a href="">FPS</a>
        </li>
      </Lista>

      <h2>Acesso Rápido</h2>

      <Lista>
        <li>
          <a href="">Novidades</a>
        </li>
        <li>
          <a href="">Promoções</a>
        </li>
        <li>
          <a href="">Em Breve</a>
        </li>
      </Lista>

      <div className="containerLogos">
        <span>
          <TwitchLogo size={26} />
        </span>
        <span>
          <SteamLogo size={26} />
        </span>
        <span>
          <YoutubeLogo size={26} />
        </span>
        <span>
          <WindowsLogo size={26} />
        </span>
        <span>
          <AppleLogo size={26} />
        </span>
      </div>
    </ContainerNavbar>
  </>
)
