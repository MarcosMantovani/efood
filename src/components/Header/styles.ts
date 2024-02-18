import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;
  font-size: 18px;
  padding-top: 40px;
  padding-bottom: 64px;

  a {
    text-decoration: none;
    color: ${colors.red};
  }
`

export const Logo = styled.h1`
  text-align: center;
`

export const CartButton = styled.a`
  text-align: end;
  cursor: pointer;
`
