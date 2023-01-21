import { ShoppingCart } from 'phosphor-react'
import {
  Actions,
  CardContainer,
  CartButton,
  CoffeeImg,
  InfoArea,
  Price,
  PurchaseArea,
  Subtitle,
  Tag,
  TagArea,
  Title,
} from './styles'

import Coffee from '../../assets/Coffee.png'
import { QuantityButton } from '../QuantityButton'

export function CoffeeCard() {
  return (
    <CardContainer>
      <CoffeeImg src={Coffee} />
      <TagArea>
        <Tag>Tradicional</Tag>
      </TagArea>
      <InfoArea>
        <Title>Expresso Tradicional</Title>
        <Subtitle>
          O tradicional café feito com água quente e grãos moídos
        </Subtitle>
      </InfoArea>
      <PurchaseArea>
        <Price>
          R$ <h3>9,90</h3>
        </Price>
        <Actions>
          <QuantityButton quantity={1} />
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </Actions>
      </PurchaseArea>
    </CardContainer>
  )
}
