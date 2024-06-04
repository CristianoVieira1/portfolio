import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'
import GlobalStyles from './theme'
import theme from './theme/theme'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      {isLoading && (
        <div id="loader" className="loader">
          <div id="loaderContent" className="loader__content">
            <div className="loader__shadow"></div>
            <div className="loader__box"></div>
          </div>
        </div>
      )}

      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

export default App
