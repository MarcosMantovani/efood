import { useState } from 'react'
import { useDispatch } from 'react-redux'

import close from '../../assets/images/close.svg'

import { Menu, add, open } from '../../store/reducers/cart'

import * as S from './styles'

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
      <S.Card>
        <img src={photo} alt={title} />
        <S.Info>
          <div>
            <S.Title>{title}</S.Title>
            <S.Description>{getDescription(description)}</S.Description>
          </div>
          <S.Button onClick={() => setModalIsVisible(true)}>
            Mais detalhes
          </S.Button>
        </S.Info>
      </S.Card>
      <S.Modal className={modalIsVisible ? 'visible' : ''}>
        <S.ModalContent className="container">
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
              <S.Button onClick={addToCart}>
                Adicionar ao carrinho - {formatedPrice}
              </S.Button>
            </div>
          </div>
        </S.ModalContent>
        <div className="overlay" onClick={() => setModalIsVisible(false)}></div>
      </S.Modal>
    </>
  )
}

export default ProductCard
