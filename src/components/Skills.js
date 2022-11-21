import React from "react";
import "./css/skills.css";
import Css from "../icons/css3.png";
import Express from "../icons/express.png";
import Github from "../icons/github.png";
import Html from '../icons/html.png';
import JavaScript from "../icons/javascript.png";
import Jquery from "../icons/jquery.png";
import Mongo from "../icons/mongodb.png";
import Mysql from "../icons/my-sql.png";
import Node from "../icons/node-js.png";
import ReactPic from "../icons/react.png";
import Handlebars from "../icons/handlebars.png";

export default function Skills() {
  return (
    <div className="container">
    <div className="horizontal-container row justify-content-center">
      <h1 className='skills-title'>SKILLS</h1>
      <img className="col-2 col-md-1 icon" src={Html} alt=""></img>
      <img className="col-2 col-md-1 icon" src={Css} alt=""></img>
      <img className="col-2 col-md-1 icon" src={JavaScript} alt=""></img>
      <img className="col-2 col-md-1 icon" src={Jquery} alt=""></img>

      <img className="col-2 col-md-1 icon" src={ReactPic} alt=""></img>
      <img className="col-2 col-md-1 icon" src={Node} alt=""></img>
      <img className="col-2 col-md-1 icon" src={Express} alt=""></img>
      <img className="col-2 col-md-1 icon" src={Mongo} alt=""></img>

      <img className="col-2 col-md-1 icon" src={Mysql} alt=""></img>
      <img className="col-2 col-md-1 icon" src={Github} alt=""></img>
      <img className="col-2 col-md-1 icon" src={Handlebars} alt=""></img>
      </div>
    </div>
  );
}