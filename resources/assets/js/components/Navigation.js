import React from 'react';
import {Link} from 'react-router'

class Navigation extends React.Component {
    render() {
        return (
            <ul role="nav">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/events">My Events</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        )
    }
}

export default Navigation;