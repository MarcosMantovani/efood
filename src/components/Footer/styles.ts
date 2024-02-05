import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.div`
  background-color: ${colors.beige};
  text-align: center;
  padding: 40px 0;
`

export const SocialMedias = styled.div`
  padding-top: 32px;
  padding-bottom: 80px;
`

export const SocialMediaLink = styled.a`
  &:nth-of-type(2) {
    margin: 0 8px;
  }
`

export const FooterText = styled.p`
  font-size: 10px;
`
