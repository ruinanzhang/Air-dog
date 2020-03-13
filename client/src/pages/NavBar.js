// This is my top nav bar for the website
import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav'
import LoginPage from './Login';

// import 'bootstrap/dist/css/bootstrap.min.css';
const p1Style = {
    fontSize: '15px',
    textAlign: 'center',
    color: '#F7649D',
    fontfamily: 'Roboto Slab',
    // margin:"8px",
    // width : '10%',
    display: 'inline-flex',
    backgroundcolor: 'blue'

};
class NavbarPage extends Component {
    constructor() {
        super();

        this.state = {
            showOrderMenu: false,
            showCartMenu: false,
        }
        this.showOrderMenu = this.showOrderMenu.bind(this);
        this.showCartMenu = this.showCartMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
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
        return (
            <div className="justify-content-center">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#" style={p1Style}>DoddgieStyle.com</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#" style={p1Style}>Shop <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={p1Style}>Sell</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false" style={p1Style} onClick={this.showOrderMenu}>
                                    Orders/Items</a>
                                {
                                    this.state.showOrderMenu
                                        ? (
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={p1Style}>
                                                <a className="dropdown-item" href="#">My Orders</a>
                                                <a className="dropdown-item" href="#">My Items</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">My Returns</a>
                                            </div>
                                        )
                                        : (null)
                                }

                            </li>
                        </ul>

                    </div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <li className="nav-item">
                            <a className="nav-link" href="/Login" style={p1Style}>Login</a>
                        </li>
                        <li className="nav-item dropdown" >
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false" style={p1Style} onClick={this.showCartMenu}>My shopping Cart</a>
                            {
                                this.state.showCartMenu
                                    ? (
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={p1Style}>
                                            <a className="dropdown-item" href="#">First Item</a>

                                        </div>
                                    )
                                    : (null)
                            }


                        </li>



                    </nav>
                </nav>


            </div>
        );
    }
}
export default NavbarPage;