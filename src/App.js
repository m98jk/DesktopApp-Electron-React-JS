import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SignIn from './pages/signIn';
import { Route } from 'react-router-dom';
import About from './pages/about';

class Home extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          {this.props.isLoading !== true ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : (
            <h1>
              {/* Welcome {this.props.name} to {this.props.city} */}
              memo
            </h1>
          )}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link className="App-link" to="/about">
            Link to the About Page
          </Link>
          <br />
          <Link className="App-link" to="/signin">
            Link to the Log In Page
          </Link>
        </header>
      </div>
    );
  }
}
class App extends React.Component {
  state = {
    name: 'Mohammed Jawad',
    isLoading: true,
    city: [],
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        this.setState({
          city: res.data,
          isLoading: false,
        });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="App">
        {/* <ul className="list-group">
          {this.state.city.map((el) => (
            <li key={el.id} className="list-group-item list-group-item-action">
              {el.title}
            </li>
          ))}
        </ul> */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/signin" component={SignIn} />
      </div>
    );
  }
}

export default App;
