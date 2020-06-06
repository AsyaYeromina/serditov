import React from "react";
import Header from "./header/header";

const Layout = ({ location, children }) => {

  let pageClass = '';
  location.state.pathname === '/' ? pageClass = '-main' : pageClass = location.pathname.replace('/', '-');
  
  return (
    <div className={`page${pageClass}`}>
      <Header />
      {children}
    </div>
  )
}

export default Layout