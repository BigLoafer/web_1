import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import Test from './pages/test';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

const Pages=()=>{
    return(
     <Router >
         <Switch>
            <Route exact path='/' component={App}/>
            <Route  path='/test' component={Test}/>
         </Switch>
    </Router>
    );
}

ReactDOM.render(<Pages />, document.getElementById('root'));
registerServiceWorker();
