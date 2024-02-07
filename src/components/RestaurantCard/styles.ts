import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  max-width: 472px;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Info = styled.div`
  background-color: ${colors.white2};
  border: 1px solid ${colors.red};
  border-top: 0px;
  padding: 8px;
`

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: bold;
    font-size: 18px;
  }
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  p {
    font-weight: bold;
    font-size: 18px;
  }
`

export const Description = styled.p`
  padding: 16px 0;
  line-height: 22px;
  font-size: 14px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  ${TagContainer} {
    font-size: 12px;
  }

  ${TagContainer} {
    margin-left: 8px;
  }
`
