import { colors } from '../../styles'

import { MoonLoader } from 'react-spinners'

import { Container } from './styles'

const Loader = () => (
  <Container>
    <MoonLoader color={colors.red} />
  </Container>
)

export default Loader
