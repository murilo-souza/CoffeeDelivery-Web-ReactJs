import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money as MoneyIcon,
} from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { Box } from '../../components/Box'
import { PaymentCard } from '../../components/PaymentCard'
import { PaymentMethodButton } from '../../components/PaymentMethodButton'
import { useCoffee } from '../../hooks/useCoffee'
import { formatNumberToMoney } from '../../utils/formatNumberToMoney'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  CheckoutButton,
  CheckoutTitle,
  Container,
  Description,
  FormContainer,
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
import { Input } from '../../components/Input'

const confirmOrderSchema = z.object({
  cep: z.string(),
  street: z.string(),
  houseNumber: z.string(),
  complement: z.string().nullable(),
  district: z.string(),
  city: z.string(),
  uf: z.string(),
})

export type OrderData = z.infer<typeof confirmOrderSchema>

export function Checkout() {
  const theme = useTheme()
  const { cart, cartItemTotalValue } = useCoffee()

  const deliveryPrice = 3.5 * 100
  const total = cartItemTotalValue + deliveryPrice
  const numberFormatted = formatNumberToMoney(cartItemTotalValue)
  const totalFormatted = formatNumberToMoney(total)

  const { handleSubmit, register } = useForm<OrderData>({
    resolver: zodResolver(confirmOrderSchema),
  })

  function handleOrderCoffee(data: OrderData) {
    console.log(data)
  }

  return (
    <Container onSubmit={handleSubmit(handleOrderCoffee)}>
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
          <FormContainer>
            <Input
              placeholder="CEP"
              type="text"
              className="cep"
              {...register('cep')}
            />
            <Input
              placeholder="Rua"
              type="text"
              className="street"
              {...register('street')}
            />
            <Input
              placeholder="Número"
              type="tex"
              {...register('houseNumber')}
            />
            <Input
              placeholder="Complemento"
              type="text"
              className="complement"
              {...register('complement')}
            />
            <Input placeholder="Bairro" type="text" {...register('district')} />
            <Input placeholder="Cidade" type="text" {...register('city')} />
            <Input placeholder="UF" {...register('uf')} />
          </FormContainer>
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
          {cart.map((cart) => (
            <PaymentCard coffee={cart} key={cart.id} />
          ))}

          <ValueContainer>
            <Value>
              <Description>Total de itens</Description>
              <Money>R$ {numberFormatted}</Money>
            </Value>
            <Value>
              <Description>Entrega</Description>
              <Money>R$ 3,50</Money>
            </Value>
            <Value>
              <Total>Total</Total>
              <Total>R$ {totalFormatted}</Total>
            </Value>
          </ValueContainer>
          <CheckoutButton type="submit">
            <CheckoutTitle>Confirmar Pedido</CheckoutTitle>
          </CheckoutButton>
        </Box>
      </RightSide>
    </Container>
  )
}
