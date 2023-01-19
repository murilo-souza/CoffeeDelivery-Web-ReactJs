import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 1rem
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.baseText};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 1rem
  }
`
