import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Web developer based in California." />
        <title>Donovan Gomez | Web developer</title>
      </Helmet>
      <Navbar />
      <div>{children}</div>
    </div>
  )
}
