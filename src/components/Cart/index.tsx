import { Button } from '../ProductCard/styles'

import imagemTemp from '../../assets/images/hioki-sushi.png'
import dump from '../../assets/images/lixeira.png'

import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../ProductCard'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: string) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.cartId}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <div>
                  <span>{formatPrice(item.preco)}</span>
                </div>
              </div>
              <button type="button">
                <img src={dump} onClick={() => removeItem(item.cartId!)} />
              </button>
            </CartItem>
          ))}
          {items.length === 0 && (
            <span className="noCartitems">
              Nenhum prato adicionado ao carrinho
            </span>
          )}
        </ul>
        <Prices>
          <p>Valor total</p>
          <p>{formatPrice(getTotalPrice())}</p>
        </Prices>
        <Button type="button">Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
