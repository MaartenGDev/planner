import React from "react";
import Navigation from './Navigation';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false
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
            .then((res) => {
                this.setState({loggedIn: res.status === 200});

                return res.json();
            })
            .then((data) => localStorage.token = data.token);
    }

    render() {
        return (
            <div>
                <Navigation/>
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
            </div>
        )
    }
}
export default Login;