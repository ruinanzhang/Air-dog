import React, { Component } from 'react';
import {
    getFromStorage,
} from '../utils/storage';

import TopNav from './TopNav';
import NavbarPage from './NavBar';

const p1Style = {
    fontSize: '45px',
    textAlign: 'center',
    color: '#F7649D',
    fontfamily: 'Roboto Slab',
    margin: "8px",
    border: '2px solid pink',
    width: '100%'
};

const DivStyle = {
    display: 'flex',  
    justifyContent:'center',
     alignItems:'center',
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
            myusername : "auth@123.com",
            isLoading: true
        }
    }

    // Fetch Account Info on first mount
    // componentDidMount() {
    //     this.getAccountInfo;
    // }
    // componentWillMount() {
    //     const obj = getFromStorage('the_main_app');
    //     if (obj && obj.token) {
    //         const { token } = obj;
    //         // Verify token
    //         fetch('/api/verify_user?token=' + token)
    //             .then(res => res.json())
    //             .then(json => {
    //                 console.log(json);
    //                 if (json.success) {
    //                     this.setState({
    //                         isLoading: false,
    //                         rightToken: true,
    //                         myusername: json.useremail
    //                     });
    //                 } else {
    //                     console.log(json);
    //                     this.setState({
    //                         isLoading: false,
    //                         rightToken: false
    //                     })
    //                 }
    //             });
    //     }
    // }

    // Retrieves the list of items from the Express app
    componentDidMount() {
        
            fetch('/api/getAccount?token=' + "auth@123.com")
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        console.log("Json gud");
                        this.setState({
                            isLoading: false,
                            Userid: "",
                            Password: json.password,
                            Email: json.emal,
                            signUpDate: json.signUpDate,
                        });
                    } else {
                        console.log("Json failed");
                        this.setState({
                            isLoading: false
                        });
                    }

                });
   

    }



    render() {
        
        const {
            toke,
            Userid,
            Password,
            Email,
            signUpDate,
            isLoading,
        } = this.state;
        console.log(this.state.Email);

        return (
           
            
            <div>
                
                {/* <TopNav /> */}
                {/* <NavbarPage /> */}
                <h3 style={p1Style}>Account Information</h3>
                <form style={DivStyle}>
                    <div className="form-group">
                        <label>Email address {Email}</label>
                        

                    </div>


                </form>



            </div>
        );
    }
}

export default MyAccount;