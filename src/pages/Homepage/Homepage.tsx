import Footer from '../../components/LandingPage/Footer/Footer';
import NavBar from '../../components/LandingPage/NavBar/Navbar'
import Hero from './../../components/LandingPage/Hero/Hero';
import Features2 from '../../components/LandingPage/Features/Features2';
import Features3 from '../../components/LandingPage/Features/Features3';
import Testimonials from './../../components/LandingPage/Testimonials/Testimonials';
import Features5 from '../../components/LandingPage/Features/Features5';

export default function Homepage() {
    return (
        
        <>
            <NavBar />
            <Hero />
            {/* <Features1 /> */}
            <Features2 />
            <Features3 />
            {/* <Features4 /> */}
            <Features5 />
            <Testimonials />
            <Footer />
            

        </>
    )
}
