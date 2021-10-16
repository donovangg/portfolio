import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Hi I'm Donovan. I'm a web developer specializing in front end based in Los Angeles. I think HTML, CSS, JavaScript can be pretty rad. This site was built with GatsbyJS." />
        <title>Donovan Gomez | Web developer</title>
      </Helmet>
      <Navbar />
      <div>{children}</div>
    </div>
  )
}
