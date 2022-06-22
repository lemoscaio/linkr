import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth.js"

export default function HomeLayout() {
  const user = useAuth().user

  if (user) {
    return <Navigate to="/timeline" replace={true} />
  }

  return <Outlet />
}
