import React from 'react';
import './resume.css'
import { Parallax } from "react-parallax";
import Ocean from '../../assets/amanda-frank-wEbeV2SUp8E-unsplash.jpg';

export default function Resume() {
  return (
    <Parallax
    bgImage={Ocean}
    bgImageAlt=""
    strength={800}
    className="about-image"
  >
    <div className="container-resume" id="resume">
    <div className='resume'>
      <h1 className='resume-title'>RESUME</h1>
      <p>
        Take a look at my resume <a className="resume-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/file/d/1qD82NIS2sfggC5mFIFgAtKoy6p6tgtuC/view?usp=sharing">here!</a>
        <br></br>
        I am looking forward to working with you in the future.
      </p>
      <article className="row row-cols-1 row-cols-md-3 justify-content-center">
        <div className="col mb-4">
            <div className="card-body">
              <h5 className="card-title">Frontend Skills</h5>
              <p className="card-text">
                JavaScript ES6+, HTML5, CSS3, JQuery, Bootstrap, React.js
              </p>
            </div>
        </div>

        <div className="col mb-4">
            <div className="card-body">
              <h5 className="card-title">Backend Skills</h5>
              <p className="card-text">
                React, Node.js, Express, Sequelize, MySQL, MongoDB, NoSQL,
                Handlebars
              </p>
            </div>
          </div>
      </article>
    </div>
    </div>
    </Parallax>
  );
}