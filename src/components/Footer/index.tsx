import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'
import facebook from '../../assets/images/facebook.svg'
import {
  FooterContainer,
  FooterText,
  SocialMediaLink,
  SocialMedias
} from './styles'

const Footer = () => (
  <FooterContainer>
    <img src={logo} alt="" />
    <SocialMedias>
      <SocialMediaLink href="#">
        <img src={instagram} alt="instagram" />
      </SocialMediaLink>
      <SocialMediaLink href="#">
        <img src={facebook} alt="facebook" />
      </SocialMediaLink>
      <SocialMediaLink href="#">
        <img src={twitter} alt="twitter" />
      </SocialMediaLink>
    </SocialMedias>
    <FooterText>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br />
      dos produtos é toda do estabelecimento contratado.
    </FooterText>
  </FooterContainer>
)

export default Footer
