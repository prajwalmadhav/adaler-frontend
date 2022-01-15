import React from 'react'
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/Navbar'
import Hero from './../../components/Hero/Hero';
import Features1 from './../../components/Features/Features1';
import Features2 from '../../components/Features/Features2';
import Features3 from '../../components/Features/Features3';
import Features4 from '../../components/Features/Features4';
import Testimonials from './../../components/Testimonials/Testimonials';

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
