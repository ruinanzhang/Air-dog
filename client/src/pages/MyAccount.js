import React, { Component } from 'react';
import {
    getFromStorage,
} from '../utils/storage';
import { MDBContainer, MDBRow, MDBCol, MDBBox, MDBBtn } from 'mdbreact';
import { useState } from 'react';
import Editable from "./Editable";

import TopNav from './TopNav';
import NavbarPage from './NavBar';

const p1Style = {
    fontSize: '30px',
    textAlign: 'center',
    color: '#F7649D',
    fontfamily: 'Roboto Slab',
    margin: "8px",
    border: '2px solid pink',
    width: '100%'
};

const p2Style = {
    fontSize: '18px',
    color: '#F7649D',
    fontfamily: 'Roboto Slab',
    margin: "8px",
};

const DivStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

// function Edit() {
//     // State for the input
//     const [text, setVal] = useState("");

//     /*
//       Enclose the input element as the children to the Editable component to make it as inline editable.
//     */
//     return (

//         <Editable
//             text={text}
//             placeholder="Write a task name"
//             type="input"
//         >
//             <input
//                 type="text"
//                 name="task"
//                 placeholder="Write a task name"
//                 value={text}
//                 onChange={e => setVal(e.target.value)}
//             />
//         </Editable>
//     );
// }



class MyAccount extends Component {
    //     // Initialize the state
    constructor(props) {
        super(props);
        this.state = {
            Password: "",
            Email: "",
            signUpDate: "",
            isLoading: true,
            isEditable: false,
            username: "",
            // Dog_name: "",
            // Dog_name_Edit: false,
            // Dog_age : "",
            // Dog_age_Edit: false,
            // Dog_breed : "",
            // Dog_breed_Edit: false,
        }
        this.fetchAccountInfo = this.fetchAccountInfo.bind(this);
        this.onEditing = this.onEditing.bind(this);
        this.onTextboxChangeUsername = this.onTextboxChangeUsername.bind(this);
        this.onTextboxChangeEmail = this.onTextboxChangeEmail.bind(this);
        this.onTextboxChangePassword = this.onTextboxChangePassword.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }
    // Fetch Account Info on first mount
    componentDidMount() {
        this.fetchAccountInfo();

    }

    fetchAccountInfo() {
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
            const { token } = obj;
            // Verify token
            fetch('/api/getAccount?token=' + token)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    if (json.success) {
                        this.setState((state) => {
                            return {
                                isLoading: false,
                                Email: json.Email,
                                Password: json.password,
                                signUpDate: json.signUpDate,
                                username: json.username,


                            }
                        });

                    } else {
                        console.log(json);
                        this.setState({
                            isLoading: true,
                        })
                    }
                })

        } else {
            this.setState({
                isLoading: true,
            })

        }
    }

    onTextboxChangeUsername(event) {
        this.setState({
            username: event.target.value,
        });
    }

    onTextboxChangeEmail(event) {
        this.setState({
            Email: event.target.value,
        });
    }

    onTextboxChangePassword(event) {
        this.setState({
            password: event.target.value,
        });
    }

    onEditing() {
        this.setState({
            isEditable: true,

        });
    }

    onUpdate() {

        const {
            Email,
            Password,
            username,
        } = this.state;

        this.setState({
            isLoading: true,
        });


        fetch('/api/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: Email,
                password: Password,
                username: username,
            }),
        })
            .then(res => res.json())
            .then(json => {
                console.log('json', json);
                if (json.success) {
                    this.setState({
                        username: '',
                        Password: '',
                        Email: '',
                        isLoading: false,
                    });
                } else {
                    this.setState({
                        isLoading: false,
                    });
                }
            });

    }

    render() {

        const {
            Password,
            Email,
            signUpDate,
            isLoading,
            username,
            isEditable,
        } = this.state;



        if (!isLoading) {

            if (isEditable) {
                return (
                    <div>
                        <TopNav />
                        <NavbarPage />
                        <MDBRow>
                            <MDBCol md="2"></MDBCol>
                            <MDBCol md="8">
                                <button className="square" onClick={this.onUpdate}>Submit</button>
                                <h3 style={p1Style}>Account Info</h3>
                                <MDBBox bgColor="dark" display="block">
                                    <div style={p2Style}>New Username :
                                        </div>
                                    <Editable style={p2Style}
                                        text={username}
                                        placeholder="New Username"
                                        type="input"
                                    >
                                        <input
                                            type="text"
                                            name="task"
                                            placeholder="New Username"
                                            value={username}
                                            onChange={this.onTextboxChangeUsername}
                                        />
                                    </Editable>

                                </MDBBox>

                                <MDBBox bgColor="dark" display="block">
                                    <div style={p2Style}>New Password :
                                        </div>
                                    <Editable style={p2Style}
                                        text="your password"
                                        placeholder="New Password"
                                        type="password"
                                    >
                                        <input
                                            type="password"
                                            placeholder="New pwd"
                                            value={Password}
                                            onChange={this.onTextboxChangePassword}
                                        />
                                    </Editable>

                                </MDBBox>
                            </MDBCol>
                            <MDBCol md="2"></MDBCol>
                        </MDBRow>

                    </div>

                );
            }
            else {

                return (
                    <div>

                        <TopNav />
                        <NavbarPage />

                        <MDBRow>
                            <MDBCol md="2"></MDBCol>
                            <MDBCol md="8">
                                <button className="square" onClick={this.onEditing}>Edit</button>
                                <h3 style={p1Style}>Account Info</h3>

                                <MDBBox bgColor="dark" display="block">
                                    <div style={p2Style}>Email address :
                                        </div>
                                    <label style={p2Style}>{Email}</label>

                                </MDBBox>

                                <MDBBox bgColor="light" display="block">
                                    <div style={p2Style}>Username :
                                        </div>
                                    <label style={p2Style}>{username}</label>

                                </MDBBox>
                                <MDBBox bgColor="dark" display="block">
                                    <div style={p2Style}>Member since:
                                        </div>
                                    <label style={p2Style}>{signUpDate}</label>
                                </MDBBox>
                                <MDBBox bgColor="dark" display="block">
                                    <div style={p2Style}>Email address :
                                        </div>
                                    <label style={p2Style}>{Email}</label>
                                </MDBBox>


                            </MDBCol>
                            <MDBCol md="2"></MDBCol>
                        </MDBRow>
                        {/* </MDBContainer> */}
                    </div >
                );
            }
        } else {
            // this.fetchAccountInfo()
            return <h3 style={p1Style}>Loading...Please wait</h3>

        }


    }
}

export default MyAccount;