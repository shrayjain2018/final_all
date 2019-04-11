import React, { Component } from 'react';

class EventDemo extends Component {

    callEvent() {
        alert('Displayed using Event');
    }

    render() {
        return (
            <button onClick={() => this.callEvent()}>
                Click Me
            </button>
        )
    }
}

export default EventDemo;