import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  Address,
  Cart,
  HeaderContainer,
  ImageNavLik,
  PurchaseInfo,
} from './styles'
import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <ImageNavLik to="/">
        <img src={Logo} alt="" />
      </ImageNavLik>
      <PurchaseInfo>
        <Address>
          <MapPin size={22} weight="fill" />
          <p>Sorocaba, SP</p>
        </Address>
        <Cart to="/checkout">
          <ShoppingCart weight="fill" size={22} />
        </Cart>
      </PurchaseInfo>
    </HeaderContainer>
  )
}
