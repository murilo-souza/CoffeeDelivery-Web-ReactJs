import {
  Container,
  Image,
  InfoContainer,
  InfoTextContainer,
  ProductInfo,
  Subtitle,
  Title,
} from './styles'
import CoffeeImg from '../../assets/CoffeeImg.png'
import { InfoText } from '../../components/InfoText'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Home() {
  return (
    <Container>
      <InfoContainer>
        <ProductInfo>
          <Title>
            Encontre o café perfeito
            <br /> para qualquer hora do dia
          </Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a <br />{' '}
            qualquer hora
          </Subtitle>
          <InfoTextContainer>
            <InfoText title="Compra simples e segura" icon={ShoppingCart} />
            <InfoText title="Embalagem mantém o café intacto" icon={Package} />
            <InfoText title="Entrega rápida e rastreada" icon={Timer} />
            <InfoText title="O café chega fresquinho até você" icon={Coffee} />
          </InfoTextContainer>
        </ProductInfo>
        <Image src={CoffeeImg} alt="" />
      </InfoContainer>
    </Container>
  )
}
