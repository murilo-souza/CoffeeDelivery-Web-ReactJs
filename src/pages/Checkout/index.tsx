import { MapPinLine } from 'phosphor-react'
import { Box } from '../../components/Box'
import {
  Container,
  HeaderAddress,
  HeaderSide,
  LeftSide,
  SubtitleAddress,
  Title,
  TitleAddress,
} from './styles'

export function Checkout() {
  return (
    <Container>
      <LeftSide>
        <Title>Complete seu pedido</Title>
        <Box side="left">
          <HeaderAddress>
            <MapPinLine size={22} />
            <HeaderSide>
              <TitleAddress>Endereço de Entrega</TitleAddress>
              <SubtitleAddress>
                Informe o endereço onde deseja receber seu pedido
              </SubtitleAddress>
            </HeaderSide>
          </HeaderAddress>
        </Box>
      </LeftSide>
    </Container>
  )
}
