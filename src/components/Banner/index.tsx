import background from '../../assets/images/perfil-banner.png'
import { Title, SecondaryText, BannerContainer } from './styles'

const Banner = () => (
  <BannerContainer style={{ backgroundImage: `url(${background})` }}>
    <div className="container">
      <SecondaryText>Italiana</SecondaryText>
      <Title>La Dolce Vita Trattoria</Title>
    </div>
  </BannerContainer>
)

export default Banner
