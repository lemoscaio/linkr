import { createContext, useState } from "react"

export const UserContext = createContext()

export function UserProvider(props) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    profile_image: "",
    token: "",
  })
  console.log(user)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  )
}
