import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import Home from './Pages/Home';
import Login from './components/Login';
import Events from './Pages/Events';
import Edit from './components/events/Edit';
import Add from './components/events/Add';

render((
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/events" component={Events} />
        <Route path="/events/:id/edit" components={Edit}/>
        <Route path="/events/create" components={Add}/>
    </Router>
), document.querySelector('.app'));