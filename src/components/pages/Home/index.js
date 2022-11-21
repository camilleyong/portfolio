import React from 'react';
import { Parallax } from "react-parallax";
import PurpleFlowers from '../../assets/augustine-wong-T0BYurbDK_M-unsplash.jpg';
// import Camille from '../../assets/images.png';
import './home.css';

export default function Home() {
    return (
    <Parallax
    
    bgImage={PurpleFlowers}
    bgImageAlt=""
    strength={800}
    className="home-image"
  >
        <div className='container'>
            <div className='intro'>
            <div className='content'>
            <div className='title-name'>
            Welcome World!
            <p className='introduction'>My name is Camille Yong
            <br></br>
            I am a FrontEnd Web Developer
            </p>
            </div>
            </div>
            </div>
        </div>
        </Parallax>
    )
}