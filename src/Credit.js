
import ReactDOM from 'react-dom';
import './App.css';

import React from 'react';
    
class Credits extends React.Component {
  render() {
    return (
        <div><h1>Credits</h1>
        <h2>{props.descrition}</h2>
            <p>Amount: {props.amount}</p>
            <p>Date : {props.date}</p>
        </div>
    );
  }
}

export default Credits;