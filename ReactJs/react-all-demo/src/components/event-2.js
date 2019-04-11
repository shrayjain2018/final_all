import React, { Component } from 'react';

class EventDemo2 extends Component {

    age = this.props.age;

    updateEvent() {
        console.log(this.age + ' - Old');
        console.log(this.age + 5 + ' - New');
    }

    render() {
        return (
            <div>
                <br />
                <button onClick={() => this.updateEvent()}>
                    Age Check
                </button>
            </div>
        )
    }
}

export default EventDemo2;