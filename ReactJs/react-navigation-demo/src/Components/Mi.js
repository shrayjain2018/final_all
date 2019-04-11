import React, { Component } from 'react';

class Mi extends Component {

    render() {
        return (
            <div className="col-md-6">
                <h2>Mi</h2>
                <img src={require('./images/mi.jpg')} alt='error'/>
            </div>
        );
    }
}

export default Mi;