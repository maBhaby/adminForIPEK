import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from '@/App'
import '@fontsource/roboto/400.css'
import { SWRConfig } from 'swr'
import { StoreProvider } from './context/StoreProvider'
import { RootStore } from './store/Root'
import './styles/index.scss'

const theme = extendTheme({
  fonts: {
    heading: '\'Roboto\', sans-serif',
    body: '\'Roboto\', sans-serif'
  }
})
const rootStore = new RootStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider store={rootStore}>
    <SWRConfig
      value={{
        revalidateOnFocus: false
      }}
    >
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </SWRConfig>
  </StoreProvider>
)
