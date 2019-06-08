import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import UserProfile from './UserProfile';
import LogIn from './LogIn';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      totalDebit:1,
      totalCredit:2,
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
      this.setState({totalDebit: total});
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

  // shouldComponentUpdate(nextProps,nextState){
  //   console.log("current-state")
  //   console.log(this.state);

  //     console.log("next-state")
  //     console.log(nextState);
  //     if(nextState.totalCredit === this.state.totalCredit  && nextState.totalDebit === this.state.totalDebit){
  //       return true;
  //     }
  //     return true;
  // }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} 
              accountBalance={this.state.accountBalance} />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
          </div>
        </Router>
    );
    }

}

export default App;