import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import Test from './pages/test.jsx';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

const Pages=()=>{
    return(
        <Router basename="">
            <Switch>
                <Route exact path='/' component={App}/>
                <Route  path='/test' component={Test}/>
            </Switch>
        </Router>
    );
}
ReactDOM.render(<Pages />, document.getElementById('root'));
