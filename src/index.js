import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';

import App from './App';
import Home from './Home';
import AccountBalance from './AccountBalance';
import Credits from './Credit';


const routing =(
    <Router>
        <div>
        <ul><li> <Link to= "/">Home</Link> </li>
            <li> <Link to= "/Credit">Credit</Link> </li>
        </ul>
    
    <Switch>
        <Route exact path ="/" component ={App}/>
        <Route path ="/Credit" component ={Credits}/>

    </Switch>
    </div>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));

