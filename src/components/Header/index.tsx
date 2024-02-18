import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/header-background.png'
import { HeaderContainer, Logo, CartButton } from './styles'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <HeaderContainer className="container">
        <Link to="/">Restaurantes</Link>
        <Logo>
          <img src={logo} alt="efood" />
        </Logo>
        <CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </HeaderContainer>
    </div>
  )
}

export default Header
