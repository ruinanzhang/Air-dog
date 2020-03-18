// This is my top nav bar for the website
import React, { Component } from "react";
import {
    getFromStorage
  } from '../utils/storage';
import axios from 'axios';
import 'whatwg-fetch';
  

class TopNav extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: true,
            token: '',
            rightToken : false,
            myusername : '',
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
    
      componentDidMount(){
        const obj = getFromStorage('the_main_app');
    
        if (obj && obj.token) {
          const { token } = obj;
          // Verify token
          fetch('/api/hello?token=' + token)
          .then(res => res.json())
          .then(json => {
            console.log(json);
              if (json.success){
                this.setState({
                    isLoading: false,
                    rightToken : true,
                    myusername : json.useremail
                  });

              }else{
                  console.log(json);
                  this.setState({
                      isLoading:false,
                      rightToken:false
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
        if(rightToken){
            return(
            <div>U'vvvvve logged in {this.state.myusername}</div>
            );
        }
        else{
            return (
                <div>Not logged in </div>
            );
        }
    }
}
export default TopNav;