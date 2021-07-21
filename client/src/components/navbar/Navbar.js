import React from 'react'

import { Link } from 'react-router-dom'

function Navbar(props) {

  return(
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/projects/protected">Protected page</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar