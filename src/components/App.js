import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "../styles/globalStyle.js"
import { theme } from "../styles/theme.js"
import { MenuProvider } from "../contexts/MenuContext.js"

import DefaultPage from "../layouts/DefaultPage.js"

import ExamplePage from "../pages/ExamplePage.js"

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MenuProvider>
          <BrowserRouter>
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<DefaultPage />}>
                <Route path="/" element={<ExamplePage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </MenuProvider>
      </ThemeProvider>
    </>
  )
}
