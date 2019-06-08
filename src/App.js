import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import AccountBalance from './AccountBalance';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27
    }
  }


  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    
    return (
      <Router>
        <div>
          <Route exact path="/" render={HomeComponent}/>

          {/* If you need to pass props at the Router level, you must use render */}

        </div>
      </Router>
    );
  }
}

export default App;