import { Link } from 'react-router-dom'

import HiokiSushi from '../../assets/images/hioki-sushi.png'
import star from '../../assets/images/estrela.svg'
import { Card, HeaderInfo, Info, Rating, Description, Infos } from './styles'
import Tag from '../Tag'
import { info } from 'console'
import { Restaurant } from '../../pages/Home'

type Props = {
  title: string
  rating: number
  description: string
  infos: string[]
  cape: string
  id: number
}

const RestaurantCard = ({
  title,
  rating,
  description,
  infos,
  cape,
  id
}: Props) => {
  const getDescription = (desc: string) => {
    if (desc.length > 280) {
      return desc.slice(0, 250) + '...'
    }
    return desc
  }

  return (
    <Card>
      <img src={cape} alt={title} />
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
        <Description>{getDescription(description)}</Description>
        <Link to={`/perfil/${id}`}>
          <Tag>Saiba mais</Tag>
        </Link>
      </Info>
    </Card>
  )
}

export default RestaurantCard
