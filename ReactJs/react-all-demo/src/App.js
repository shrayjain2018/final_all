import React, { Component } from 'react';
import './App.css';
import Greeting from './components/greetings';
import Greetings from './components/greetingsclass';
import Welcome from './components/welcome';
import NumberList from './components/numberlist';
import EventDemo from './components/event-1';
import EventDemo2 from './components/event-2';
import StateDemo1 from './components/statedemo';
import Counter from './components/counter';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import AboutUS from './components/about';
import Homepage from './components/homepage';
import Navbar from './components/navbar';
import MyForm from './components/form';
import MyForm2 from './components/form2';
import RefsDemo from './components/refsdemo';
import ADState from './components/adstate';
import Contacts from './components/contacts';
import ShowImage from './components/imagedisplay';

class App extends Component {

  render() {
    let numbers = [11, 22, 33, 44, 55];
    let hobby = ["Football", "Cooking", "Cricket", "COC"];

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <BrowserRouter>
              <Navbar />
              <Switch>
                <Route path="/about" component={AboutUS} />
                <Route path="/home" component={Homepage} />
                <Route path="/form" component={MyForm} />
                <Route path="/form2" component={MyForm2} />
                <Route path="/refs" component={RefsDemo} />
                <Route path="/ads" component={ADState} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/imagedisplay" component={ShowImage} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>


      // <div>
      //   <h1>Hello ReactJS</h1>
      //   <h2>Create some app</h2>
      // <div className="container">
      //   <div className="row">
      //     <div className="col-md-12">
      //       {/* <Greetings name="ShrayNew" />
      //       <Greetings name="1New" /> */}
      //       <br />
      //       {/* <NumberList numList={numbers}/> */}
      //       {/* <NumberList hobbyList={hobby} />
      //       <h4>Content Inside Tag</h4>
      //       {this.props.children}
      //       <EventDemo /> */}
      //       {/* <EventDemo2 age={32} />
      //       <StateDemo1 message="Hello State" />
      //       <br/>
      //       <h2>Counter</h2>
      //       <Counter count={0}/> */}
      //     </div>
      //   </div>
      // </div>
      // <Welcome />
      // </div>
    );
  }
}

export default App;
