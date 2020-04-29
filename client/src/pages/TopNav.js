// This is my top nav bar for the website
import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './Font.css'
import {
    getFromStorage
} from '../utils/storage';
import { styled } from '@material-ui/core/styles';


const MyGrid = styled(Grid)({
    background: '#f0a5bd',
    fontSize: '28px',
    fontFamily: 'Comic Neue',
    color: 'white',
    height: 70,
    padding: '20px 50px',
    textAlign: 'left',
});

class TopNav extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: true,
            token: '',
            rightToken: false,
            myusername: '',
            isRefresh: false,
        }

        this.onLogout = this.onLogout.bind(this);
    }

    // This is for log out 
    onLogout() {
        this.setState({
            isLoading: true,
        });
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
            const { token } = obj;
            // Verify token
            fetch('/api/account/logout?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            token: '',
                            isLoading: false,
                        });
                        window.location.href = "/";
                    } else {
                        this.setState({
                            isLoading: false,
                        });
                    }
                });
        } else {
            this.setState({
                isLoading: false,
            });
        }
    }

    // Every time refresh: 
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
            myusername,
            isRefresh,

        } = this.state;
        if (rightToken) {
            return (
                <div>
                    <Grid container spacing={3}>
                        <MyGrid item xs={11}>
                            Hello, {this.state.myusername} ! Welcome to AirDog :)
                        </MyGrid >
                        <MyGrid
                            justify="flex-end"
                            item xs={1}
                        // alignItems="flex-start"
                        >
                            <Button
                                variant="outlined"
                                color='inherit'
                                size="small"
                                onClick={this.onLogout}>Log out</Button>
                        </MyGrid>
                    </Grid>
                </div>
            );
        }
        else {
            return (
                <div >
                    <Grid container spacing={3}>
                        <MyGrid item xs={12}>
                            Welcome to AirDog!  Please  
                            <a>  </a>
                            <Button
                                variant="outlined"
                                color='inherit'
                                size="small"
                                href="/Login">Log in</Button>
                        </MyGrid >    
                    </Grid>
                </div>
            );
        };;

    }
}
export default TopNav;