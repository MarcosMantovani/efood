import pizza from '../../assets/images/pizza.png'
import { Card, Title, Info, Description, CartButton } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const ProductCard = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Info>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <CartButton>Adicionar ao carrinho</CartButton>
    </Info>
  </Card>
)

export default ProductCard
