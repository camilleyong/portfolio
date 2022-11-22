import React from 'react';
import { Parallax } from "react-parallax";
import Squares from '../../assets/bady-abbas-hxi_yRxODNc-unsplash.jpg';
// import Camille from '../../assets/images.png';
import './about.css';

export default function About() {
  return (
    <Parallax
    bgImage={Squares}
    bgImageAlt=""
    strength={800}
    className="about-image"
  >
    <div className='container' id='about'>
    <div className='about'>
      <div className='content-about'>
      <h1 className='name'>CAMILLE YONG</h1>
      {/* <img className="camille" src={} alt="Avatar"></img> */}
      <p className='about-me'>
        I recently earned my certificate in Full Stack Developement at UCLA Extention Bootcamp in 2022. I gained the skills in HTML, CSS, Javascript, React.js, and making fully functional web design. I earned my degree in Veterinary Medicine and was in the field for eigth years. I have experience in managing a business, training exmployees, and assiting with C-Suite personnels. I have an ENFJ-T personality. I enjoy problem solving and helping my peers solve their's as well. Communication is very important in maintaining a good relationship and being successful in your career. I enjoy creating content on the side for my social media. My hobbies consist of fashion, art, photography, life-style, beauty, and self-care. I am a very creative person and I love to create. I am a very hard worker and I am very passionate about what I do. I am very excited to start my new career in web development and I am looking forward to learning more and more.
      </p>
      </div>
    </div>
    </div>
    </Parallax>
  );
}