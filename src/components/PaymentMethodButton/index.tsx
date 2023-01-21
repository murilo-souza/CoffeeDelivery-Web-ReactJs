import { IconProps } from 'phosphor-react'
import React, { ButtonHTMLAttributes } from 'react'
import { useTheme } from 'styled-components'
import { Container, Title } from './styles'

interface PaymentMethodButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  icon: React.ElementType<IconProps>
}

export function PaymentMethodButton({
  title,
  icon: Icon,
  ...rest
}: PaymentMethodButtonProps) {
  const theme = useTheme()

  return (
    <Container {...rest}>
      <Icon size={16} color={theme.purple} />
      <Title>{title}</Title>
    </Container>
  )
}
