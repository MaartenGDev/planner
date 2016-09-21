import React from 'react';
import {Link, IndexLink} from 'react-router'


const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            <Link to="/events" activeClassName="active">Events</Link>
            <Link to="/login" activeClassName="active">Login</Link>
        </nav>
    )
};

export default Header;