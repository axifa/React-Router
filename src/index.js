import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';

//import App from './App';
// import Home from './Home';
// import AccountBalance from './AccountBalance';
import CreditDescription from './CreditDescription';
import Credit from './Credit';
import Home from './Home';

const routing =(
    <Router>
        <div>
        <ul><li> <Link to= "/">Home</Link> </li>
            <li> <Link to= "/Credit">Credit</Link> </li>
        </ul>
    
    <Switch>
        <Route exact path ="/" component ={Home}/>
        <Route path ="/Credit" component ={Credit}/>

    </Switch>
    </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
// make sure to write routing here! ! !

