import React from "react";
import { Notification } from 'react-notification';
import 'whatwg-fetch';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            status: '',
            statusTitle: ''
        };

        this.sendLogin = this.sendLogin.bind(this);
    }

    sendLogin(e) {
        e.preventDefault();
        const form = document.getElementById('loginForm');

        fetch('/api/session', {
            method: 'POST',
            body: new FormData(form)
        })
            .then((response) => {
                this.setState({loggedIn: response.status === 200});

                if (response.status === 200) {
                    this.toggleNotification('SUCCESS', 'Successfully Logged In.');
                } else {
                    this.toggleNotification('ERROR', 'Invalid Login');
                }

                return response.json();
            })
            .then((data) => localStorage.token = data.token);
    }

    toggleNotification(statusTitle = '',status = '') {
        this.setState({statusTitle: statusTitle, status: status,notification: !this.state.notification})
    }

    render() {
        const {status, notification, statusTitle } = this.state;

        return (
            <div>
                <div className="container">
                    <div className="card event-form">
                        <form id="loginForm" onSubmit={this.sendLogin}>
                            <h3 className="event-form-title">Login</h3>

                            <p className="input-label">Username</p>
                            <input name="email" type="email"/>

                            <p className="input-label">Password</p>
                            <input name="password" type="password"/>
                            <br />
                            <button className="btn btn-primary login-btn" type="submit">Login</button>
                        </form>
                    </div>
                </div>
                <Notification
                    isActive={notification}
                    message={status}
                    action="Dismiss"
                    title={statusTitle}
                    style={false}
                    onDismiss={this.toggleNotification.bind(this)}
                    onClick={() => this.setState({ notification: false })}
                />
            </div>
        )
    }
}

export default LoginPage;
