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
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


export default function PortfolioContainer() {

    return (
        <div>
        <Router >
        <Nav />
        <Routes>
        <Route path='#' element={<Home />} />
        <Route path='#' element={<About />} />
        <Route path='#' element={<Portfolio />} />
        <Route path='#' element={<Skills />} />
        <Route path='#' element={<Resume />} />
        <Route path='#' element={<Contact />} />
        </Routes>
        </Router>
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