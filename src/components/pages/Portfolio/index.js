import React from 'react';
import './portfolio.css';
import OrbitalOdyssey from '../../assets/orbital-odyssey.png';
import Weather from '../../assets/weatherapp.png';
import NoteTaker from '../../assets/notetaker.png';
import ResumeCreator from '../../assets/resumecreator.png';
import WorkDay from '../../assets/workday.png';
import ReduxStore from '../../assets/redux-store.png';
import BookSearch from '../../assets/booksearch.png';



export default function Portfolio() {
  return (
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

      {/* CARD 7 */}
      <div className='card'>
      <div className='image'>
        <img 
        src={BookSearch} 
        alt="screenshot of book search website"
        />
      </div>
      <div className='port-content'>
        <h3>Book Search</h3>
        <p>A responsive Redux website where it allows users to search their favorite book or a book they might be interested in.</p>
        <a
        href="https://sleepy-plateau-84774.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"><i className="fa-sharp fa-solid fa-link fa-2xl port-icon"></i></a>
        <a className="github"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/camilleyong/google-book-search"><i className="fa-brands fa-github fa-2xl port-icon"></i></a>
      </div>
      </div>

  </div>
  </body>
  </div>
  );
};