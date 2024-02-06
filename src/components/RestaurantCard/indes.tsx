import HiokiSushi from '../../assets/images/hioki-sushi.png'
import star from '../../assets/images/estrela.svg'
import { Card, HeaderInfo, Info, Rating, Description, Infos } from './styles'
import Tag from '../Tag'
import { info } from 'console'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  rating: string
  description: string
  infos: string[]
  image: string
  id: number
}

const RestaurantCard = ({
  title,
  rating,
  description,
  infos,
  image,
  id
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Info>
      <HeaderInfo>
        <h3>{title}</h3>
        <Rating>
          <p>{rating}</p>
          <img src={star} alt="star-rating" />
        </Rating>
      </HeaderInfo>
      <Description>{description}</Description>
      <Link to={`/perfil/${id}`}>
        <Tag>Saiba mais</Tag>
      </Link>
    </Info>
  </Card>
)

export default RestaurantCard
