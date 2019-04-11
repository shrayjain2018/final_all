import React, { Component } from 'react';

class RefsDemo extends Component {

    constructor() {
        super();
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div className="col-lg-4">
                <input type="text" ref={this.inputRef} />
                <button className="btn btn-info">Click</button>
            </div>
        );
    }
}

export default RefsDemo;