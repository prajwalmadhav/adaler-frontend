import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import {Suspense, lazy} from "react"
// import Homepage from "./pages/Homepage/Homepage"
import { BrowserRouter as Router, Route,Routes, Outlet } from 'react-router-dom'
import Dashboard from "./pages/Dashboard/Dashboard";
import Courses from './pages/Dashboard/Courses';
import Sidebar from './components/Dashboard/Sidebar';

import Course1 from './components/Dashboard/courseoverview/Course1';
import Course2 from './components/Dashboard/courseoverview/Course2';
import Course3 from './components/Dashboard/courseoverview/Course3';
import Course4 from './components/Dashboard/courseoverview/Course4';
import Course5 from './components/Dashboard/courseoverview/Course5';
import Course6 from './components/Dashboard/courseoverview/Course6';
import Testpg from "./components/Dashboard/Trial/Testpg";
import PreQuestions from './components/WelcomePage/PreQuestions';
import Courseinfo1 from './components/Dashboard/CourseInfo/Courseinfo1';


import QuizOne from './components/Quiz/QuizOne';

import "./App.css"
import TestPage from "./components/TestPage/TestPage";
import Settings from "./components/Settings/Settings";
import ProfilePage from "./components/Profile/ProfilePage";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"))


export const App = () => {
  var Spinner = require('react-spinkit');

  return (
    <ChakraProvider theme={theme}>
      <Router>
        
        <Routes>
          {/* Pages without dashboard sidebar */}
          <Route path="/" element={
            <Suspense fallback={<Spinner className="spinner" name='double-bounce' />
          }> <Homepage/></Suspense>
          }/>
          <Route path='home' element={<Dashboard/>} />
          <Route path='smoke' element={<Testpg/>} />
          <Route path='pg' element={<Testpg/>} />
          <Route path='welcome' element={<PreQuestions/>} />
          {/* <Route path='pres' element={<Introduction/>} /> */}


          <Route path="/" element={<LayoutsWithNavbar />}>
            {/* Pages with dashboard sidebar */}
            <Route path='home' element={<Dashboard/>} />
            <Route path='home/courses' element={<Courses/>} />

            <Route path='home/courses/course1' element={<Course1/>} />
            <Route path='home/courses/course2' element={<Course2/>} />
            <Route path='home/courses/course3' element={<Course3/>} />
            <Route path='home/courses/course4' element={<Course4/>} />
            <Route path='home/courses/course5' element={<Course5/>} />
            <Route path='home/courses/course6' element={<Course6/>} />
            <Route path='home/courses/courseinfo1' element={<Courseinfo1/>} />

          <Route path='quiz' element={<QuizOne />} />
          <Route path='tests' element={<TestPage/>} />
          <Route path='profile' element={<ProfilePage/>} />
          <Route path='settings' element={<Settings/>} />


          </Route>

        </Routes>

      </Router>
    </ChakraProvider>
  );
}

function LayoutsWithNavbar() {
  return (
    <>
      {/* Your navbar component */}
      <Sidebar children={undefined} />

      {/* This Outlet is the place in which react-router will render your components that you need with the navbar */}
      <Outlet /> 
      
      {/* You can add a footer to get fancy in here :) */}
    </>
  );
}