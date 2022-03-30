import React from 'react'
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'
import Sidebar from '../../components/Dashboard/Sidebar'
import Home from '../../components/Dashboard/Home'
import Carousels from '../../components/Dashboard/Carousels'



export default function Homepage() {
    return (
        
        <>
        
            
            <Sidebar children={undefined} />
            <Carousels />
            <Home />
            
        </>
    )
}
