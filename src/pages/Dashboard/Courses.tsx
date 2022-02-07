import React from 'react'
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'
import Sidebar from '../../components/Dashboard/Sidebar'
import Home from '../../components/Dashboard/Home'
import Course1 from '../../components/Dashboard/CourseOverview/Course1'
import Course2 from './../../components/Dashboard/CourseOverview/Course2';
import Course3 from '../../components/Dashboard/CourseOverview/Course3'
import Course4 from '../../components/Dashboard/CourseOverview/Course4'
import Course5 from './../../components/Dashboard/CourseOverview/Course5';
import Course6 from '../../components/Dashboard/CourseOverview/Course6'
import { Divider } from '@chakra-ui/react'



export default function Homepage() {
    return (
        
        <>
        
            
            <Course1 />
            <Course2 />
            <Course3 />
            <Course4 />
            <Course5 />
            <Course6 />
            

            
        </>
    )
}
