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

type Props = {
  title: string
  description: string
  photo: string
  portion: string
  price: number
}

const ProductCard = ({ title, description, photo, portion, price }: Props) => {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const getDescription = (desc: string) => {
    if (desc.length > 180) {
      return desc.slice(0, 160) + '...'
    }
    return desc
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const formatedPrice = formatPrice(price)

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
              <Button onClick={() => setModalIsVisible(false)}>
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
