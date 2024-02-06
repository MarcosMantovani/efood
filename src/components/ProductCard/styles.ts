import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  padding: 8px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.red};
  color: ${colors.beige};
`

export const Info = styled.div`
  padding-top: 8px;
`

export const HeaderInfo = styled.div`
  font-weight: bold;
  font-size: 18px;
`

export const Description = styled.p`
  padding: 8px 0;
  line-height: 22px;
  font-size: 14px;
  font-weight: 400;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
`

export const CartButton = styled.button`
  width: 100%;
  padding: 4px 0;
  background-color: ${colors.beige};
  border: none;
  color: ${colors.red};
  font-weight: bold;
  font-size: 14px;
`
