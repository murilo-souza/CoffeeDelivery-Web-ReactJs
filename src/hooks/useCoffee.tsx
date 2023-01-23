import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'

interface Coffee {
  id: string
  imgUrl: string
  title: string
  subtitle: string
  tags: string[]
  price: number
}

interface Cart {
  id: string
  imgUrl: string
  title: string
  price: number
}

interface CoffeeContextData {
  coffees: Coffee[]
  cart: Cart[]
  handleCart: (id: string) => void
}

interface ContextProviderProps {
  children: ReactNode
}
export const CoffeeContext = createContext({} as CoffeeContextData)

export function CoffeeContextProvider({ children }: ContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([])
  const [cart, setCart] = useState<Cart[]>([])

  async function getData() {
    const response = await api.get('/products')
    console.log(response)

    setCoffees(response.data)
  }

  function handleCart(id: string) {
    const inMyCart = coffees.map((coffee) => {
      if (coffee.id === id) {
        setCart([
          ...cart,
          {
            id: coffee.id,
            imgUrl: coffee.imgUrl,
            price: coffee.price,
            title: coffee.title,
          },
        ])
      }
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <CoffeeContext.Provider value={{ coffees, cart, handleCart }}>
      {children}
    </CoffeeContext.Provider>
  )
}

export function useCoffee() {
  const context = useContext(CoffeeContext)
  return context
}
