//This is my login page 
import React, { Component } from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
// For verify token, import setInStorage
import {
  setInStorage,
} from '../utils/storage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';

const p1Style = {
  fontSize: '25px',
  textAlign: 'center',
  color: '#F7649D',
  fontfamily: 'Roboto Slab',
  margin: "8px",
  border: '2px solid pink',
  width: '100%',
  // align: 'center',
  
};
const DivStyle = {
  display: 'flex',  
  justifyContent:'center',
   alignItems:'center',
};

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      token: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
      redirect: false,
    };

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);

    this.onSignIn = this.onSignIn.bind(this);
  }

  //Fuction for change this.state.redirect:

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      window.location.href = "/";
    }
  }
  // For register tetxt and change states: 
  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }
  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }
  onSignIn() {
    // Grab state
    const {
      signInEmail,
      signInPassword,
    } = this.state;

    this.setState({
      isLoading: true,
    });

    // Post request to backend
    fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          setInStorage('the_main_app', { token: json.token });
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInPassword: '',
            signInEmail: '',
            token: json.token,
            redirect: true,
          });
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false,
          });
        }
      });
  }
  render() {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
    } = this.state;
    if (isLoading) {
      return (<div><p style={p1Style}>Still loading...please wait</p></div>);
    }
    if (!token) {
      return (
        
            <form style = {DivStyle}> 
              <div className='containers'>
                <div>
                  {
                    (signInError) ? (
                      <p>{signInError}</p>
                    ) : (null)
                  }
                  <p style={p1Style}>Sign In</p>
                  {/* <div>
              <button onClick={() => {
                window.location.href = "/Signup";
              }}>
                New Customer 
              </button>
              </div> */}
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={signInEmail}
                      onChange={this.onTextboxChangeSignInEmail}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={signInPassword}
                      onChange={this.onTextboxChangeSignInPassword}
                    />
                  </div>
                  <br />
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <button className="btn btn-primary btn-block" onClick={this.onSignIn}>Sign In</button>
                  </Switch>
                  <p className="forgot-password text-right">
                    Forgot <a href="/Forget password">password?</a>
                  </p>
                  <p className="forgot-password text-right">
                    Do not have an account? Please <a href="/Signup">Sign up</a>
                  </p>
                </div>
                <br />
                <br />
              </div>
            </form>
        
      );
    }
    else return (
      <div className="container">
        <p>Already Signed in</p>
        {window.location.href = "/"}
      </div>
    );

  }
}

export default LoginPage;

  // dismissError() {
  //   this.setState({ error: '' });
  // }

  // handleSubmit(evt) {
  //   evt.preventDefault();

  //   if (!this.state.username) {
  //     return this.setState({ error: 'Username is required' });
  //   }

  //   if (!this.state.password) {
  //     return this.setState({ error: 'Password is required' });
  //   }

  //   return this.setState({ error: '' });
  // }

  // handleUserChange(evt) {
  //   this.setState({
  //     username: evt.target.value,
  //   });
  // };

  // handlePassChange(evt) {
  //   this.setState({
  //     password: evt.target.value,
  //   });
  // }

//   render() {
//     // NOTE: I use data-attributes for easier E2E testing
//     // but you don't need to target those (any css-selector will work)

//     return (
//       <div className="Login">
//         <div>Click here if you are new user </div>
//         <form onSubmit={this.handleSubmit}>
//           {
//             this.state.error &&
//             <h3 data-test="error" onClick={this.dismissError}>
//               <button onClick={this.dismissError}>✖</button>
//               {this.state.error}
//             </h3>
//           }
//           <label>User Name</label>
//           <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

//           <label>Password</label>
//           <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

//           <input type="submit" value="Log In" data-test="submit" />
//         </form>
//       </div>
//     );
//   }
// }

