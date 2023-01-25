import {
  Container,
  Footer,
  Header,
  Image,
  InfoContainer,
  Money,
  RemoveButton,
  Title,
} from './styles'
import { QuantityButton } from '../QuantityButton'
import { Trash } from 'phosphor-react'
import { formatNumberToMoney } from '../../utils/formatNumberToMoney'
import { Cart, useCoffee } from '../../hooks/useCoffee'

interface PaymentCardProps {
  coffee: Cart
}

export function PaymentCard({ coffee }: PaymentCardProps) {
  const { changeCartItemQuantity, removeCoffeeInCart } = useCoffee()

  function handleIncreaseCoffeeQuantity() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecreaseCoffeeQuantity() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  return (
    <Container>
      <Image src={coffee.imgUrl} alt="" />
      <InfoContainer>
        <Header>
          <Title>{coffee.title}</Title>
        </Header>
        <Footer>
          <QuantityButton
            quantity={coffee.quantity}
            onIncrease={handleIncreaseCoffeeQuantity}
            onDecrease={handleDecreaseCoffeeQuantity}
          />
          <RemoveButton onClick={() => removeCoffeeInCart(coffee.id)}>
            <Trash size={16} />
            <p>Remover</p>
          </RemoveButton>
        </Footer>
      </InfoContainer>
      <Money>R$ {formatNumberToMoney(coffee.price * coffee.quantity)}</Money>
    </Container>
  )
}
