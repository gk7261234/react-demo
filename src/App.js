import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Login from './View'
class App extends React.Component{
    render(){
        return(
            <Router>
                <div style={{margin: '10px'}}>
                    <Route path='/' component={Home}></Route>
                    <Route path='/Page1' component={Page1}></Route>
                    <Route path='/Page2' component={Page2}></Route>
                    <Route path='/login' component={Login}></Route>
                </div>
            </Router>
        )
    }
}
export default App;
