import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import store from 'store'

import GlobalStyle from 'styles'
import theme from 'styles/theme'

import { Provider as ReduxProvider } from 'react-redux'

interface Props {
  children: ReactNode
}

const GlobalProvider = ({ children }: Props) => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      {children}
    </ThemeProvider>
  </ReduxProvider>
)

export default GlobalProvider
