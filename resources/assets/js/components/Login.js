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
                <h1>Hello Login {this.state.loggedIn ? "Welcome" : "Please Login"}</h1>

                <form id={"loginForm"} onSubmit={this.sendLogin}>
                    <p>Username</p>
                    <input name="email" type="email"/>

                    <p>Password</p>
                    <input name="password" type="password"/>

                    <button type="submit">Save</button>
                </form>

            </div>
        )
    }
}
export default Login;