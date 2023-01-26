import React from 'react';
import { Parallax } from "react-parallax";
import Leaves from '../../assets/augustine-wong-T0BYurbDK_M-unsplash.jpg';
// import Camille from '../../assets/images.png';
import './home.css';

export default function Home() {
    return (
    <Parallax
    
    bgImage={Leaves}
    bgImageAlt="black and white images of leaves's shadow"
    strength={800}
    className="home-image"
  >
        <div className='container' id="home">
            <div className='intro'>
            <div className='content'>
            <div className='title-name'>
            Welcome
            <p className='introduction'>Camille Yong
            <br></br>
            Software Engineer | FrontEnd Web Developer
            </p>
            </div>
            </div>
            </div>
        </div>
        </Parallax>
    )
}