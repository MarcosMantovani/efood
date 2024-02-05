import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/hero-background.png'

import { Image, Text } from './styles'

const Hero = () => (
  <Image style={{ backgroundImage: `url(${background})` }}>
    <h1>
      <img src={logo} alt="efood" />
    </h1>
    <Text>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </Text>
  </Image>
)

export default Hero
