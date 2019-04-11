import React, { Component } from 'react';
import './App.css';
import Counter from './counter';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="page-header text-center">
              Redux Counter Demo
              <Counter />
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
