import React, { Component } from 'react';
import AddContacts from './addcontact';
import ShowContacts from './showcontact';
import axios from 'axios';

class Contacts extends Component {

    constructor() {
        super();
        this.state = { contacts: [] };
    }

    componentDidMount() {
        axios.get(`http://localhost:1000/contacts`)
            .then(res => {
                const contacts = res.data;
                this.setState({ contacts });
            })
    }

    deleteContact(id) {
        axios.delete(`http://localhost:1000/contacts/${id}`)
            .then(res => {
                alert('Contact Deleted!');
                window.location.reload();
            })
    }

    render() {
        return (
            <div className="row">
                <h2 className="page-header text-center text-primary">Contacts Component Using JSON</h2>
                <div className="col-md-6">
                    <AddContacts />
                </div>
                <div className="col-md-6">
                    <ShowContacts allContacts={this.state.contacts} deleteContact={(e) => this.deleteContact(e)} />
                </div>
            </div>
        )
    }
}

export default Contacts;