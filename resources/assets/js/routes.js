import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import EventPage from './components/events/EventPage';
import LoginPage from './components/login/LoginPage';
import Add from './components/events/Add';
import Edit from './components/events/Edit';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="events" component={EventPage} />
        <Route path="login" component={LoginPage} />
        <Route path="events/create" component={Add} />
        <Route path="events/:id/edit" component={Edit} />
    </Route>
);