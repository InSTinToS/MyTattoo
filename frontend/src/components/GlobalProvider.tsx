import { ReactNode } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import store from 'store'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles'
import theme from 'styles/theme'

interface Props {
  children: ReactNode
}

const GlobalProvider = ({ children }: Props) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        {children}
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default GlobalProvider
