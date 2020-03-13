import React, { Component } from "react";
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import 'whatwg-fetch';
import Signup from './Signup';
import { useHistory } from 'react-router-dom';
// For verify token =: 
import {
  setInStorage,
  getFromStorage,
} from '../utils/storage';


class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      token: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
      redirect : false,
    };

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);

    this.onSignIn = this.onSignIn.bind(this);
  }

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

  // Functions starting from here: 


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
            redirect : true,
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
      return (<div><p>Loading...</p></div>);
    }
    if (!token) {
      return (
        <div>
          <div>
            {
              (signInError) ? (
                <p>{signInError}</p>
              ) : (null)
            }
            <p>Sign In Page -- sample </p>
            <div>
            <button onClick={() => {
              window.location.href = "/Signup";
            }}>
              New Customer 
            </button>
            </div>
            <input
              type="email"
              placeholder="Email"
              value={signInEmail}
              onChange={this.onTextboxChangeSignInEmail}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={signInPassword}
              onChange={this.onTextboxChangeSignInPassword}
            />
            <br />
            <Switch>
              <Route exact path='/' component={Home} />
              <button onClick={this.onSignIn}>Sign In</button>
            </Switch>
          </div>
          <br />
          <br />
        </div>
      );
    }
    return (
      <div>
        <p>Signed in</p>
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

