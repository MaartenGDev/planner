import React from 'react';
import {Link, IndexLink} from 'react-router'

export default (
    <nav>
        <ul>
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/events" activeClassName="active">Events</Link></li>
            <li><Link to="/login" activeClassName="active">Login</Link></li>
        </ul>
    </nav>
)
