import React from 'react'
import {HashRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import { Register } from './Register'

const App = () => {
  return (
    <Router>
      <Route path='/' component={Nav}/>
      <Route path='/register' component={Register}/>
    </Router>
  )
}

export default App
