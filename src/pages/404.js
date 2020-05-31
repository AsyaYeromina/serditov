import React from "react"
import { Link } from "gatsby"
//import TitleHeader from "../components/header"


export default function Home() {
  return (

    <header>
      <Link to="/">BACK</Link>
      {/* <TitleHeader headerText="404 - page not found" style={{textTransform: `upperCase`}}/> */}
    </header>
  );
}