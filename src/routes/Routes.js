import React from "react"
import { Routes, Route } from "react-router-dom"

import DefaultPage from "../layouts/DefaultPage.js"
import HomeLayout from "../layouts/HomeLayout.js"
import ProtectedLayout from "../layouts/ProtectedLayout.js"

import TimelinePage from "../pages/TimelinePage.js"
import UserPostsPage from "../pages/UserPostsPage.js"
import SignUp from "../pages/SignUp.js"
import SignIn from "../pages/SignIn.js"
import ByHashtagPage from "../pages/ByHashtagPage.js"

export default function Router() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
      </Route>
      <Route element={<ProtectedLayout />}>
        <Route element={<DefaultPage />}>
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/hashtag/:hashtag" element={<ByHashtagPage />} />
          <Route path="/user/:userId" element={<UserPostsPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
