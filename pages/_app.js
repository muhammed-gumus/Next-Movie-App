import '../styles/normalize.css'
import utilsStyle from '../styles/utils.module.css'
import { ChakraProvider } from '@chakra-ui/react'

export default function App ({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}
