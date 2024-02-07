import styled from 'styled-components'

import { Props } from '.'

export const ListContainer = styled.div<Omit<Props, 'restaurants'>>`
  padding-top: 80px;
  padding-bottom: 120px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.type === 'restaurants' ? '1fr 1fr' : '1fr 1fr 1fr'};
  column-gap: ${(props) => (props.type === 'restaurants' ? '80px' : '32px')};
  row-gap: ${(props) => (props.type === 'restaurants' ? '48px' : '32px')};
`
