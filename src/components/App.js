import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "../styles/globalStyle.js"
import { theme } from "../styles/theme.js"
import { MenuProvider } from "../contexts/MenuContext.js"

import DefaultPage from "../layouts/DefaultPage.js"

import ExamplePage from "../pages/ExamplePage.js"
import SignUp from "../pages/SignUp.jsx"
import SignIn from "../pages/SignIn.jsx"
import { UserProvider } from "../contexts/UserContext.js"

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MenuProvider>
          <UserProvider>
            <BrowserRouter>
              <GlobalStyle />
              <Routes>
                <Route path="/timeline" element={<DefaultPage />}>
                  <Route path="/timeline" element={<ExamplePage />} />
                </Route>
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/" element={<SignIn />} />
              </Routes>
            </BrowserRouter>
          </UserProvider>
        </MenuProvider>
      </ThemeProvider>
    </>
  )
}
