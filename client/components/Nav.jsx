import React from 'react'
import { Link } from 'react-router-dom'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

export default function Nav() {
  return (
    <div>
      <IfAuthenticated>
        <Link to='#'>Log off</Link>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <Link to='#'>Register</Link>
        <Link to='#'>Sign in</Link>
      </IfNotAuthenticated>
    </div>
  )
}