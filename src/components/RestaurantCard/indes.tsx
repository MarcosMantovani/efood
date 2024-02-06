import HiokiSushi from '../../assets/images/hioki-sushi.png'
import star from '../../assets/images/estrela.svg'
import { Card, HeaderInfo, Info, Rating, Description, Infos } from './styles'
import Tag from '../Tag'

const RestaurantCard = () => (
  <Card>
    <img src={HiokiSushi} alt="Hioki Sushi" />
    <Infos>
      <Tag></Tag>
      <Tag></Tag>
    </Infos>
    <Info>
      <HeaderInfo>
        <h3>Hioki Sushi</h3>
        <Rating>
          <p>4.9</p>
          <img src={star} alt="star-rating" />
        </Rating>
      </HeaderInfo>
      <Description>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão
        sem sair do lar com nosso delivery!
      </Description>
      <Tag></Tag>
    </Info>
  </Card>
)

export default RestaurantCard
