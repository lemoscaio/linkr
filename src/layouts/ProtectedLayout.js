import { useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth.js"
import axios from "axios"

export default function ProtectedLayout(props) {
  const { user, logout } = useAuth()

  useEffect(() => {
    if (!user) {
      return <Navigate to="/" />
    }

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/auto-login`, {}, config)
      .then(() => {})
      .catch((error) => {
        if (error.response.status !== 0) {
          logout()
        }
      })
  }, [])

  return <Outlet />
}
