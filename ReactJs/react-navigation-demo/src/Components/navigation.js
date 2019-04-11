import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Mi from './Mi';
import Nokia from './Nokia';
import Samsung from './Samsung';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <div className="col-md-12">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <ul className="nav navbar-nav">
                                <li><Link to={'/mi'}>Mi</Link></li>
                                <li><Link to={'/nokia'}>Nokia</Link></li>
                                <li><Link to={'/samsung'}>Samsung</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <hr />
                    <Switch>
                        <Route exact path='/mi' component={Mi} />
                        <Route exact path='/nokia' component={Nokia} />
                        <Route exact path='/samsung' component={Samsung} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Navigation;