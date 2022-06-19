import { createContext, useState } from "react"

export const UserContext = createContext()

export function UserProvider(props) {
  let username = ""
  let email = ""
  let profile_image = ""
  let token = ""
  let id = ""

  const userStringify = localStorage.getItem("user")
  if (userStringify) {
    const userLocal = JSON.parse(userStringify)
    username = userLocal.username
    email = userLocal.email
    profile_image = userLocal.profile_image
    token = userLocal.token
    id = userLocal.id
  }
  const [user, setUser] = useState({
    username,
    email,
    profile_image,
    token,
    id,
  })
  console.log(user)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  )
}
