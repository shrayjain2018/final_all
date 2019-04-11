import React, { Component } from 'react';

class MyForm extends Component {
    constructor() {
        super();

        this.state = { firstname: '', lastname: '', gender: '' };

        this.handleChangeFN = this.handleChangeFN.bind(this);
        this.handleChangeLN = this.handleChangeLN.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeFN(event) {
        this.setState({ firstname: event.target.value });
    }

    handleChangeLN(event) {
        this.setState({ lastname: event.target.value });
    }

    handleChangeGender(event) {
        this.setState({ gender: event.target.value });
    }

    handleSubmit(event) {
        alert('Your full name: ' + this.state.firstname + ' ' + this.state.lastname);
        event.preventDefault();
    }

    render() {
        return (
            <div className="col-lg-4">
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>
                            First Name:
                        </label>
                        <input type="text" value={this.state.firstname} onChange={this.handleChangeFN} className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>
                            Last Name:
                        </label>
                        <input type="text" value={this.state.lastname} onChange={this.handleChangeLN} className="form-control" />
                    </div>

                    <label>
                        Gender:
                    <select value={this.state.gender} onChange={this.handleChangeGender}>
                            <option value="">--Select--</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label>
                    <br />

                    <input type="submit" value="Submit" className="btn btn-primary" />


                </form>

                <br />
                First Name: {this.state.firstname}
                <br />
                Last Name: {this.state.lastname}
                <br />
                Gender: {this.state.gender}
            </div>
        );
    }
}

export default MyForm;