import React from "react"
import { Outlet } from "react-router-dom"

import Header from "../components/Header.js"

export default function DefaultPage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
