import {
  Container,
  Footer,
  Header,
  Image,
  InfoContainer,
  Money,
  Title,
} from './styles'
import Coffee from '../../assets/Coffee.png'
import { QuantityButton } from '../QuantityButton'

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
        </Footer>
      </InfoContainer>
    </Container>
  )
}
