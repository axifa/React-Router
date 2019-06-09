import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div className="container">
          {/* <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/> */}
          <h1  className="heading">Bank of React</h1>
          <AccountBalance accountBalance={this.props.accountBalance}/>
          <Link to="/userProfile">User Profile</Link>
          <br />
          <Link to="/debit">Debit</Link>
        </div>
    );
  }
}

export default Home;