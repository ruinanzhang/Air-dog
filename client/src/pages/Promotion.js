// This is my promotion page 
import React, { Component } from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import pic1 from '../pics/1.png';
import pic2 from '../pics/2.png';
import pic3 from '../pics/3.png';
// import { Container } from "react-bootstrap/lib/Tab";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

const sildeStyle = {
    height : '50%',
    width : '50%',
    display: 'flex',  
    justifyContent:'center',
     alignItems:'center',
};

const DivStyle = {
    display: 'flex',  
    justifyContent:'center',
     alignItems:'center',
  };


class Promotion extends Component {
    render() {

        return (
            <div style = {DivStyle}>
                <AwesomeSlider style = {sildeStyle}>
                    <div data-src={pic1} />
                    <div data-src={pic2} />
                    <div data-src={pic3} />
                </AwesomeSlider>
            </div>


        );
    }


}


export default Promotion;