import GlobalProvider from 'components/providers/GlobalProvider'

import React from 'react'

const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: { color: /(background|color)$/i, date: /Date$/ }
  }
}

const decorators = [content => <GlobalProvider>{content()}</GlobalProvider>]

export { parameters, decorators }
