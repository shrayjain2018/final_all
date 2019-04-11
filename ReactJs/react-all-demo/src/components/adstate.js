import React, { Component } from 'react';
import ShowADState from './adstatedisplay';

class ADState extends Component {
    constructor() {
        super();

        this.state = {
            user: {
                username: '',
                email: '',
                mobile: '',
                address: '',
                description: '',
                dateofvisit: ''
            },
            userData: {
                username: '',
                email: '',
                mobile: '',
                address: '',
                description: '',
                dateofvisit: ''
            },
            display: false
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ userData: this.state.user, display: true });
        console.log(this.state.user);
    }

    updateState(ctrl, value) {
        const { user } = this.state;
        user[ctrl] = value;
        this.setState({ user });
    }

    resetState() {
        this.setState({
            user: {
                username: '',
                email: '',
                mobile: '',
                address: '',
                description: '',
                dateofvisit: ''
            },
            userData: {
                username: '',
                email: '',
                mobile: '',
                address: '',
                description: '',
                dateofvisit: ''
            },
            display: false
        });
    }

    render() {
        const { user } = this.state;
        return (
            <div className="row">
                <div className="col-lg-5">
                    <h2 className="text-primary">Customer Feedback</h2>
                    <form>

                        <div className="form-group">
                            <label>
                                Username:
                        </label>
                            <input type="text" value={user.username} className="form-control" onChange={(e) => this.updateState('username', e.currentTarget.value)} />
                        </div>

                        <div className="form-group">
                            <label>
                                Email:
                        </label>
                            <input type="text" value={user.email} className="form-control" onChange={(e) => this.updateState('email', e.currentTarget.value)} />
                        </div>

                        <div className="form-group">
                            <label>
                                Mobile:
                        </label>
                            <input type="text" value={user.mobile} className="form-control" onChange={(e) => this.updateState('mobile', e.currentTarget.value)} />
                        </div>

                        <div className="form-group">
                            <label>
                                Address:
                        </label>
                            <input type="text" value={user.address} className="form-control" onChange={(e) => this.updateState('address', e.currentTarget.value)} />
                        </div>

                        <div className="form-group">
                            <label>
                                Description:
                        </label>
                            <input type="text" value={user.description} className="form-control" onChange={(e) => this.updateState('description', e.currentTarget.value)} />
                        </div>

                        <div className="form-group">
                            <label>
                                Date of Visit:
                        </label>
                            <input type="text" value={user.dateofvisit} className="form-control" onChange={(e) => this.updateState('dateofvisit', e.currentTarget.value)} />
                        </div>
                        <button className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Submit</button>

                    </form>
                </div>

                <div className="col-lg-2"></div>

                <div className="col-lg-5">
                    <br />
                    {this.state.display ?
                        <ShowADState customerData={this.state.userData} deleteCustomer={(e) => this.resetState()} /> : null
                    }
                </div>
            </div>
        );
    }
}

export default ADState;