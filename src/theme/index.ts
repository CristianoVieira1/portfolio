import { createGlobalStyle } from 'styled-components'

interface IGlobalStylesProps {
  removeBg?: boolean
}

const GlobalStyles = createGlobalStyle<IGlobalStylesProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  


`

export default GlobalStyles
