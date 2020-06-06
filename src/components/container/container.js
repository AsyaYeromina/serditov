import React from "react"
import containerStyles from "../container/container.module.css"

export default function Container({ children }) {
  return <div className={containerStyles.container}>{children}</div>
}