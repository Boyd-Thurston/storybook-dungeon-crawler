import React from 'react'
import {HashRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'

const App = () => {
  return (
    <Router>
      <Route path='/' component={Nav}/>
    </Router>
  )
}

export default App
