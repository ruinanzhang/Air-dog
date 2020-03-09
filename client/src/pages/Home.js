import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavbarPage from './NavBar';
import Promotion from './Promotion';
import LoginPage from './Login';

const p1Style = {
  fontSize: '45px',
  textAlign: 'center',
  color : '#F7649D',
  fontfamily: 'Roboto Slab',
  margin:"8px",
  border: '2px solid pink',
  width : '100%'
};

class Home extends Component {
  render() {
    return (
    <div className="App">
      <NavbarPage />
      <div>
      <h1 style = {p1Style}>Welcom to Doggie Style!!</h1>
      </div>
      <Promotion />
      {/* <h1>Project Home,this is a test!!!!!nanako!!!!</h1> */}
      {/* Link to List.js */}
      {/* <Link to={'./list'}>
        <button variant="raised">
            My List
        </button>
      </Link> */}
    </div>
    );
  }
}
export default Home;