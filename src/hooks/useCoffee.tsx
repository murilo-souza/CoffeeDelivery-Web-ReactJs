import produce from 'immer'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { CoffeeCardProps } from '../components/CoffeeCard'
import { OrderData } from '../pages/Checkout'
import { api } from '../services/api'

export interface Cart extends CoffeeCardProps {
  quantity: number
}

interface CoffeeContextData {
  coffees: CoffeeCardProps[]
  cart: Cart[]
  orderInfo: OrderData
  cartQuantity: number
  cartItemTotalValue: number
  addCoffeeToCart: (coffee: Cart) => void
  changeCartItemQuantity: (
    cartItemId: string,
    type: 'increase' | 'decrease',
  ) => void
  removeCoffeeInCart: (id: string) => void
  getOrderInfo: (data: OrderData) => void
}

interface ContextProviderProps {
  children: ReactNode
}
export const CoffeeContext = createContext({} as CoffeeContextData)

export function CoffeeContextProvider({ children }: ContextProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeCardProps[]>([])
  const [cart, setCart] = useState<Cart[]>([])
  const [orderInfo, setOrderInfo] = useState({} as OrderData)
  const cartQuantity = cart.length
  const cartItemTotalValue = cart.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  async function getData() {
    const response = await api.get('/products')
    setCoffees(response.data)
  }

  function addCoffeeToCart(coffee: Cart) {
    const coffeAlreadyExistsInCart = cart.findIndex(
      (cart) => cart.id === coffee.id,
    )

    const newItemInCart = produce(cart, (draft) => {
      if (coffeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCart(newItemInCart)
  }

  function changeCartItemQuantity(
    cartItemId: string,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cart, (draft) => {
      const CoffeeExistsInCart = cart.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (CoffeeExistsInCart >= 0) {
        const item = draft[CoffeeExistsInCart]
        item.quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCart(newCart)
  }

  function removeCoffeeInCart(id: string) {
    const newCart = produce(cart, (draft) => {
      const CoffeeExistsInCart = cart.findIndex(
        (cartItem) => cartItem.id === id,
      )

      if (CoffeeExistsInCart >= 0) {
        draft.splice(CoffeeExistsInCart, 1)
      }
    })

    setCart(newCart)

    setCart(newCart)
  }

  function getOrderInfo(data: OrderData) {
    setCart([])
    setOrderInfo(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        cart,
        cartQuantity,
        orderInfo,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCoffeeInCart,
        cartItemTotalValue,
        getOrderInfo,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}

export function useCoffee() {
  const context = useContext(CoffeeContext)
  return context
}
