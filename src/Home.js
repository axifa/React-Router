
import logo from './logo.svg';
import './App.css';
import AccountBalance from './AccountBalance';

import React, { Component } from 'react';
    
class Home extends Component {
  render() {
    return (
        <div>
          <img src="https://cache-content.credit.com/wp-content/uploads/2016/11/opening-bank-account-612x281.jpg" alt="bank"/>
          <h1>Bank of React</h1>
          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;