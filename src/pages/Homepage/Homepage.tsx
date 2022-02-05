import React from 'react'
import Footer from '../../components/LandingPage/Footer/Footer';
import NavBar from '../../components/LandingPage/NavBar/Navbar'
import Hero from './../../components/LandingPage/Hero/Hero';
import Features1 from './../../components/LandingPage/Features/Features1';
import Features2 from '../../components/LandingPage/Features/Features2';
import Features3 from '../../components/LandingPage/Features/Features3';
import Features4 from '../../components/LandingPage/Features/Features4';
import Testimonials from './../../components/LandingPage/Testimonials/Testimonials';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'

export default function Homepage() {
    return (
        
        <>
            <NavBar />  
            <Hero />
            {/* <Features1 /> */}
            <Features2 />
            <Features3 />
            <Testimonials />
            <Footer />        
        </>
    )
}
