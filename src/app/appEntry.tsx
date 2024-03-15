import React from 'react'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from './appStore.ts'
import theme from './theme.ts'

import { Page } from '@/pages/cart'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Page />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)
