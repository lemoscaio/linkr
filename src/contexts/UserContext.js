import { createContext, useState } from "react"

export const UserContext = createContext()

export function UserProvider(props) {
  let username = ""
  let email = ""
  let profileImage = ""
  let token = ""
  let id = ""

  const userStringify = localStorage.getItem("user")
  if (userStringify) {
    const userLocal = JSON.parse(userStringify)
    username = userLocal.username
    email = userLocal.email
    profileImage = userLocal.profileImage
    token = userLocal.token
    id = userLocal.id
  }
  const [user, setUser] = useState({
    username,
    email,
    profileImage,
    token,
    id,
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  )
}
