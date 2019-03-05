import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }
  * {
    box-sizing: border-box;
  }
  img {
    width: 100%;
    max-width: 100%;
  }
`