import React, { Component } from 'react';

class StateDemo1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: this.props.message
        };
    }

    changeMsg() {
        this.setState({
            message: 'Thankyou..'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMsg()}>Update State</button>
            </div>
        );
    }
}

export default StateDemo1;
