import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/Tabs/App'
import * as serviceWorker from './serviceWorker'
import { ThemeContextProvider } from 'context/contextApp'
import { AddSquareProvider } from  'context/contextSquareApp'

ReactDOM.render(
  <ThemeContextProvider>
      <AddSquareProvider>
          <App />
      </AddSquareProvider>
  </ThemeContextProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
