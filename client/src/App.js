import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import {Join, Chat} from './components'

const App = () => (
    <Router>
        <Route path='/' exact component={Join} />
        <Route path='/chat' component={Chat} />
    </Router>
)

export default App