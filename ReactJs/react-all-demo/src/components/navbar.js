import React, { Component } from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/form">Form</Link></li>
                        <li><Link to="/form2">Form_2</Link></li>
                        <li><Link to="/refs">Refs</Link></li>
                        <li><Link to="/ads">Add_Delete_State</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                        <li><Link to="/imagedisplay">Image_Display</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;