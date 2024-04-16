import { ContainerNavbar } from './style'

export const NavBar = () => (
  <>
    <ContainerNavbar>
      <h2>Categorias</h2>

      <ul className="listaCategorias">
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
      </ul>

      <h2>Acesso Rápido</h2>

      <ul className="listaAcessoRapido">
        <li>
          <a href="">Novidades</a>
        </li>
        <li>
          <a href="">Promoções</a>
        </li>
        <li>
          <a href="">Em Breve</a>
        </li>
      </ul>
    </ContainerNavbar>
  </>
)
