import RestaurantCard from '../RestaurantCard/indes'
import { ListContainer } from './styles'

const RestaurantList = () => (
  <ListContainer className="container">
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
  </ListContainer>
)

export default RestaurantList
