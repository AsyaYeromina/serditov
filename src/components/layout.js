import React from "react";
// CSS
import "normalize.css";
import Header from './header/';

const Layout = ({ children }, props) => {
  console.log(props)
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout