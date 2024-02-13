import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import CardList from '../../components/CardList'
import { Restaurant } from '../Home'

const Perfil = () => {
  const { id } = useParams()

  const [menu, setMenu] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setMenu(res))
  }, [id])

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
