import Header from '../../components/Header'
import Banner from '../../components/Banner'
import CardList from '../../components/CardList'
import { restaurants } from '../Home'

const Perfil = () => (
  <>
    <Header />
    <Banner />
    <CardList type="products" restaurants={restaurants} />
  </>
)

export default Perfil
