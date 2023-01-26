import { forwardRef, InputHTMLAttributes } from 'react'
import { useCoffee } from '../../hooks/useCoffee'
import { InputContainer } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>
// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { cartQuantity } = useCoffee()
  return <InputContainer {...props} ref={ref} disabled={!cartQuantity} />
})
