import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money as MoneyIcon,
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Box } from '../../components/Box'
import { PaymentCard } from '../../components/PaymentCard'
import { PaymentMethodButton } from '../../components/PaymentMethodButton'
import { AddressForm } from './Components/AddressForm'
import {
  CheckoutButton,
  CheckoutTitle,
  Container,
  Description,
  HeaderAddress,
  HeaderSide,
  LeftSide,
  Money,
  PaymentMethodContainer,
  RightSide,
  SubtitleAddress,
  Title,
  TitleAddress,
  Total,
  Value,
  ValueContainer,
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
            <PaymentMethodButton title="Dinheiro" icon={MoneyIcon} />
          </PaymentMethodContainer>
        </Box>
      </LeftSide>
      <RightSide>
        <Title>Complete seu pedido</Title>
        <Box side="right">
          <PaymentCard />
          <PaymentCard />
          <PaymentCard />
          <ValueContainer>
            <Value>
              <Description>Total de itens</Description>
              <Money>R$ 29,90</Money>
            </Value>
            <Value>
              <Description>Entrega</Description>
              <Money>R$ 3,50</Money>
            </Value>
            <Value>
              <Total>Total</Total>
              <Total>R$ 33,20</Total>
            </Value>
          </ValueContainer>
          <CheckoutButton>
            <CheckoutTitle>Confirmar Pedido</CheckoutTitle>
          </CheckoutButton>
        </Box>
      </RightSide>
    </Container>
  )
}
