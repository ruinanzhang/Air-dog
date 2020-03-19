// This is my top nav bar for the website
import React, { Component } from "react";
import {
    getFromStorage
} from '../utils/storage';
import 'whatwg-fetch';


const p1Style = {
    fontSize: '18px',
    textAlign: 'center',
    color: '#F7649D',
    fontfamily: 'Roboto Slab',
    margin: "2px",
    border: '2px solid pink',
    width: '100%'
};



class TopNav extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: true,
            token: '',
            rightToken: false,
            myusername: '',
        }
    }
    // // This is for log out 
    // logout() {
    //     this.setState({
    //       isLoading: true,
    //     });
    //     const obj = getFromStorage('the_main_app');
    //     if (obj && obj.token) {
    //       const { token } = obj;
    //       // Verify token
    //       fetch('/api/account/logout?token=' + token)
    //         .then(res => res.json())
    //         .then(json => {
    //           if (json.success) {
    //             this.setState({
    //               token: '',
    //               isLoading: false
    //             });
    //           } else {
    //             this.setState({
    //               isLoading: false,
    //             });
    //           }
    //         });
    //     } else {
    //       this.setState({
    //         isLoading: false,
    //       });
    //     }
    //   }

    componentDidMount() {
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
                            myusername: json.useremail
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


    render() {
        const {
            isLoading,
            token,
            rightToken,
            myusername

        } = this.state;
        if (rightToken) {
            return (
                <div style={p1Style}>Hi {this.state.myusername}, what do you want to get for your doggie today?</div>
            );
        }
        else {
            return (
                <div>Not logged in </div>
            );
        }
    }
}
export default TopNav;