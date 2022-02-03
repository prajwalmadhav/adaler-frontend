import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import Homepage from "./pages/Homepage/Homepage"
import { BrowserRouter as Router, Route,Link, Routes } from 'react-router-dom'
import Hero from './components/LandingPage/Hero/Hero';
import Dashboard from "./pages/Dashboard/Dashboard";
import Alerts from './components/LandingPage/Modals/Alerts';
import SignOut from './components/LandingPage/Modals/SignOut';
import Test from './components/Test';



export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
        
        <Routes>

          <Route path='/' element={<Homepage/>} />

          <Route path='/home' element={<Dashboard/>} />
          <Route path='/alert' element={<Alerts/>} />
          <Route path='/SignOut' element={<SignOut/>} />
          <Route path='/smoke' element={<Test/>} />
          
        </Routes>
       
    </Router>   
  </ChakraProvider>
)
