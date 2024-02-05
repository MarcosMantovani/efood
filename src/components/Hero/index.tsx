import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.png'

import { Image, Text } from './styles'

const Hero = () => (
  <Image style={{ backgroundImage: `url(${fundo})` }}>
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
