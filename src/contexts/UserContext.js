import { createContext, useState } from "react"

export const UserContext = createContext()

export function UserProvider(props) {
  let username = ""
  let email = ""
  let profile_image = ""
  let token = ""

  const userStringify = localStorage.getItem("user")
  if (userStringify) {
    const userLocal = JSON.parse(userStringify)
    username = userLocal.name
    email = userLocal.email
    profile_image = userLocal.profile_image
    token = userLocal.token
  }
  const [user, setUser] = useState({
    username,
    email,
    profile_image,
    token,
  })
  console.log(user)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  )
}
