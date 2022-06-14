import { createContext, useState } from "react"

export const MenuContext = createContext()

export function MenuProvider(props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <MenuContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
      {props.children}
    </MenuContext.Provider>
  )
}
