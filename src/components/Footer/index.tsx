import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'
import facebook from '../../assets/images/facebook.svg'
import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <img src={logo} alt="" />
    <S.SocialMedias>
      <S.SocialMediaLink href="#">
        <img src={instagram} alt="instagram" />
      </S.SocialMediaLink>
      <S.SocialMediaLink href="#">
        <img src={facebook} alt="facebook" />
      </S.SocialMediaLink>
      <S.SocialMediaLink href="#">
        <img src={twitter} alt="twitter" />
      </S.SocialMediaLink>
    </S.SocialMedias>
    <S.FooterText>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br />
      dos produtos é toda do estabelecimento contratado.
    </S.FooterText>
  </S.FooterContainer>
)

export default Footer
