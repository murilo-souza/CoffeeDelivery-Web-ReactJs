import { IconProps } from 'phosphor-react'
import React from 'react'
import { useTheme } from 'styled-components'
import { useCoffee } from '../../hooks/useCoffee'
import { Container, Title } from './styles'

interface PaymentMethodButtonProps {
  title: string
  value: string
  icon: React.ElementType<IconProps>
}

export function PaymentMethodButton({
  title,
  value,
  icon: Icon,
}: PaymentMethodButtonProps) {
  const theme = useTheme()
  const { cartQuantity } = useCoffee()

  return (
    <Container value={value} disabled={!cartQuantity}>
      <Icon size={16} color={theme.purple} />
      <Title>{title}</Title>
    </Container>
  )
}
