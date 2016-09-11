import React from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import App from './components/App'
import About from './components/About'
import Home from './components/Home'
import Login from './components/Login';
import Events from './Pages/Events';
import Edit from './components/events/Edit';

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/about" component={About}/>
        <Route path="/events" component={Events} />
        <Route path="/events/:id/edit" components={Edit}/>
    </Router>
), document.querySelector('.app'));