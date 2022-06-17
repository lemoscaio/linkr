import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "../styles/globalStyle.js"
import { theme } from "../styles/theme.js"
import { MenuProvider } from "../contexts/MenuContext.js"
import { UserProvider } from "../contexts/UserContext.js"

import DefaultPage from "../layouts/DefaultPage.js"

import TimelinePage from "../pages/TimelinePage.js"
import UserPostsPage from "../pages/UserPostsPage.js"
import SignUp from "../pages/SignUp.jsx"
import SignIn from "../pages/SignIn.jsx"

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MenuProvider>
          <UserProvider>
            <BrowserRouter>
              <GlobalStyle />
              <Routes>
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/" element={<SignIn />} />
                <Route path="/" element={<DefaultPage />}>
                  <Route path="/timeline" element={<TimelinePage />} />
                  <Route path="/user/:userId" element={<UserPostsPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </UserProvider>
        </MenuProvider>
      </ThemeProvider>
    </>
  )
}
