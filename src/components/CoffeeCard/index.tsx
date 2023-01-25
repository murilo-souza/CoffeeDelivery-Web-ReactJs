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
import { useState } from 'react'
import { formatNumberToMoney } from '../../utils/formatNumberToMoney'

export interface CoffeeCardProps {
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
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart } = useCoffee()
  const numberFormatted = formatNumberToMoney(data.price)

  function handleAddToCart() {
    const coffeeToAdd = {
      ...data,
      quantity,
    }

    addCoffeeToCart(coffeeToAdd)
  }

  function handleIncreaseCoffeeQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecreaseCoffeeQuantity() {
    setQuantity((state) => state - 1)
  }

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
          R$ <h3>{numberFormatted}</h3>
        </Price>
        <Actions>
          <QuantityButton
            quantity={quantity}
            onIncrease={handleIncreaseCoffeeQuantity}
            onDecrease={handleDecreaseCoffeeQuantity}
          />
          <CartButton onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </Actions>
      </PurchaseArea>
    </CardContainer>
  )
}
