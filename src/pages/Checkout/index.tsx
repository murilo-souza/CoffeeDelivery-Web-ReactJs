import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Box } from '../../components/Box'
import { PaymentCard } from '../../components/PaymentCard'
import { PaymentMethodButton } from '../../components/PaymentMethodButton'
import { AddressForm } from './Components/AddressForm'
import {
  Container,
  HeaderAddress,
  HeaderSide,
  LeftSide,
  PaymentMethodContainer,
  RightSide,
  SubtitleAddress,
  Title,
  TitleAddress,
} from './styles'

export function Checkout() {
  const theme = useTheme()

  return (
    <Container>
      <LeftSide>
        <Title>Complete seu pedido</Title>
        <Box side="left">
          <HeaderAddress>
            <MapPinLine size={22} color={theme.yellowDark} />
            <HeaderSide>
              <TitleAddress>Endereço de Entrega</TitleAddress>
              <SubtitleAddress>
                Informe o endereço onde deseja receber seu pedido
              </SubtitleAddress>
            </HeaderSide>
          </HeaderAddress>
          <AddressForm />
        </Box>
        <Box side="left">
          <HeaderAddress>
            <CurrencyDollar size={22} color={theme.purple} />
            <HeaderSide>
              <TitleAddress>Endereço de Entrega</TitleAddress>
              <SubtitleAddress>
                Informe o endereço onde deseja receber seu pedido
              </SubtitleAddress>
            </HeaderSide>
          </HeaderAddress>
          <PaymentMethodContainer>
            <PaymentMethodButton title="Cartão de crédito" icon={CreditCard} />
            <PaymentMethodButton title="Cartão de débito" icon={Bank} />
            <PaymentMethodButton title="Dinheiro" icon={Money} />
          </PaymentMethodContainer>
        </Box>
      </LeftSide>
      <RightSide>
        <Title>Complete seu pedido</Title>
        <Box side="right">
          <PaymentCard />
        </Box>
      </RightSide>
    </Container>
  )
}
