
import ReactDOM from 'react-dom';
import './App.css';
import {Link}  from 'react-router-dom';
import React from 'react';
    
class CreditDescription extends React.Component {
  render() {
    return (
        <div><h1>Credits</h1>
        <h2>{this.props.description}</h2>
            <p>Amount: {this.props.amount}</p>
            <p>Date : {this.props.date}</p>
        </div>
    );
  }
}

export default CreditDescription;