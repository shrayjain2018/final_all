import React, { Component } from 'react';
import axios from 'axios';

class AddContacts extends Component {

    constructor() {
        super();
        this.state = {
            newContact: { contactname: '', contactnumber: '' }
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ newContact: this.state.newContact });
        const myContact = this.state.newContact;
        if ((myContact.contactname !== '' || myContact.contactnumber !== '') && myContact.contactnumber.length === 10) {
            axios.post(`http://localhost:1000/contacts`, myContact)
                .then(res => {
                    alert('Contact Added!');
                    window.location.reload();
                })
        }
        else {
            alert('Please fill correct contact details!');
        }
    }

    updateState(ctrl, value) {
        const { newContact } = this.state;
        newContact[ctrl] = value;
        this.setState({ newContact });
    }

    render() {
        const { newContact } = this.state;
        return (
            <div className="row">
                <h3>Add Contacts</h3>
                <div className="col-md-6">
                    <div className="well">
                        <form>
                            <div className="form-group">
                                <label>
                                    Contact Name:
                                </label>
                                <input type="text" value={newContact.contactname} className="form-control" onChange={(e) => this.updateState('contactname', e.currentTarget.value)} />
                            </div>

                            <div className="form-group">
                                <label>
                                    Contact Number:
                                </label>
                                <input type="text" value={newContact.contactnumber} className="form-control" onChange={(e) => this.updateState('contactnumber', e.currentTarget.value)} />
                            </div>
                            <button className="btn btn-success" onClick={(e) => this.handleSubmit(e)}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddContacts;