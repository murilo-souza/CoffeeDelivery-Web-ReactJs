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

import { QuantityButton } from '../QuantityButton'
import { useCoffee } from '../../hooks/useCoffee'

interface CoffeeCardProps {
  id: string
  imgUrl: string
  title: string
  subtitle: string
  tags: string[]
  price: number
}

interface CoffeeData {
  data: CoffeeCardProps
}

export function CoffeeCard({ data }: CoffeeData) {
  const { handleCart } = useCoffee()

  return (
    <CardContainer>
      <CoffeeImg src={data.imgUrl} />
      <TagArea>
        {data.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagArea>
      <InfoArea>
        <Title>{data.title}</Title>
        <Subtitle>{data.subtitle}</Subtitle>
      </InfoArea>
      <PurchaseArea>
        <Price>
          R$ <h3>{data.price}</h3>
        </Price>
        <Actions>
          <QuantityButton quantity={1} />
          <CartButton onClick={() => handleCart(data.id)}>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </Actions>
      </PurchaseArea>
    </CardContainer>
  )
}
