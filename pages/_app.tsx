import { ChakraProvider } from "@chakra-ui/react"
import theme from "../public/theme"
import Fonts from "../public/theme/fonts"


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
