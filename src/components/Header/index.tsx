import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/header-background.png'
import { HeaderContainer, Logo, LinkCart } from './styles'

const Header = () => (
  <div style={{ backgroundImage: `url(${background})` }}>
    <HeaderContainer className="container">
      <Link to="/">Restaurantes</Link>
      <Logo>
        <img src={logo} alt="efood" />
      </Logo>
      <LinkCart>0 produto(s) no carrinho</LinkCart>
    </HeaderContainer>
  </div>
)

export default Header
