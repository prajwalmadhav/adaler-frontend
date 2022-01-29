import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import Homepage from "./pages/Homepage/Homepage"
import { BrowserRouter as Router, Route,Link, Routes } from 'react-router-dom'
import Hero from './components/Hero/Hero';
import Dashboard from "./pages/Dashboard/Dashboard";
import Alerts from './components/Modals/Alerts';



export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
        
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/test' element={<Dashboard/>} />
          <Route path='/alert' element={<Alerts/>} />

        </Routes>
       
    </Router>   
  </ChakraProvider>
)
