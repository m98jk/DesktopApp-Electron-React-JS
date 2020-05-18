import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.svg';
import '../App.css';

const About = () => {
  return (
    <div className="about">
      <h1>The Users Info</h1>
      <p>Welcome to the About Page</p>
      <Link className="App-link" to="/">
        Link to Home
      </Link>
      <img className="about-img" width="275" src={Logo} alt="" />
    </div>
  );
};

export default About;
