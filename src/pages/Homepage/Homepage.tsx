import React from 'react'
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/Navbar'
import Hero from './../../components/Hero/Hero';
import Features from './../../components/Features/Features';
import Features2 from './../../components/Features/Features2';
import Features3 from './../../components/Features/Features3';
import Testimonials from './../../components/Testimonials/Testimonials';

export default function Homepage() {
    return (
        <>
            <NavBar />
            <Hero />
            <Features />
            <Features2 />
            <Features3 />
            <Testimonials />
            <Footer />        
        </>
    )
}
