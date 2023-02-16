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
    <h1 className='port-title' id="portfolio">PORTFOLIO</h1>
    <body className='body'>
  <div className='port-container col align-self-center'>

    {/* CARD 1 */}

    <div className='card'>
      <div className='image'>
        <img 
        src={OrbitalOdyssey}
        alt="screenshot of orbital odyssey app"/>
      </div>
      <div className='port-content'>
        <h3>Orbital Odyssey</h3>
        <p>A web application that allows users to explore the solar system and learn more about our neighboring planets.</p>
        <a
        href="https://stormy-sands-64982.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"><i className="fa-sharp fa-solid fa-link fa-2xl port-icon"></i></a>
        <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/camilleyong/weather-dashboard"><i className="fa-brands fa-github fa-2xl port-icon"></i></a>
      </div>
      </div>

      {/* CARD 2 */}

      <div className='card'>
      <div className='image'>
        <img 
        src={Weather}
        alt="screenshot of weather api website"/>
      </div>
      <div className='port-content'>
        <h3>Weather API</h3>
        <p>A web application where users can check for the current and future weather reports.</p>
        <a
        href="https://camilleyong.github.io/weather-dashboard/"
        target="_blank"
        rel="noopener noreferrer"><i className="fa-sharp fa-solid fa-link fa-2xl port-icon"></i></a>
        <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Proper-Stevo/SpaceInvaders"><i className="fa-brands fa-github fa-2xl port-icon"></i></a>
      </div>
      </div>

      {/*  CARD 3 */}

      <div className='card'>
      <div className='image'>
        <img 
        src={NoteTaker}
        alt="screenshot of note taker website"
        />
      </div>
      <div className='port-content'>
        <h3>Note Taker</h3>
        <p>A versatile web application people can use it as a note taker, to-do list, or task list.</p>
        <a
        href="https://fathomless-chamber-93211.herokuapp.com/notes"
        target="_blank"
        rel="noopener noreferrer">
          <i className="fa-sharp fa-solid fa-link fa-2xl port-icon"></i></a>
        <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/camilleyong/note-taker">
            <i className="fa-brands fa-github fa-2xl port-icon"></i></a>
      </div>
      </div>

      {/* CARD 4 */}

    <div className='card'>
      <div className='image'>
        <img 
        src={ResumeCreator}
        alt="screenshot of resume creator website"
        />
      </div>
      <div className='port-content'>
        <h3>Resume Creator</h3>
        <p>A MERN web application where it automatically generates resumes for users who are looking for an easy and professional resume.</p>
        <a
        href="https://fierce-ravine-29010.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"><i className="fa-sharp fa-solid fa-link fa-2xl port-icon"></i></a>
        <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/cindyung56/resume-creator"><i className="fa-brands fa-github fa-2xl port-icon"></i></a>
      </div>
      </div>

      {/* CARD 5 */}

      <div className='card'>
      <div className='image'>
        <img 
        src={WorkDay}
        alt="screenshot of work day app"
        />
      </div>
      <div className='port-content'>
        <h3>Workday Planner</h3>
        <p>A web application where everyday working people can keep track of their tasks.</p>
        <a
        href="https://camilleyong.github.io/workday-planner/"
        target="_blank"
        rel="noopener noreferrer"><i className="fa-sharp fa-solid fa-link fa-2xl port-icon"></i></a>
        <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/camilleyong/workday-planner"><i className="fa-brands fa-github fa-2xl port-icon"></i></a>
      </div>
      </div>

      {/* CARD 6 */}

      <div className='card'>
      <div className='image'>
        <img 
        src={ReduxStore} 
        alt="screenshot of redux e-commerce website"
        />
      </div>
      <div className='port-content'>
        <h3>Redux E-Commerce Store</h3>
        <p>A responsive Redux website where it allows consumers to purchase and browse through an online store.</p>
        <a
        href="https://reduxmiscstore.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"><i className="fa-sharp fa-solid fa-link fa-2xl port-icon"></i></a>
        <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/camilleyong/redux-store"><i className="fa-brands fa-github fa-2xl port-icon"></i></a>
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