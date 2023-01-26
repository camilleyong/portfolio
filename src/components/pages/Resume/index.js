import React from 'react';
import './resume.css'
import { Parallax } from "react-parallax";
import Ocean from '../../assets/amanda-frank-wEbeV2SUp8E-unsplash.jpg';

export default function Resume() {
  return (
    <Parallax
    bgImage={Ocean}
    bgImageAlt="black and white image of the beach and ocean"
    strength={800}
    className="about-image"
  >
    <div className="container-resume" id="resume">
    <div className='resume'>
      <h1 className='resume-title'>RESUME</h1>
      <div className="justify-content-between">
      <a className="btn btn-primary"
        id='resumeBtn'
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/file/d/1bZSUrhhbSziPqpYxhxJ3rUp2uiMZbuCZ/view?usp=sharing" role="button">Download Resume</a>

      <a className="btn btn-primary"
        id='resumeBtn'
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.parchment.com/u/award/e011607a825961a34a0f32e69ec64e5b" role="button">View Certificate</a>
        </div>

      <article className="row skills-article row-cols-1 row-cols-md-3 justify-content-center">
        <div className="col mb-4">
            <div className="card-body">
              <h5 className="card-title">Frontend Skills</h5>
              <p className="card-text">
                JavaScript ES6+, HTML5, CSS3, JQuery, Bootstrap, React.js, Redux
              </p>
            </div>
        </div>

        <div className="col mb-4">
            <div className="card-body">
              <h5 className="card-title">Backend Skills</h5>
              <p className="card-text">
                React, Node.js, Express, Sequelize, MySQL, MongoDB, NoSQL,
                Handlebars, Redux
              </p>
            </div>
          </div>
      </article>
    </div>
    </div>
    </Parallax>
  );
}