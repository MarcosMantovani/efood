import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/header-background.png'
import * as S from './styles'

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
    <S.Body style={{ backgroundImage: `url(${background})` }}>
      <div className="standardHeader">
        <S.HeaderContainer className="container">
          <Link to="/">Restaurantes</Link>
          <S.Logo>
            <img src={logo} alt="efood" />
          </S.Logo>
          <S.CartButton onClick={openCart}>
            {items.length} produto(s) no carrinho
          </S.CartButton>
        </S.HeaderContainer>
      </div>
      <div className="mobileHeader">
        <S.HeaderContainer className="container">
          <S.Logo>
            <img src={logo} alt="efood" />
          </S.Logo>
          <Link to="/">Restaurantes</Link>
          <S.CartButton onClick={openCart}>
            {items.length} produto(s) no carrinho
          </S.CartButton>
        </S.HeaderContainer>
      </div>
    </S.Body>
  )
}

export default Header
