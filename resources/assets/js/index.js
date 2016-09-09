import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App'
import About from './components/About'
import Home from './components/Home'

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
    </Router>
), document.querySelector('.app'));