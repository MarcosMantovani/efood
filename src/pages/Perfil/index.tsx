import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import CardList from '../../components/CardList'
import Loader from '../../components/Loader'

import { useGetRestaurantQuery } from '../../services/api'

type PerfilParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as PerfilParams
  const { data: menu } = useGetRestaurantQuery(id)

  return (
    <>
      <Header />
      {menu ? (
        <>
          <Banner title={menu.titulo} type={menu.tipo} cape={menu.capa} />
          <CardList type="products" restaurantMenu={menu} />
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Perfil
