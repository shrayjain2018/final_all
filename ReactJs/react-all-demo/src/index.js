import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Welcome from './components/welcome';
import Employee from './components/function';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Welcome />, document.getElementById('root'));
//ReactDOM.render(<Employee />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
