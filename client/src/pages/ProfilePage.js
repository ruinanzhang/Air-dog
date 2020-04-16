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
            PdogName: "",
            PdogAge: "",
            PdogBreed: "",
            PdogPersonality: "",
            PdogPhoto: "",
            PdogSize: "",
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
            PdogPersonality: event.target.value,
        });
    }

    onTextboxChangeDAge(event) {
        this.setState({
            PdogAge: event.target.value,
        });
    }
    onTextboxChangeDSize(event) {
        this.setState({
            PdogSize: event.target.value,
        });
    }

    onTextboxChangeDBreed(event) {
        this.setState({
            PdogBreed: event.target.value,
        });
    }

    onTextboxChangeDName(event) {
        this.setState({
            PdogName: event.target.value,
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
            email,
            PdogName,
            PdogAge,
            PdogBreed,
            PdogPersonality,
            PdogSize,
        } = this.state;

        this.setState({
            isLoading: true,
        });

        fetch('/api/profile', {
            method: 'post',

            body: JSON.stringify({
                email: email,
                dogName: PdogName,
                dogAge: PdogAge,
                dogBreed: PdogBreed,
                dogPersonality: PdogPersonality,
                dogSize: PdogSize,
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
        // Grab state
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
            this.setState({
                isLoading: true,
            });
            const { token } = obj;
            fetch('/api/profile_page?token=' + token)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    if (json.success) {
                        this.setState((state) => {
                            return {
                                isLoading: false,
                                email: json.email,
                                PdogName: json.dogName,
                                PdogAge: json.dogAge,
                                PdogBreed: json.dogBreed,
                                PdogPersonality: json.dogPersonality,
                                PdogSize: json.dogSize,
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

    }

    componentDidMount() {
        this.onVerify();
        this.onGetProfile();
    }
    render() {
        const {
            token,
            userId,
            email,
            username,
            isLoading,
            isEditable,
            PdogName,
            PdogAge,
            PdogBreed,
            PdogPersonality,
            PdogPhoto,
            PdogSize,
            rightToken,
            isRefresh,
            profileErr
        } = this.state;
        if (rightToken) {
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
                                    text={PdogName}
                                    placeholder="Dog Name"
                                    type="text"
                                >
                                    <input
                                        placeholder="Dog Name"
                                        value={PdogName}
                                        onChange={this.onTextboxChangeDName}
                                    />
                                </Editable>

                            </MDBBox>
                            {/* Dog Age*/}
                            <MDBBox bgColor="dark" display="block">
                                <div style={p2Style}>Dog Name:
                                        </div>
                                <Editable style={p2Style}
                                    text={PdogAge}
                                    placeholder="Dog Age"
                                    type="text"
                                >
                                    <input
                                        type="text"
                                        placeholder="Dog Age"
                                        value={PdogAge}
                                        onChange={this.onTextboxChangeDAge}
                                    />
                                </Editable>

                            </MDBBox>
                            {/* Dog Brees*/}
                            <MDBBox bgColor="light" display="block">
                                <div style={p2Style}>Dog Breed:
                                        </div>
                                <Editable style={p2Style}
                                    text={PdogBreed}
                                    placeholder="Dog Breed"
                                    type="text"
                                >
                                    <input
                                        type="text"
                                        placeholder="Dog Breed"
                                        value={PdogBreed}
                                        onChange={this.onTextboxChangeDBreed}
                                    />
                                </Editable>

                            </MDBBox>
                            {/* Dog Size*/}
                            <MDBBox bgColor="dark" display="block">
                                <div style={p2Style}>Dog Size:
                                        </div>
                                <Editable style={p2Style}
                                    text={PdogSize}
                                    placeholder="Dog Size"
                                    type="text"
                                >
                                    <input
                                        type="text"
                                        placeholder="Dog Size"
                                        value={PdogSize}
                                        onChange={this.onTextboxChangeDSize}
                                    />
                                </Editable>

                            </MDBBox>
                            {/* Dog Size*/}
                            <MDBBox bgColor="light" display="block">
                                <div style={p2Style}>Dog Personality:
                                        </div>
                                <Editable style={p2Style}
                                    text={PdogPersonality}
                                    placeholder="Dog Personality"
                                    type="text"
                                >
                                    <input
                                        type="text"
                                        placeholder="Dog Personality"
                                        value={PdogPersonality}
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
