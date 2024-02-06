import { useParams } from 'react-router-dom'

import { Title, SecondaryText, BannerContainer } from './styles'
import { restaurants } from '../../pages/Home'

const Banner = () => {
  const { id } = useParams()

  const currentRestaurant = restaurants.find(
    (restaurant) => restaurant.id.toString() === id
  )

  const backgroundImage = currentRestaurant?.image

  const lastInfo = currentRestaurant?.infos[currentRestaurant.infos.length - 1]

  return (
    <BannerContainer style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <SecondaryText>{lastInfo}</SecondaryText>
        <Title>{currentRestaurant?.title}</Title>
      </div>
    </BannerContainer>
  )
}

export default Banner
