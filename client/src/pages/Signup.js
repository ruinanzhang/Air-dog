import React, { Component } from 'react';
import 'whatwg-fetch';

// import {
//   getFromStorage,
//   setInStorage,
// } from '../../utils/storage';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            token: '',
            signUpError: '',
            signUpEmail: '',
            signUpPassword: '',
            signupUsername: '',
        };

        // this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
        // this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
        this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
        this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
        this.onTextboxChangeSignUpUsername = this.onTextboxChangeSignUpUsername.bind(this);

        

        // this.onSignIn = this.onSignIn.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
        // this.logout = this.logout.bind(this);
    }
    componentDidMount() {
        this.setState({
            isLoading: false
        });
    }

    //  These functions help with updating values of textboxes/state values: 

    // onTextboxChangeSignInEmail(event) {
    //     this.setState({
    //         signInEmail: event.target.value,
    //     });
    // }

    // onTextboxChangeSignInPassword(event) {
    //     this.setState({
    //         signInPassword: event.target.value,
    //     });
    // }

    onTextboxChangeSignUpEmail(event) {
        this.setState({
            signUpEmail: event.target.value,
        });
    }

    onTextboxChangeSignUpPassword(event) {
        this.setState({
            signUpPassword: event.target.value,
        });
    }

    onTextboxChangeSignUpUsername(event){
        this.setState({
            signupUsername: event.target.value,
        });
    }

    //   This is the function for submitting the sign up form 

    onSignUp() {
        // Grab state
        const {
            signUpEmail,
            signUpPassword,
            signupUsername,
        } = this.state;

        this.setState({
            isLoading: true,
        });

        // Post request to backend
        fetch('/api/signup', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: signUpEmail,
                password: signUpPassword,
                username: signupUsername,
            }),
        }).then(res => res.json())
            .then(json => {
                console.log('json', json);
                if (json.success) {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                        signUpEmail: '',
                        signUpPassword: '',
                    });
                } else {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                    });
                }
            });
    }

    render() {
        const {
            isLoading,
            token,
            signupUsername,
            signUpEmail,
            signUpPassword,
            signUpError,
        } = this.state;
        if (isLoading) {
            return (<div><p>Loading...</p></div>);
        }
        if (!token) {

            return (
                <form>
                    {
                        (signUpError) ? (
                            <p>{signUpError}</p>
                        ) : (null)
                    }

                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" 
                        className="form-control" 
                        placeholder="Enter email" 
                        value={signUpEmail}
                        onChange={this.onTextboxChangeSignUpEmail}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" 
                        className="form-control"
                        placeholder="Enter password" 
                        value={signUpPassword}
                        onChange={this.onTextboxChangeSignUpPassword}/>
                    </div>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="email" 
                        className="form-control" 
                        placeholder="Enter Username" 
                        value={signupUsername}
                        onChange={this.onTextboxChangeSignUpUsername}
                        />
                    </div>
                    <button type="submit" 
                    className="btn btn-primary btn-block"
                    onClick={this.onSignUp}
                    >Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/Login">sign in?</a>
                    </p>
                </form>
                // <div>
                //     <br />
                //     <br />
                //     <div>
                //         {
                //             (signUpError) ? (
                //                 <p>{signUpError}</p>
                //             ) : (null)
                //         }
                //         <p>Sign Up</p>
                //         <input
                //             type="email"
                //             placeholder="Email"
                //             value={signUpEmail}
                //             onChange={this.onTextboxChangeSignUpEmail}
                //         /><br />
                //         <input
                //             type="password"
                //             placeholder="Password"
                //             value={signUpPassword}
                //             onChange={this.onTextboxChangeSignUpPassword}
                //         /><br />
                //         <button onClick={this.onSignUp}>Sign Up</button>
                //     </div>
                // </div>
            );
        }
        return (
            <div>
                <p>Signed up</p>
            </div>
        );

    }
}

export default Signup;