import React from "react";
import Navigation from "../common/Header";
import {Notification} from 'react-notification';

class Add extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notification: false,
            status: '',
            statusTitle: '',
            input: {
                title: '',
                description: '',
                start: '',
                end: ''
            }
        };
        this.updateEvent = this.updateEvent.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleNotification.bind(this);
    }

    updateEvent({ preventDefault }) {
        preventDefault();

        const form = document.getElementById('addForm');

        fetch('/api/event/', {
            method: 'POST',
            body: new FormData(form),
            headers: new Headers({
                'Authorization': 'Bearer ' + localStorage.token,
            })
        })
            .then(({ status, json }) => {
                if (status === 200) {
                    this.toggleNotification('SUCCESS', 'The event has been updated');
                } else {
                    this.toggleNotification('ERROR', 'Something went wrong');
                }
                return json();
            })
            .then((data) => console.log(data));

    }

    handleChange({ target }) {
        this.setState({input: {[target.name]: target.value}});
    }

    toggleNotification(statusTitle = '',status = '') {

        this.setState({statusTitle: statusTitle, status: status,notification: !this.state.notification})
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="card event-form">
                        <form id="addForm" onSubmit={this.updateEvent} method="POST">
                            <p className="input-label">Title</p>
                            <input id="username" type="text" name="title"/>
                            <p className="input-label">Description</p>
                            <textarea name="description"/>
                            <p className="input-label">Dates</p>
                            <input name="start" type="date"/>
                            <input name="end" type="date"/>
                            <input className="btn btn-primary event-form-btn" type="submit" value="Create"/>
                        </form>
                    </div>
                </div>
                <Notification
                    isActive={this.state.notification}
                    message={this.state.status}
                    action="Dismiss"
                    title={this.state.statusTitle}
                    style={false}
                    onDismiss={this.toggleNotification.bind(this)}
                    onClick={() => this.setState({notification: false})}
                />
            </div>
        )
    }
}

export default Add;
