import React from "react"
import { Footer } from "./Footer"
import { Navbar } from "./NavBar"

import "./layout.css"

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}