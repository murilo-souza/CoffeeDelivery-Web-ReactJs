import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money as MoneyIcon,
} from 'phosphor-react'

import { useNavigate } from 'react-router-dom'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { useTheme } from 'styled-components'
import { useCoffee } from '../../hooks/useCoffee'

import { PaymentCard } from '../../components/PaymentCard'
import { PaymentMethodButton } from '../../components/PaymentMethodButton'
import { formatNumberToMoney } from '../../utils/formatNumberToMoney'
import { Box } from '../../components/Box'
import { Input } from '../../components/Input'

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

const confirmOrderSchema = z.object({
  cep: z.string(),
  street: z.string(),
  houseNumber: z.string(),
  complement: z.string(),
  district: z.string(),
  city: z.string(),
  uf: z.string(),
  type: z.enum(['debit', 'credit', 'money']),
})

export type OrderData = z.infer<typeof confirmOrderSchema>

export function Checkout() {
  const navigate = useNavigate()
  const theme = useTheme()
  const { cart, cartItemTotalValue, cartQuantity, getOrderInfo } = useCoffee()

  const deliveryPrice = 3.5 * 100
  const total = cartItemTotalValue + deliveryPrice
  const numberFormatted = formatNumberToMoney(cartItemTotalValue)
  const totalFormatted = formatNumberToMoney(total)

  const {
    handleSubmit,
    register,
    control,
    formState: { isSubmitting },
  } = useForm<OrderData>({
    resolver: zodResolver(confirmOrderSchema),
  })

  function handleOrderCoffee(data: OrderData) {
    getOrderInfo(data)
    navigate('/success')
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
            <Input placeholder="CEP" className="cep" {...register('cep')} />
            <Input
              placeholder="Rua"
              className="street"
              {...register('street')}
            />
            <Input placeholder="Número" {...register('houseNumber')} />
            <Input
              placeholder="Complemento (opicional)"
              className="complement"
              {...register('complement')}
            />
            <Input placeholder="Bairro" {...register('district')} />
            <Input placeholder="Cidade" {...register('city')} />
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
          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <PaymentMethodContainer
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <PaymentMethodButton
                    title="Cartão de crédito"
                    value="credit"
                    icon={CreditCard}
                  />
                  <PaymentMethodButton
                    title="Cartão de débito"
                    icon={Bank}
                    value="debit"
                  />
                  <PaymentMethodButton
                    title="Dinheiro"
                    icon={MoneyIcon}
                    value="money"
                  />
                </PaymentMethodContainer>
              )
            }}
          />
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
          <CheckoutButton
            type="submit"
            disabled={!cartQuantity || isSubmitting}
          >
            <CheckoutTitle>Confirmar Pedido</CheckoutTitle>
          </CheckoutButton>
        </Box>
      </RightSide>
    </Container>
  )
}
