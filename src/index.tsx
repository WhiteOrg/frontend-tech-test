import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { App } from './components/App'
import { GlobalStyles } from './components/GlobalStyles'
import * as serviceWorker from './serviceWorker'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
