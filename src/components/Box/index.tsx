import { ReactNode } from 'react'
import { Container } from './styles'

interface Props {
  children: ReactNode
  side: 'left' | 'right'
}

export function Box({ children, side }: Props) {
  return <Container side={side}>{children}</Container>
}
