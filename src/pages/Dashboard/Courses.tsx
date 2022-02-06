import React from 'react'
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'
import Sidebar from '../../components/Dashboard/Sidebar'
import Home from '../../components/Dashboard/Home'
import Course1 from '../../components/Dashboard/Course1'
import Course2 from './../../components/Dashboard/Course2';


export default function Homepage() {
    return (
        
        <>
        
            
            <Sidebar children={undefined} />
            <Course1 />
            

            
        </>
    )
}
