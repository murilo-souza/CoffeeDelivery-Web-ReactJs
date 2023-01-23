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
import Coffee from '../../assets/Coffee.png'
import { QuantityButton } from '../QuantityButton'
import { Trash } from 'phosphor-react'

export function PaymentCard() {
  return (
    <Container>
      <Image src={Coffee} alt="" />
      <InfoContainer>
        <Header>
          <Title>Expresso Tradicional</Title>
          <Money>R$ 9,90</Money>
        </Header>
        <Footer>
          <QuantityButton quantity={1} />
          <RemoveButton>
            <Trash size={16} />
            <p>Remover</p>
          </RemoveButton>
        </Footer>
      </InfoContainer>
    </Container>
  )
}
