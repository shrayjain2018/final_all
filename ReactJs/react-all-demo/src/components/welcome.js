import React, { Component } from 'react';

class Welcome extends Component {
    render() {

        let msg = "Hello Shray";
        return (
            <div>
                <h2>This is welcome component</h2>
                <button className="btn btn-success">Button</button>
                <p>{2 + 2}</p>
                <p>{msg}</p>
            </div>
        );
    }
}

export default Welcome;