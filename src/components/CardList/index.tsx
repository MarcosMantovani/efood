import { useParams } from 'react-router-dom'

import Restaurant from '../../models/Restaurant'
import ProductCard from '../ProductCard/indes'
import RestaurantCard from '../RestaurantCard/indes'
import { ListContainer } from './styles'

export type Props = {
  type?: 'restaurants' | 'products'
  restaurants: Restaurant[]
}

const CardList = ({ type = 'restaurants', restaurants }: Props) => {
  const { id } = useParams()

  return (
    <ListContainer type={type} className="container">
      {type === 'restaurants' ? (
        <>
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              title={restaurant.title}
              rating={restaurant.rating}
              description={restaurant.description}
              infos={restaurant.infos}
              image={restaurant.image}
              id={restaurant.id}
            />
          ))}
        </>
      ) : (
        <>
          {restaurants
            .find((restaurant) => restaurant.id.toString() === id)
            ?.products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
              />
            ))}
        </>
      )}
    </ListContainer>
  )
}

export default CardList
