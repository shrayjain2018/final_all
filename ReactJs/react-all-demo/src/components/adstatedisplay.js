import React, { Component } from 'react';

class ShowADState extends Component {

    render() {
        return (
            <div>
                <h2 className="text-primary">Display Customer Info</h2>
                <br />
                <b>Username: &nbsp;
                    <span className="text-success">{this.props.customerData.username}</span>
                </b>
                <br /><br />

                <b>Email: &nbsp;
                    <span className="text-success">{this.props.customerData.email}</span>
                </b>
                <br /><br />

                <b>Mobile: &nbsp;
                    <span className="text-success">{this.props.customerData.mobile}</span>
                </b>
                <br /><br />

                <b>Address: &nbsp;
                    <span className="text-success">{this.props.customerData.address}</span>
                </b>
                <br /><br />

                <b>Description: &nbsp;
                    <span className="text-success">{this.props.customerData.description}</span>
                </b>
                <br /><br />

                <b>Date of Visit: &nbsp;
                    <span className="text-success">{this.props.customerData.dateofvisit}</span>
                </b>
                <br /><br />
                <button onClick={() => this.props.deleteCustomer()} className="btn btn-danger">Delete</button>
            </div>
        );
    }
}

export default ShowADState;