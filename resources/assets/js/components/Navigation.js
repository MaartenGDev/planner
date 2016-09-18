import React from 'react';
import {Link} from 'react-router'

class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <ul role="nav">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/events">My Events</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;