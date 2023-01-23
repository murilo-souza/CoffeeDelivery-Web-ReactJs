import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { CoffeeContextProvider } from './hooks/useCoffee'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <CoffeeContextProvider>
          <Router />
        </CoffeeContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
