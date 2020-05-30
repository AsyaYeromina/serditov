import React from "react"
import { Link } from "gatsby"

export default function MainNavigation() {
  return (
    <nav>
      <ul>
          <li><Link to="/"> About</Link></li>
          <li><Link to="/"> Showcase</Link></li>
          <li><Link to="/"> Portfolio</Link></li>
          <li><Link to="/"> Products</Link></li>
          <li><Link to="/"> Awards</Link></li>
          <li><Link to="/"> Contact</Link></li>
      </ul>
    </nav>
  )
}