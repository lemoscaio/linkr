import React from "react"

export function Navbar(props) {
  return (
    <nav>
      <ul> {props.children}</ul>
    </nav>
  )
}
