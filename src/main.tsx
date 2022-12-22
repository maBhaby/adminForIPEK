import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from '@/App'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
