import React, {useState} from 'react';
import './contact.css';
import Form from 'react-bootstrap/Form';
import { Parallax } from "react-parallax";
import PinkYellow from '../../assets/roma-kaiuk-1HN3li_kDVw-unsplash.jpg';

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleInputChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setMessage(event.target.value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // checking to see if all input fields are full 
    if (email && name && message) {
      // checking to make sure email is valid 
      if (checkEmail(email)) {
        const encodedSubject = "Email From Portfolio"
        const encodedBody = `${message} - from ${name} ${email}`


        // hyper link to open mail client and populate subject and body --- still working on this
        const link = `mailto:camillemyong@gmail.com?
        subject=${encodedSubject}&amp;
        body=${encodedBody}`

        window.location = link;

      } else {
        setStatus("email is invalid")
      }
    } else {
      setStatus("all input fields need to be filled ")
    }
  };

  const checkEmail = (email) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <Parallax
    
    bgImage={PinkYellow}
    bgImageAlt=""
    strength={800}
    className="contact-image"
  >
    <div className="container">
    <div className='contact'>
      <div className='contact-form'>
      <h1 className='contact-title text-center'>CONTACT ME</h1>
      <p className='text-center'>Email: camillemyong@gmail.com</p>
      <p className="text-center">Set Up A Meeting With Me Below!</p>
      <p className="text-center"><a href="https://calendly.com/camilleyong/30min" className="calendly"><i class="fa-solid fa-mug-saucer"></i> Calendly</a></p>
      
      <Form className='form'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control 
        value={name}
        name="name"
        onChange={handleInputChange}
        type="text"
        placeholder="name"
        class="form-control" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control 
         value={email}
         name="email"
         onChange={handleInputChange}
         type="email"
         placeholder="email"
         class="form-control"
         />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control
          value={message}
          name="message"
          onChange={handleInputChange}
          as="textarea"
          type="text"
          placeholder="message"
          class="form-control" />
      </Form.Group>
      
      <button onClick={handleFormSubmit} type="button" class="btn btn-light">Submit</button>
      <p>{status}</p>
    </Form>
    </div>
    </div>
    </div>
    </Parallax>
  );
}