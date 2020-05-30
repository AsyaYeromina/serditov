import React from "react"
import { Link } from "gatsby"
import logoStyles from "./logo.module.css"


export default function Logo() {  
  return (
      <Link to="/" className={logoStyles.logo}>
        <span style={{display: `block`}}>Serditov</span>
        <span className={logoStyles.logo__subtitle} style={{display: `block`}}>Interior design & architecture</span>
      </Link>
  )
}