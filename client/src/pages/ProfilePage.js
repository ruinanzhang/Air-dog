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

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            userId: "",
            email: "",
            username: "",
            isLoading: true,
            isEditable: false,
            dogName: "",
            dogAge: "",
            dogBreed: "",
            dogPersonality: "",
            dogPhoto: "",
            dogSize: "",
            rightToken: false,
            isRefresh: false,
            profileErr: "",
        }
        this.onProfile = this.onProfile.bind(this);
        this.onVerify = this.onVerify.bind(this);
        this.onTextboxChangeDName = this.onTextboxChangeDName.bind(this);
        this.onTextboxChangeDAge = this.onTextboxChangeDAge.bind(this);
        this.onTextboxChangeDBreed = this.onTextboxChangeDBreed.bind(this);
        this.onTextboxChangeDSize = this.onTextboxChangeDSize.bind(this);
        this.onTextboxChangeDPersonality = this.onTextboxChangeDPersonality.bind(this);
        this.onGetProfile = this.onGetProfile.bind(this);
    }

    onTextboxChangeDPersonality(event) {
        this.setState({
            dogPersonality: event.target.value,
        });
    }

    onTextboxChangeDAge(event) {
        this.setState({
            dogAge: event.target.value,
        });
    }
    onTextboxChangeDSize(event) {
        this.setState({
            dogSize: event.target.value,
        });
    }

    onTextboxChangeDBreed(event) {
        this.setState({
            dogBreed: event.target.value,
        });
    }

    onTextboxChangeDName(event) {
        this.setState({
            dogName: event.target.value,
        });
    }
    onVerify() {
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
            const { token } = obj;
            // Verify token
            fetch('/api/verify_user?token=' + token)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    if (json.success) {
                        this.setState({
                            isLoading: false,
                            rightToken: true,
                            email: json.useremail
                        });
                    } else {
                        console.log(json);
                        this.setState({
                            isLoading: false,
                            rightToken: false
                        })
                    }
                });
        }
    }

    onProfile() {
        // Grab state
        const {
            dogName,
            dogAge,
            dogBreed,
            dogPersonality,
            dogSize,
            email,
        } = this.state;
        console.log("this: email", email);
        this.setState({
            isLoading: true,
        });
        // this.setState({
        //     email: "auth@123.com",
        // });


        fetch('/api/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                email: email,
                dogName: dogName,
                dogAge: dogAge,
                dogBreed: dogBreed,
                dogPersonality: dogPersonality,
                dogSize: dogSize,
            }),
        }).then(res => res.json())
            .then(json => {
                console.log('json', json);
                if (json.success) {
                    this.setState({
                        profileErr: json.message,
                        isLoading: false,
                        email: '',
                        dogName: '',
                        dogAge: '',
                        dogBreed: '',
                        dogPersonality: '',
                        dogSize: '',
                    });
                } else {
                    this.setState({
                        profileErr: json.message,
                        isLoading: false,
                    });
                }
            });




    }


    onGetProfile() {
        const {
            email,
        } = this.state;

        this.setState({
                isLoading: true,
        });
        console.log("this email in OnGetProfile", email);
        fetch('/api/profile_page_2?token=' + email)
            .then(res => res.json())
            .then(json => {
                    console.log(json);
                    if (json.success) {
                        this.setState((state) => {
                            return {
                                isLoading: false,
                                email: json.email,
                                dogName: json.dogName,
                                dogAge: json.dogAge,
                                dogBreed: json.dogBreed,
                                dogPersonality: json.dogPersonality,
                                dogSize: json.dogSize,
                            }
                        });

                    } else {
                        console.log(json);
                        this.setState({
                            isLoading: true,
                        })
                    }
            })
        

    }

    

    componentDidMount() {
        this.onVerify()
        console.log("componentDidMount", this.state)
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.email !== this.state.email) {
          console.log('email state has changed.')
          this.onGetProfile()
        }
      }
    render() {
        const {
            token,
            userId,
            email,
            username,
            isLoading,
            isEditable,
            dogName,
            dogAge,
            dogBreed,
            dogPersonality,
            dogPhoto,
            dogSize,
            rightToken,
            isRefresh,
            profileErr
        } = this.state;
        if (rightToken) {
            console.log("In rightToken", this.state)
            
           

            return (
                <div>
                    <TopNav />
                    <NavbarPage />
                    <MDBRow>
                        <MDBCol md="2"></MDBCol>
                        <MDBCol md="8">

                            <button className="square" onClick={this.onProfile}>Save</button>
                            <h1>{this.state.profileErr}</h1>
                            {/* email */}
                            <MDBBox bgColor="dark" display="block">
                                <div style={p2Style}>Email :
                                    {this.state.email}
                                </div>
                            </MDBBox>
                            {/* Dog Name */}
                            <MDBBox bgColor="ligth" display="block">
                                <div style={p2Style}>Dog Name:
                                        </div>
                                <Editable style={p2Style}
                                    text={dogName}
                                    placeholder="Dog Name"
                                    type="text"
                                >
                                    <input
                                        placeholder="Dog Name"
                                        value={dogName}
                                        onChange={this.onTextboxChangeDName}
                                    />
                                </Editable>

                            </MDBBox>
                            {/* Dog Age*/}
                            <MDBBox bgColor="dark" display="block">
                                <div style={p2Style}>Dog Name:
                                        </div>
                                <Editable style={p2Style}
                                    text={dogAge}
                                    placeholder="Dog Age"
                                    type="text"
                                >
                                    <input
                                        type="text"
                                        placeholder="Dog Age"
                                        value={dogAge}
                                        onChange={this.onTextboxChangeDAge}
                                    />
                                </Editable>

                            </MDBBox>
                            {/* Dog Brees*/}
                            <MDBBox bgColor="light" display="block">
                                <div style={p2Style}>Dog Breed:
                                        </div>
                                <Editable style={p2Style}
                                    text={dogBreed}
                                    placeholder="Dog Breed"
                                    type="text"
                                >
                                    <input
                                        type="text"
                                        placeholder="Dog Breed"
                                        value={dogBreed}
                                        onChange={this.onTextboxChangeDBreed}
                                    />
                                </Editable>

                            </MDBBox>
                            {/* Dog Size*/}
                            <MDBBox bgColor="dark" display="block">
                                <div style={p2Style}>Dog Size:
                                        </div>
                                <Editable style={p2Style}
                                    text={dogSize}
                                    placeholder="Dog Size"
                                    type="text"
                                >
                                    <input
                                        type="text"
                                        placeholder="Dog Size"
                                        value={dogSize}
                                        onChange={this.onTextboxChangeDSize}
                                    />
                                </Editable>

                            </MDBBox>
                            {/* Dog Size*/}
                            <MDBBox bgColor="light" display="block">
                                <div style={p2Style}>Dog Personality:
                                        </div>
                                <Editable style={p2Style}
                                    text={dogPersonality}
                                    placeholder="Dog Personality"
                                    type="text"
                                >
                                    <input
                                        type="text"
                                        placeholder="Dog Personality"
                                        value={dogPersonality}
                                        onChange={this.onTextboxChangeDPersonality}
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
                <div style={p1Style}>
                    Heyyyyy {this.state.email}!
                </div>
            );
        };;

    }





}

export default ProfilePage;
