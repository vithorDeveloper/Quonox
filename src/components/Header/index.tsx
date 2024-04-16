import { ContainerHeader } from './style'
import { ShoppingCart, UserCircle } from '@phosphor-icons/react'

export const Header = () => (
  <>
    <ContainerHeader>
      <h1 className="logo">Quonox</h1>

      <div className="divCart">
        <a href="#">
          0 jogo(s) <ShoppingCart size={30} />
        </a>

        <UserCircle className="iconUser" size={30} />
      </div>
    </ContainerHeader>
  </>
)
