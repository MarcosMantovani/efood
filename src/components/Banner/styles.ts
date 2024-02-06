import styled from 'styled-components'
import { colors } from '../../styles'

export const BannerContainer = styled.div`
  position: relative;
  font-size: 32px;
  background-repeat: no-repeat;
  background-size: cover;

  &::after {
    position: absolute;
    background-color: #000;

    width: 100%;
    height: 100%;
    opacity: 0.5;
    top: 0;
    left: 0;
    content: '';
  }

  .container {
    z-index: 1;
    position: relative;
  }
`

export const SecondaryText = styled.p`
  color: ${colors.white2};
  font-weight: 100;
  padding-top: 24px;
  padding-bottom: 160px;
`

export const Title = styled.p`
  color: ${colors.white2};
  font-weight: 900;
  padding-bottom: 32px;
`
