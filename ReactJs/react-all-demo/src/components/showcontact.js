import React, { Component } from 'react';


class ShowContacts extends Component {

    render() {
        return (
            <div className="row">
                <h3>Show Contacts</h3>
                <div className="col-md-10">
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Contact Name</th>
                                <th>Contact Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.allContacts.map(contact =>
                                <tr key={contact.id}>
                                    <td>{contact.contactname}</td>
                                    <td>{contact.contactnumber}</td>
                                    <td><button className="btn btn-danger btn-xs" onClick={() => this.props.deleteContact(contact.id)}>X</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ShowContacts;