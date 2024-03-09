import { useState } from 'react'
import pizza from '../../assets/images/pizza.png'
import close from '../../assets/images/close.svg'
import {
  Card,
  Title,
  Info,
  Description,
  Button,
  Modal,
  ModalContent
} from './styles'

import { Menu, add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'
import { Restaurant } from '../../pages/Home'

type Props = {
  title: string
  description: string
  photo: string
  portion: string
  price: number
  menu: Menu
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const ProductCard = ({
  title,
  description,
  photo,
  portion,
  price,
  menu
}: Props) => {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const dispatch = useDispatch()

  const getDescription = (desc: string) => {
    if (desc.length > 180) {
      return desc.slice(0, 160) + '...'
    }
    return desc
  }

  const formatedPrice = formatPrice(price)

  const addToCart = () => {
    dispatch(add(menu))
    dispatch(open())
  }

  return (
    <>
      <Card>
        <img src={photo} alt={title} />
        <Info>
          <Title>{title}</Title>
          <Description>{getDescription(description)}</Description>
          <Button onClick={() => setModalIsVisible(true)}>Mais detalhes</Button>
        </Info>
      </Card>
      <Modal className={modalIsVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <div className="close">
            <img
              src={close}
              alt="close icon"
              onClick={() => setModalIsVisible(false)}
            />
          </div>
          <div className="modal-image">
            <img src={photo} alt="pizza" />
          </div>
          <div>
            <header>
              <h4>{title}</h4>
            </header>
            <div className="infos">
              <p className="description">{description}</p>
              <p>Serve: {portion}</p>
            </div>
            <div className="button">
              <Button onClick={addToCart}>
                Adicionar ao carrinho - {formatedPrice}
              </Button>
            </div>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => setModalIsVisible(false)}></div>
      </Modal>
    </>
  )
}

export default ProductCard
