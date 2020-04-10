import React, { Component } from 'react';
import {
    getFromStorage,
} from '../utils/storage';
import { MDBContainer, MDBRow, MDBCol, MDBBox} from 'mdbreact';

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



class MyAccount extends Component {
    //     // Initialize the state
    constructor(props) {
        super(props);
        this.state = {
            toke: "",
            Userid: "",
            Password: "",
            Email: "",
            signUpDate: "",
            isLoading: true,
            username: "",
        }

        this.fetchAccountInfo = this.fetchAccountInfo.bind(this)
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

    // Retrieves the list of items from the Express app
    // fetchAccountInfo() {
    //         fetch('/api/getAccount?token=' + this.state.Email)
    //             .then(res => res.json())
    //             .then(json => {
    //                 if (json.success) {
    //                     this.setState({
    //                         Password: json.Password,
    //                         signUpDate: json.signUpDate,
    //                     });
    //                 } else {
    //                     console.log("Json failed");
    //                 }

    //             });
    //         }
    render() {

        const {
            toke,
            Userid,
            Password,
            Email,
            signUpDate,
            isLoading,
            username,
        } = this.state;

        if (!isLoading) {

            return (
                <div>
                    <TopNav />
                    <NavbarPage />
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="2"></MDBCol>
                            <MDBCol md="8">
                                <h3 style={p1Style}>Account Info</h3>
                               
                                <MDBBox  bgColor="dark" display = "block">
                                     <div style={p2Style}>Email address :
                                     </div>
                                     <label style={p2Style}>{Email}</label>
                                     
                                 </MDBBox>
                                 <MDBBox  bgColor="light" display = "block">
                                     <div style={p2Style}>Username :
                                     </div>
                                     <label style={p2Style}>{username}</label>
                                     
                                 </MDBBox>
                                 <MDBBox  bgColor="dark" display = "block">
                                     <div style={p2Style}>Member since:
                                     </div>
                                     <label style={p2Style}>{signUpDate}</label>
                                     
                                 </MDBBox>
                                 
                                 

                            </MDBCol>
                            <MDBCol md="2"></MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            );
        } else {
            // this.fetchAccountInfo()
            return <h3 style={p1Style}>Loading...Please wait</h3>

        }


    }
}

export default MyAccount;