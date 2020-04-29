// This is my top nav bar for the website
import React, { Component } from "react";
import {
    getFromStorage
} from '../utils/storage';
import './Font.css'
import Button from '@material-ui/core/Button';


const p1Style = {
    fontSize: '20px',
    // textAlign: 'center',
    fontFamily: 'Comic Neue',
    color : '#f0a5bd',
    // margin:"8px",
    // width : '100%'
  };

const NavStyle = {
    backgroundcolor: '#e3f2fd'
}

const TogStyle = {
    fontSize: '20px',
    backgroundcolor: '#e3f2fd',
    textAlign: 'center',
    color: '#f0a5bd',
    fontFamily: 'Comic Neue',
    display: 'inline-flex',
}

const SearchStyle = {
    backgroundcolor: '#e3f2fd',
    fontSize: '20px',
    fontFamily: 'Comic Neue',
    color : '#f0a5bd',
}

const ButtonStyle ={
    fontSize: '18px',
    fontFamily: 'Comic Neue',
    color : '#f0a5bd',
}

class NavbarPage extends Component {
    constructor() {
        super();

        this.state = {
            showOrderMenu: false,
            showCartMenu: false,
            isLoading: true,
            myusername: ''
        }
        this.showOrderMenu = this.showOrderMenu.bind(this);
        this.showCartMenu = this.showCartMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    componentDidMount() {
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
            const { token } = obj;
            // Verify token
            fetch('/api/verify_user?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            isLoading: false,
                            rightToken: true,
                            myusername: json.useremail
                        });
                    } else {
                        this.setState({
                            isLoading: false,
                            rightToken: false
                        })
                    }
                });
        } else {
            this.setState({
                isLoading: true
            })
        }
    }
    showOrderMenu(event) {
        event.preventDefault();

        this.setState({ showOrderMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }
    showCartMenu(event) {
        event.preventDefault();

        this.setState({ showCartMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }
    closeMenu() {
        this.setState({ showOrderMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });

        this.setState({ showCartMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });

    }
    render() {
        const {
            isLoading,
            rightToken
        } = this.state;
        if (!isLoading) {
            if (rightToken) {
                return (
                    <div className="justify-content-center">
                        <nav className="navbar  navbar-expand-lg navbar-light" style={NavStyle}>
                            <a className="navbar-brand" href="/" style={p1Style}>AirDooog.com</a>
                            <a className="nav-link" href="#" style={p1Style}>Posts<span className="sr-only">(current)</span></a>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false" style={p1Style} onClick={this.showOrderMenu}>
                                            Your Posts</a>
                                        {
                                            this.state.showOrderMenu
                                                ? (
                                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={TogStyle}>
                                                        <a className="dropdown-item" href="#" style={TogStyle}> Pending Posts</a>
                                                        <a className="dropdown-item" href="#" style={TogStyle}>All Posts</a>
                                                        <div className="dropdown-divider" style={TogStyle}></div>
                                                        <a className="dropdown-item" href="#" style={TogStyle}>Past Posts</a>
                                                    </div>
                                                )
                                                : (null)
                                        }
                                    </li>
                                </ul>
                            </div>
                            <nav className="navbar  navbar-expand-lg navbar-light" style={NavStyle}>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <a className="nav-link" href="/MyAccount" style={p1Style}>My Account<span className="sr-only">(current)</span></a>
                                        <a className="nav-link" href="/Profile" style={p1Style}>Dog Profile<span className="sr-only">(current)</span></a>
                                        <a className="nav-link" href="#" style={p1Style}>  <span className="sr-only">(current)</span></a>
                                    </ul>
                                    <form class="form-inline my-2 my-lg-0">
                                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={SearchStyle}></input>
                                        <Button
                                            variant="outlined"
                                            color='white'
                                            size="medium"
                                            style = {ButtonStyle}
                                        // href="/Login"
                                        >Search</Button>
                                    </form>
                                </div>
                            </nav>
                        </nav>
                    </div>
                );
            } else {
                return (
                    <div className="justify-content-center">
                        <nav className="navbar  navbar-expand-lg navbar-light" style={NavStyle}>
                            <a className="navbar-brand" href="/" style={p1Style}>AirDooog.com</a>
                            <a className="nav-link" href="#" style={p1Style}>Posts<span className="sr-only">(current)</span></a>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false" style={p1Style} onClick={this.showOrderMenu}>
                                            Your Posts</a>
                                        {
                                            this.state.showOrderMenu
                                                ? (
                                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={TogStyle}>
                                                        <a className="dropdown-item" href="/Login" style={TogStyle}>Pending Posts</a>
                                                        <a className="dropdown-item" href="/Login" style={TogStyle}>All Posts</a>
                                                        <div className="dropdown-divider" style={TogStyle}></div>
                                                        <a className="dropdown-item" href="/Login" style={TogStyle}>Past Posts</a>
                                                    </div>
                                                )
                                                : (null)
                                        }
                                    </li>
                                </ul>
                            </div>
                            <nav className="navbar  navbar-expand-lg navbar-light" style={NavStyle}>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <a className="nav-link" href="/Login" style={p1Style}>My Account<span className="sr-only">(current)</span></a>
                                        <a className="nav-link" href="/Login" style={p1Style}>Dog Profile<span className="sr-only">(current)</span></a>
                                        <a className="nav-link" href="#" style={p1Style}>  <span className="sr-only">(current)</span></a>
                                    </ul>
                                    <form class="form-inline my-2 my-lg-0">
                                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={SearchStyle}></input>
                                        <Button
                                            style = {ButtonStyle}
                                            variant="outlined"
                                            color='white'
                                            size="medium"
                                        // href="/Login"
                                        >Search</Button>
                                    </form>
                                </div>
                            </nav>
                        </nav>
                    </div>
                );
            }
        } else {
            return (
                <p style={p1Style}> Still loading</p>
            );
        }
    }
}
export default NavbarPage;