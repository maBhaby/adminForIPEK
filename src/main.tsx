import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from '@/App'
import '@fontsource/roboto/400.css'
import './styles/index.scss'

const theme = extendTheme({
  fonts: {
    heading: '\'Roboto\', sans-serif',
    body: '\'Roboto\', sans-serif'
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
)
