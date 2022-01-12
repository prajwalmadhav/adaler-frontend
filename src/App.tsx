import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import Homepage from "./pages/Homepage/Homepage"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Homepage />   
  </ChakraProvider>
)
