// import React, { Component } from 'react';

// class MyAccount extends Component {
//     // Initialize the state
//     constructor(props) {
//         super(props);
//         this.state = {
//             UserName: "",
//             Password: "",
//             Email: "",
//         }
//     }

//     // Fetch Account Info on first mount
//     componentDidMount() {
//         this.getAccountInfo;
//     }

//     // Retrieves the list of items from the Express app
//     getAccountInfo = () => {
//         fetch('/api/getAccount')
//             .then(res => res.json())
//             .then(UserName => this.setState({ UserName }))
//             .then(Password => this.setState({ Password }))
//             .then(Email => this.setState({ Email }))
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Account Info is:</h1>
//                 {this.getAccountInfo}
//             </div>
//         );
//         }
// }

// export default MyAccount;