import React from 'react';
import './portfolio.css';
// import Carousel from 'react-bootstrap/Carousel';
// import { Parallax } from "react-parallax";
import OrbitalOdyssey from '../../assets/orbital-odyssey.png';
import Weather from '../../assets/weatherapp.png';
import NoteTaker from '../../assets/notetaker.png';
import ResumeCreator from '../../assets/resumecreator.png';
import WorkDay from '../../assets/workday.png';
// import Hallway from '../../assets/robin-schreiner-7y4858E8PfA-unsplash.jpg'
import ReduxStore from '../../assets/redux-store.png';



export default function Portfolio() {
  return (
  //   <Parallax
  //   bgImage={Hallway}
  //   bgImageAlt="arched hallway"
  //   strength={800}
  //   className="about-image"
  // >
  <div>
    <h1 className='port-title'>PORTFOLIO</h1>
    <body className='body'>
  <div className='port-container justify-content-evenly'>

    <div className='card'>
      <div className='image'>
        <img 
        src={OrbitalOdyssey} />
      </div>
      <div className='port-content'>
        <h3>Orbital Odyssey</h3>
        <p>Tools Used: React, Three.js, Express.js, graphQL, CSS, jsonWebToken, and Node.js</p>
        <a
        href="https://stormy-sands-64982.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"><i className="fa-sharp fa-solid fa-link fa-2xl custom-icon"></i></a>
        <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Proper-Stevo/SpaceInvaders"><i className="fa-brands fa-github fa-2xl custom-icon"></i></a>
      </div>
      </div>

      <div className='card'>
      <div className='image'>
        <img 
        src={Weather} />
      </div>
      <div className='port-content'>
        <h3>Orbital Odyssey</h3>
        <p>Tools Used: React, Three.js, Express.js, graphQL, CSS, jsonWebToken, and Node.js</p>
        <a
        href="https://stormy-sands-64982.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"><i className="fa-sharp fa-solid fa-link fa-2xl custom-icon"></i></a>
        <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Proper-Stevo/SpaceInvaders"><i className="fa-brands fa-github fa-2xl custom-icon"></i></a>
      </div>
      </div>

      <div className='card'>
      <div className='image'>
        <img 
        src={NoteTaker} />
      </div>
      <div className='port-content'>
        <h3>Orbital Odyssey</h3>
        <p>Tools Used: React, Three.js, Express.js, graphQL, CSS, jsonWebToken, and Node.js</p>
        <a
        href="https://stormy-sands-64982.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"><i className="fa-sharp fa-solid fa-link fa-2xl custom-icon"></i></a>
        <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Proper-Stevo/SpaceInvaders"><i className="fa-brands fa-github fa-2xl custom-icon"></i></a>
      </div>
      </div>

    <div className='card'>
      <div className='image'>
        <img 
        src={ResumeCreator} />
      </div>
      <div className='port-content'>
        <h3>Orbital Odyssey</h3>
        <p>Tools Used: React, Three.js, Express.js, graphQL, CSS, jsonWebToken, and Node.js</p>
        <a
        href="https://stormy-sands-64982.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"><i className="fa-sharp fa-solid fa-link fa-2xl custom-icon"></i></a>
        <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Proper-Stevo/SpaceInvaders"><i className="fa-brands fa-github fa-2xl custom-icon"></i></a>
      </div>
      </div>

      <div className='card'>
      <div className='image'>
        <img 
        src={WorkDay} />
      </div>
      <div className='port-content'>
        <h3>Orbital Odyssey</h3>
        <p>Tools Used: React, Three.js, Express.js, graphQL, CSS, jsonWebToken, and Node.js</p>
        <a
        href="https://stormy-sands-64982.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"><i className="fa-sharp fa-solid fa-link fa-2xl custom-icon"></i></a>
        <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Proper-Stevo/SpaceInvaders"><i className="fa-brands fa-github fa-2xl custom-icon"></i></a>
      </div>
      </div>

      <div className='card'>
      <div className='image'>
        <img 
        src={ReduxStore} />
      </div>
      <div className='port-content'>
        <h3>Orbital Odyssey</h3>
        <p>Tools Used: React, Three.js, Express.js, graphQL, CSS, jsonWebToken, and Node.js</p>
        <a
        href="https://stormy-sands-64982.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"><i className="fa-sharp fa-solid fa-link fa-2xl custom-icon"></i></a>
        <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Proper-Stevo/SpaceInvaders"><i className="fa-brands fa-github fa-2xl custom-icon"></i></a>
      </div>
      </div>

  </div>
  </body>
  </div>









    /* <Carousel 
    variant="dark"
    className="carousel"
    >

      <Carousel.Item>
        <a
        href="https://stormy-sands-64982.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer">
          <img
          className="d-block w-100"
          src={OrbitalOdyssey}
          alt="screenshot of orbital odyssey app"
        /> 

        </a>
        <Carousel.Caption className ="portfolio-content">
          <h5 className='portfolio-title'>Orbital Odyssey Project</h5>
          <p className="info">Click image to be directed to deployed website.</p>
          <p className='info'>Tools Used: React, Three.js, Express.js, graphQL, CSS, jsonWebToken, and Node.js</p>
          <p className='para'>
          <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Proper-Stevo/SpaceInvaders">GitHub Link</a></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <a
        href="https://fathomless-chamber-93211.herokuapp.com/notes"
        target="_blank"
        rel="noopener noreferrer">
        <img
          className="d-block w-100"
          src={NoteTaker}
          alt="screenshot of note taker app"
        />
        </a>
        <Carousel.Caption className ="portfolio-content">
          <h5 className='portfolio-title'>Note Taker</h5>
          <p className="info">Click image to be directed to deployed website.</p>
          <p className='info'>Tools Used: Express.js, JavaScript, HTML, CSS, Bootstrap, and FontAwesome</p>
          <p className='para'>
          <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/camilleyong/note-taker">
          GitHub Link</a></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <a
        href="https://camilleyong.github.io/weather-dashboard/"
        target="_blank"
        rel="noopener noreferrer">
        <img
          className="d-block w-100"
          src={Weather}
          alt="screenshot of weather api"
        />
        </a>

        <Carousel.Caption className ="portfolio-content">
          <h5 className='portfolio-title'>Weather API</h5>
          <p className="info">Click image to be directed to deployed website.</p>
          <p className='info'>Tools Used: OpenWeather API, Bootstrap, JQuery, Moment js, Google Fonts, JavaScript, CSS, and HTML</p>
          <p className='para'>
          <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/camilleyong/weather-dashboard">GitHub Link</a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <a
        href="https://fierce-ravine-29010.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer">
        <img
          className="d-block w-100"
          src={ResumeCreator}
          alt="screenshot of resume creator"
        />
        </a>

        <Carousel.Caption className="portfolio-content">
          <h5  className='portfolio-title'>Resume Creator</h5>
          <p className="info">Click image to be directed to deployed website.</p>
          <p className='info'>Tools Used: Node.js, Express, Handlebars, HTML/CSS, Bootstrap, MYSQL, Sequelize, Heroku</p>
          <p className='para'>
          <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/cindyung56/resume-creator">GitHub Link</a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <a
        href="https://camilleyong.github.io/workday-planner/"
        target="_blank"
        rel="noopener noreferrer">
        <img
          className="d-block w-100"
          src={WorkDay}
          alt="screenshot of workday planner"
        />
        </a>

        <Carousel.Caption className="portfolio-content">
          <h5  className='portfolio-title'>Workday Planner</h5>
          <p className="info">Click image to be directed to deployed website.</p>
          <p className='info'>Tools Used: HTML, CSS, Javascript</p>
          <p className='para'>
          <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/camilleyong/workday-planner">GitHub Link</a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <a
        href="https://enigmatic-temple-31565.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer">
        <img
          className="d-block w-100"
          src={ReduxStore}
          alt="screenshot of redux store"
        />
        </a>

        <Carousel.Caption className="portfolio-content">
          <h5  className='portfolio-title'>Redux E-commerce Store</h5>
          <p className="info">Click image to be directed to deployed website.</p>
          <p className='info'>Tools Used: React, MongoDB, JavaScript, HTML, CSS, Redux</p>
          <p className='para'>
          <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/camilleyong/redux-store">GitHub Link</a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */
    // </Parallax>
  );
};