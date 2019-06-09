import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
class UserProfile extends Component {
  render() {
    return (
        <div className="container">
          
          <h1  className="heading">User Profile</h1>
          <Link to="/home">Home</Link>
          <br />
          <Link to="/debit">Debit</Link>
          <AccountBalance accountBalance={this.props.accountBalance}/>
          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
          
        </div>
    );
  }
}

export default UserProfile;