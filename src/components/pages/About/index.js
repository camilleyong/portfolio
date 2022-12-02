import React from 'react';
import { Parallax } from "react-parallax";
import Squares from '../../assets/bady-abbas-hxi_yRxODNc-unsplash.jpg';
// import Camille from '../../assets/images.png';
import './about.css';

export default function About() {
  return (
    <Parallax
    bgImage={Squares}
    bgImageAlt="building with squares"
    strength={800}
    className="about-image"
  >
    <div className='container' id='about'>
    <div className='about'>
      <div className='content-about'>
      <h1 className='name'>CAMILLE YONG</h1>
      {/* <img className="camille" src={} alt="picture of camille"></img> */}
      <p className='about-me'>
      Hello! My name is Camille Yong and passionately earned my certificate in Full Stack Development at UCLA Extension Bootcamp in 2022. I proudly gained skills in HTML, CSS, Javascript, React.js, and making fully functional web design. After eight years in Veterinary Medicine, I have experience in managing a business, training employees, and assisting with C-Suite personnels. I have an ENFJ-T personality which allows me to enjoy problem solving and helping my peers. Communication is key in maintaining a good relationship and being successful in your career. My hobbies consist of creating content for my personal social media fashion, traveling, photography, and self-care. I am very excited to start my new career in web development and looking forward to learning more.
      </p>
      </div>
    </div>
    </div>
    </Parallax>
  );
}