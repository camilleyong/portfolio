import React from 'react';
import Nav from './Nav';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Skills from './Skills';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';
import './css/portfoliocontainer.css';


export default function PortfolioContainer() {
    return (
        <div>
            {<Nav />}
            {<Home />}
            {<About />}
            {<Portfolio />}
            {<Skills />}
            {<Resume />}
            {<Contact />}
            {<Footer />}
        </div>
    );
}