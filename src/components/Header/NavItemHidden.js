import React, { useContext } from "react"
import { MenuContext } from "../../contexts/MenuContext.js"

export function NavItemHidden(props) {
  const { menuIsOpen } = useContext(MenuContext)
  return <>{menuIsOpen && props.children}</>
}
