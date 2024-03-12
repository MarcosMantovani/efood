import CardList from '../../components/CardList'
import Hero from '../../components/Hero'
import Loader from '../../components/Loader'

import { useGetRestaurantsQuery } from '../../services/api'

export type Restaurant = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  return (
    <>
      <Hero />
      {isLoading && <Loader />}
      <CardList type="restaurants" restaurants={restaurants} />
    </>
  )
}

export default Home
