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
import Redux from "../icons/redux.png";
import WordPress from "../icons/wordpress.png";

export default function Skills() {
  return (
    <div className="horizontal-container row" id="skills">
      <h1 className='skills-title text-center'>SKILLS</h1>
      <div className="skills-icons">
      <img className="col-2 col-md-1 icon" src={Html} alt="html icon"></img>
      <img className="col-2 col-md-1 icon" src={Css} alt="css icon"></img>
      <img className="col-2 col-md-1 icon" src={JavaScript} alt="javascript icon"></img>
      <img className="col-2 col-md-1 icon" src={Jquery} alt="jquery icon"></img>
      <img className="col-2 col-md-1 icon" src={ReactPic} alt="react icon"></img>
      <img className="col-2 col-md-1 icon" src={Node} alt="node icon"></img>
      <img className="col-2 col-md-1 icon" src={Express} alt="express icon"></img>
      <img className="col-2 col-md-1 icon" src={Mongo} alt="mongodb icon"></img>
      <img className="col-2 col-md-1 icon" src={Mysql} alt="mysql icon"></img>
      <img className="col-2 col-md-1 icon" src={Github} alt="github icon"></img>
      <img className="col-2 col-md-1 icon" src={Handlebars} alt="handlebars icon"></img>
      <img className="col-2 col-md-1 icon" src={Redux} alt="redux icon"></img>
      <img className="col-2 col-md-1 icon" src={WordPress} alt="wordpress icon"></img> 
      </div>
     </div>
  );
}