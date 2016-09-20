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
            input: {title: '', description: '', start: '', end: ''}
        };
        this.updateEvent = this.updateEvent.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleNotification.bind(this);
    }

    updateEvent(e) {
        e.preventDefault();
        const form = document.getElementById('addForm');
        const token = localStorage.token;


        fetch('/api/event/', {
            method: 'POST',
            body: new FormData(form),
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
            })
        })
            .then((res) => {
                const statusOk = res.status === 200;

                this.setState({
                    statusTitle: statusOk ? 'SUCCESS' : 'ERROR',
                    status: statusOk ? 'The event has been created.' : 'Something went wrong'
                });

                this.toggleNotification();
                return res.json();
            })
            .then((data) => console.log(data));

    }

    handleChange(event) {
        const inputName = event.target.name;
        this.setState({input: {[inputName]: event.target.value}});
    }

    toggleNotification() {
        this.setState({notification: !this.state.notification})
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