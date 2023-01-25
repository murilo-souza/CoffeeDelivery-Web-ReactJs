import { Minus, Plus } from 'phosphor-react'
import { Quantity, QuantityAction, QuantityContainer } from './styles'

interface QuantityButtonProps {
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}

export function QuantityButton({
  quantity,
  onDecrease,
  onIncrease,
}: QuantityButtonProps) {
  return (
    <QuantityContainer>
      <QuantityAction onClick={onDecrease} disabled={quantity === 1}>
        <Minus size={14} />
      </QuantityAction>
      <Quantity>{quantity}</Quantity>
      <QuantityAction onClick={onIncrease}>
        <Plus size={14} />
      </QuantityAction>
    </QuantityContainer>
  )
}
