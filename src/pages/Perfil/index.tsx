import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import CardList from '../../components/CardList'
import { Restaurant } from '../Home'
import { useGetRestaurantQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: menu } = useGetRestaurantQuery(id!)

  if (!menu) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Banner title={menu.titulo} type={menu.tipo} cape={menu.capa} />
      <CardList type="products" restaurantMenu={menu} />
    </>
  )
}

export default Perfil
