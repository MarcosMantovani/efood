import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

type ButtonProps = {
  margintop?: string
}

export const Card = styled.div`
  padding: 8px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.red};
  color: ${colors.beige};

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 300px;
  }

  > img {
    height: 168px;
    object-fit: cover;
  }
`

export const Info = styled.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
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

export const Button = styled.button<ButtonProps>`
  width: 100%;
  padding: 4px 8px;
  background-color: ${colors.beige};
  border: none;
  color: ${colors.red};
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  margin-top: ${(props) => props.margintop || '0'};
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  display: grid;
  grid-template-columns: 280px auto;
  column-gap: 24px;
  background-color: ${colors.red};
  padding: 32px;
  position: relative;
  z-index: 1;
  color: ${colors.white2};

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8px;
  }

  .modal-image {
    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
    }
  }

  header {
    h4 {
      font-size: 18px;
      font-weight: 900;
    }
  }

  .infos {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 0;
    height: 176px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  .button {
    padding-top: 16px;
    display: inline-block;
    display: flex;
  }

  .close {
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
  }
`
