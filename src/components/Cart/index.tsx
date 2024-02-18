import { Button } from '../ProductCard/styles'

import imagemTemp from '../../assets/images/hioki-sushi.png'
import dump from '../../assets/images/lixeira.png'

import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={imagemTemp} />
              <div>
                <h3>Nome do prato</h3>
                <div>
                  <span>Preço do prato</span>
                </div>
              </div>
              <button type="button">
                <img src={dump} />
              </button>
            </CartItem>
          ))}
        </ul>
        <Prices>
          <p>Valor total</p>
          <p>R$ 182,70</p>
        </Prices>
        <Button type="button">Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
