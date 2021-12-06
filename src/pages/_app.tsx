
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app';
import theme from './../../styles/theme';
import Graphql from '../services/Graphql';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Graphql>
        <Component {...pageProps} />
      </Graphql>
    </ChakraProvider>
  )
}

export default MyApp
