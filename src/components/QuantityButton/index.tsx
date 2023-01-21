import { Minus, Plus } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'
import { Quantity, QuantityAction, QuantityContainer } from './styles'

interface QuantityButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  quantity: number
}

export function QuantityButton({ quantity, ...rest }: QuantityButtonProps) {
  return (
    <QuantityContainer>
      <QuantityAction>
        <Minus size={14} />
      </QuantityAction>
      <Quantity>{quantity}</Quantity>
      <QuantityAction>
        <Plus size={14} />
      </QuantityAction>
    </QuantityContainer>
  )
}
