import React from "react"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "../styles/globalStyle.js"
import { theme } from "../styles/theme.js"
import { MenuProvider } from "../contexts/MenuContext.js"
import { AuthProvider } from "../hooks/useAuth.js"

import Router from "../routes/Routes.js"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MenuProvider>
        <GlobalStyle />
        <BrowserRouter>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </BrowserRouter>
      </MenuProvider>
    </ThemeProvider>
  )
}
