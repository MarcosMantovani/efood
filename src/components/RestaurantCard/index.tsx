import { Link } from 'react-router-dom'

import star from '../../assets/images/estrela.svg'

import * as S from './styles'
import Tag from '../Tag'

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
    <S.Card>
      <img src={cape} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.Info>
        <S.HeaderInfo>
          <h3>{title}</h3>
          <S.Rating>
            <p>{rating}</p>
            <img src={star} alt="star-rating" />
          </S.Rating>
        </S.HeaderInfo>
        <S.Description>{getDescription(description)}</S.Description>
        <Link to={`/perfil/${id}`}>
          <Tag>Saiba mais</Tag>
        </Link>
      </S.Info>
    </S.Card>
  )
}

export default RestaurantCard
