import React, { Component } from 'react';

class MyForm2 extends Component {

    constructor() {
        super();

        this.state = { name: '', showData: '' };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }

    handleClick(event) {
        this.setState({ showData: this.state.name.toUpperCase() });
        event.preventDefault();
    }

    render() {
        return (
            <div className="col-lg-4">
                <h3>{this.state.showData}</h3>
                <form>
                    <div className="form-group">
                        <label>
                            First Name:
                        </label>
                        <input type="text" value={this.state.name} onChange={this.handleChangeName} className="form-control" />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Click</button>
                </form>
            </div>
        );
    }
}

export default MyForm2;