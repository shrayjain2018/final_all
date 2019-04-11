import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/navigation';

class App extends Component {

  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">Welcome to Navigation Demo</h2>
              <Navigation />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
