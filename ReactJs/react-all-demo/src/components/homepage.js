import React, { Component } from 'react';


class Homepage extends Component {

    render() {
        return (
            <div>
                <h2>Homepage</h2>
                <img src={require('./reactjs.jpg')} />
            </div>
        )
    }
}

export default Homepage;