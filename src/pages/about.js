import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.svg';
import '../App.css';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h1>The Users Info</h1>
        <p>Welcome to the About Page</p>
        <ul className="list-group">
          {/* {this.props.towns.map((ele) => (
            <li className="list-group-item list-group-item-action"> {ele}</li>
          ))} */}
        </ul>

        <Link className="App-link" to="/">
          Link to Home
        </Link>
        <img className="about-img" width="275" src={Logo} alt="" />
      </div>
    );
  }
}

export default About;
