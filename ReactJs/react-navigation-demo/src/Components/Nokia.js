import React, { Component } from 'react';

class Nokia extends Component {

    render() {
        return (
            <div className="col-md-6">
                <h2>Nokia</h2>
                <img src={require('./images/nokia.jpg')} alt='error'/>
            </div>
        );
    }
}

export default Nokia;