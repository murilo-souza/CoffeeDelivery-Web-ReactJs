import { createContext, ReactNode, useState } from 'react'

interface Coffee {
  id: string
  imgUrl: string
  title: string
  subtitle: string
  tags: string[]
  price: number
}

interface CoffeeContextData {
  coffees: Coffee[]
}

interface ContextProviderProps {
  children: ReactNode
}
export const CoffeeContext = createContext({} as CoffeeContextData)

export function CoffeeContextProvider({ children }: ContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([])

  async function getData() {}

  return (
    <CoffeeContext.Provider value={{ coffees }}>
      {children}
    </CoffeeContext.Provider>
  )
}
