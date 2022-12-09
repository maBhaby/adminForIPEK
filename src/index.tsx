import React from 'react'
import ReactDOM from 'react-dom/client'
import { SWRConfig } from 'swr'
import App from '@/App'
import client from '@/utils/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher: url => client.get(url).json()
      }}
    >
      <App />
    </SWRConfig>
  </React.StrictMode>
)
