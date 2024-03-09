import ProductCard from '../ProductCard'
import RestaurantCard from '../RestaurantCard'
import { ListContainer } from './styles'
import { Restaurant } from '../../pages/Home'

export type Props = {
  type?: 'restaurants' | 'products'
  restaurants?: Restaurant[]
  restaurantMenu?: Restaurant
}

const CardList = ({
  type = 'restaurants',
  restaurants,
  restaurantMenu
}: Props) => {
  const getRestaurantTags = (restaurant: Restaurant) => {
    const infos = []

    if (restaurant.destacado) {
      infos.push('Destaque da semana')
    }

    infos.push(restaurant.tipo)

    return infos
  }

  return (
    <ListContainer type={type} className="container">
      {type === 'restaurants' ? (
        <>
          {restaurants?.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              title={restaurant.titulo}
              rating={restaurant.avaliacao}
              description={restaurant.descricao}
              infos={getRestaurantTags(restaurant)}
              cape={restaurant.capa}
              id={restaurant.id}
            />
          ))}
        </>
      ) : (
        <>
          {restaurantMenu?.cardapio.map((cardapio) => (
            <ProductCard
              key={cardapio.id}
              title={cardapio.nome}
              description={cardapio.descricao}
              photo={cardapio.foto}
              portion={cardapio.porcao}
              price={cardapio.preco}
              menu={cardapio}
            />
          ))}
        </>
      )}
    </ListContainer>
  )
}

export default CardList
