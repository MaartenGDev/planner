import React from "react";

class LoginPage extends React.Component {
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
            .then((response) => {
                this.setState({loggedIn: response.status === 200});

                return response.json();
            })
            .then((data) => localStorage.token = data.token);
    }

    render() {
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
            </div>
        )
    }
}

export default LoginPage;
