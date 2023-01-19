import { MapPin, ShoppingCart } from 'phosphor-react'
import { Address, Cart, HeaderContainer, PurchaseInfo } from './styles'
import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <PurchaseInfo>
        <Address>
          <MapPin size={22} weight="fill" />
          <p>Sorocaba, SP</p>
        </Address>
        <Cart>
          <ShoppingCart weight="fill" size={22} />
        </Cart>
      </PurchaseInfo>
    </HeaderContainer>
  )
}
