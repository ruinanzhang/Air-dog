import React, { Component } from 'react';
import NavbarPage from './NavBar';
import Promotion from './Promotion';
import 'whatwg-fetch';

import {
  setInStorage,
  getFromStorage,
} from '../utils/storage';


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
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      rightToken : false,
      // username: "",
    };
  }

  componentDidMount() {
    const obj = getFromStorage('the_main_app');

    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              isLoading: false,
              rightToken : true 
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }


  render() {
    const {
      isLoading,
      token,
      rightToken
 } = this.state;
   if (this.state.rightToken){
    return (
      <div className="App">
        <NavbarPage />
        <div>
        <h1 style = {p1Style}>Welcom to Doggie Style!!</h1>
        {/* <div>
          {this.token}
        </div> */}
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

   }else if (!rightToken){
     return (
      <div>
        <p>Can't get right token </p>
      {/* {window.location.href = "/Login"} */}
      </div>
   
     );
   }
    
  }
}
export default Home;