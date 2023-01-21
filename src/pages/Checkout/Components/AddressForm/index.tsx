import { Input } from '../../../../components/Input'
import { FormContainer } from './styles'

export function AddressForm() {
  return (
    <FormContainer>
      <Input placeholder="CEP" type="number" className="cep" />
      <Input placeholder="Rua" type="text" className="street" />
      <Input placeholder="Número" type="number" />
      <Input placeholder="Complemento" type="text" className="complement" />
      <Input placeholder="Bairro" type="text" />
      <Input placeholder="Cidade" type="number" />
      <Input placeholder="UF" />
    </FormContainer>
  )
}
