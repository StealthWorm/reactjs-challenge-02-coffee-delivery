import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'

export function Header() {
  const { coffees } = useContext(CoffeesContext)

  const countItemsInCart = coffees.filter((coffee) => coffee.inCart).length

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="" />
      </NavLink>
      <nav>
        <NavLink to="/" title="Localização">
          <MapPin size={24} weight="fill" />
          <span>Ponta Grossa, PR</span>
        </NavLink>
        <NavLink to="/checkout" title="Carrinho">
          <ShoppingCart size={24} weight="fill" />

          {countItemsInCart > 0 &&
            <span>{countItemsInCart}</span>
          }
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
