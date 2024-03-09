import styled from 'styled-components'
import { colors } from '../../styles'
import close from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 70%;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.red};
  z-index: 1;
  padding: 32px 8px 0px 8px;
  max-width: 360px;
  width: 100%;

  span.noCartitems {
    color: ${colors.white};
    font-weight: 900;
    display: flex;
    justify-content: center;
  }
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
  color: ${colors.beige};
  margin: 40px 0 16px 0;
`

export const CartItem = styled.li`
  display: flex;
  position: relative;
  background-color: ${colors.beige};
  display: flex;
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;

  div {
  }

  > img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
  }

  button {
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
  }
`
