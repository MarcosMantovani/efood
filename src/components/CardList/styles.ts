import styled from 'styled-components'

import { Props } from '.'
import { breakpoints } from '../../styles'

export const ListContainer = styled.div<Omit<Props, 'restaurants'>>`
  padding-top: 80px;
  padding-bottom: 120px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.type === 'restaurants' ? '1fr 1fr' : '1fr 1fr 1fr'};
  column-gap: ${(props) => (props.type === 'restaurants' ? '80px' : '32px')};
  row-gap: ${(props) => (props.type === 'restaurants' ? '48px' : '32px')};

  @media (max-width: ${breakpoints.desktop}) {
    display: ${(props) => (props.type === 'restaurants' ? 'flex' : 'grid')};
    flex-direction: column;
    align-items: ${(props) => (props.type === 'restaurants' ? 'center' : '')};
    grid-template-columns: ${(props) =>
      props.type === 'restaurants' ? '' : '1fr 1fr'};
    row-gap: ${(props) => (props.type === 'restaurants' ? '24px' : '16px')};
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: ${(props) => (props.type === 'restaurants' ? '24px' : '16px')};
  }
`
