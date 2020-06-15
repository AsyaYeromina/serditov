import React from "react";
import { Link } from "gatsby";
import headerStyles from "../header/header.module.css";

const Header = (props) => {

  const [toggleNav, setToggleNav] = React.useState(false);
    
  return (

    <header className={`${headerStyles.mainHeader} ${toggleNav || props.page === '-main' ? headerStyles.menuOpened : ``} `}>
    
    <div className={headerStyles.animatedHeader}>
      <Link to="/" className={headerStyles.logo} >
        <span className={headerStyles.logo__title}>serditov</span>
        <span className={headerStyles.logo__subtitle}>Interior design & architecture</span>
      </Link>

      
      

      <nav className={headerStyles.mainNav}>
        <ul>
          <li><Link activeClassName={headerStyles.active} to="/about">About</Link></li>
          <li><Link activeClassName={headerStyles.active} to="/showcase">Showcase</Link></li>
          <li><Link activeClassName={headerStyles.active} to="/portfolio">Portfolio</Link></li>
          <li><Link activeClassName={headerStyles.active} to="/services">Services</Link></li>
          <li><Link activeClassName={headerStyles.active} to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
    <button className={headerStyles.hamburger} onClick={() => setToggleNav(!toggleNav)}>
      <svg className={headerStyles.hamburger__icon} height="20" viewBox="0 -53 384 384" width="20" fill="#fff">
        <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
        <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
        <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
      </svg>
      <span className={headerStyles.hamburger__text} >Main menu</span>
    </button>
    <button className='thumbnails' onClick={() => props.clickHandler()}>thumbnails</button>
  </header>
  );
}

export default Header;
