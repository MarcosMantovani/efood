import { Title, SecondaryText, BannerContainer } from './styles'

export type Props = {
  cape: string
  type: string
  title: string
}

const Banner = ({ cape, type, title }: Props) => {
  return (
    <BannerContainer style={{ backgroundImage: `url(${cape})` }}>
      <div className="container">
        <SecondaryText>{type}</SecondaryText>
        <Title>{title}</Title>
      </div>
    </BannerContainer>
  )
}

export default Banner
