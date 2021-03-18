/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import nightwind from "nightwind/helper"
import PropTypes from "prop-types"
import React from "react"
import Header from "../header/header"
import IconEmail from "../icons/icon-email"
import IconGithub from "../icons/icon-github"
import IconLinkedIn from "../icons/icon-linkedin"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <div className="main-content-container">
        <main>{children}</main>
        <footer>
          <a
            href="https://github.com/al-abbas-nz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/al-abbas-14401b1b8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconLinkedIn />
          </a>
          <a href="mailto:abbas.al.nz@gmail.com">
            <IconEmail />
          </a>
        </footer>
      </div>
      <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
