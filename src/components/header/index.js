import React from "react"
import { Link } from "gatsby"

import headerStyles from "../header/header.module.css"

const MainLogo = ()=> {
  return (
      <Link to="/" className={headerStyles.logo}>
        <span className={headerStyles.logo__title}>serditov</span>
        <span className={headerStyles.logo__subtitle}>Interior design & architecture</span>
      </Link>
  )
}

const MainNavigation = () => {
  return (
    <nav className={headerStyles.mainNav}>
      <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/showcase">Showcase</Link></li>
          <li><Link to="/">Portfolio</Link></li>
          <li><Link to="/">Services</Link></li>
          <li><Link to="/">Contact</Link></li>
      </ul>
    </nav>
  )
}

const Header = () => {
  return (
    <header className={headerStyles.mainHeader}>
      <MainLogo />
      <MainNavigation />
    </header>
  );
}

export default Header;