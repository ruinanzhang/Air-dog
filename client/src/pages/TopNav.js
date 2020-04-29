// This is my top nav bar for the website
import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import './Font.css'


import {
    getFromStorage
} from '../utils/storage';
import { styled } from '@material-ui/core/styles';

const p1Style = {
    fontSize: '18px',
    textAlign: 'center',
    color: '#F7649D',
    fontfamily: 'Roboto Slab',
    margin: "2px",
    border: '2px solid pink',
    width: '100%'
};



const MyGrid = styled(Grid)({
    background: '#f0a5bd',
    fontSize: '28px',
    fontFamily: 'Comic Neue',
    // border: 2,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 82,
    padding: '10px 10px',
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


                            Hello , {this.state.myusername}
                        </MyGrid >
                        <MyGrid 
                            
                            justify="flex-end"
                            item xs={1}
                        // alignItems="flex-start"
                        >

                            <Button
                                variant="outlined"
                                color= 'inherit'
                                size="small"

                                onClick={this.onLogout}>Log out</Button>

                        </MyGrid>




                    </Grid>

                    {/* <button className="square" onClick={this.onLogout}>Log out</button> */}
                </div>
            );
        }
        else {
            return (
                <div style={p1Style}>
                    <Container>
                        <div>Hey you, please log in!</div><a className="variant" href="/Login">Log in</a>
                    </Container>
                </div>
            );
        };;

    }
}
export default TopNav;