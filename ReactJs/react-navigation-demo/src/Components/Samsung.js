import React, { Component } from 'react';

class Samsung extends Component {

    render() {
        return (
            <div className="col-md-6">
                <h2>Samsung</h2>
                <img src={require('./images/samsung.jpg')} alt='error'/>
            </div>
        );
    }
}

export default Samsung;