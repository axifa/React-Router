import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import UserProfile from './UserProfile';
import LogIn from './LogIn';
import axios from 'axios';
import Debit from './Debit';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      totalDebit:1,
      totalCredit:2,
      debitData: [],
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
  }
  
  addAmount(arr){
    console.log(arr)
    let total = 0;
    arr.forEach(element => {
      total = total + element.amount;
    });

    return total;
  }

  getDebitData = () =>{
    axios.get("https://moj-api.herokuapp.com/debits")
    .then( (response) =>{
      let total = this.addAmount(response.data);
      this.setState({totalDebit: total, debitData:response.data});
      this.getCreditData();
      

    })
    .catch((error) =>{

    });
  }

  getCreditData = () =>{
    axios.get("https://moj-api.herokuapp.com/credits")
    .then( (response) =>{
      let total = this.addAmount(response.data);
      this.setState({totalCredit: total})
      this.updateBalance();

    })
    .catch((error) =>{

    });

  }

  updateBalance = ()=>{
    this.setState((state) =>{
      return {accountBalance: (state.totalCredit - state.totalDebit).toFixed(2)};
    });
  }

  componentDidMount(){
    this.getDebitData();
    
  }

  
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  updateDebit = (amount, debitData) =>{

  
    this.setState((state) =>{
      return { 
        accountBalance: (state.totalCredit -(state.totalDebit + amount)).toFixed(2) , 
        totalDebit: state.totalDebit + amount, 
        debitData: [debitData, ...this.state.debitData]
      }
    });
  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} 
              accountBalance={this.state.accountBalance} />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    const DebitComponet = () => (<Debit debitData={this.state.debitData} accountBalance={this.state.accountBalance} updateDebit={this.updateDebit} />);
    
    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/debit" render={DebitComponet}/>
          </div>
        </Router>
    );
    }

}

export default App;