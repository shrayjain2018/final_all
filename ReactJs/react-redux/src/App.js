import React, { Component } from 'react';
import './App.css';
import CounterApp from './components/counter'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <header className="page-header text-center">
              <h2>Redux Demo</h2>
            </header>
            <CounterApp />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
