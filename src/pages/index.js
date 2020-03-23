import React from "react"
import { Link, graphql } from "gatsby"

import "../styles/index.css"
import { ReactComponent as GitHub } from "../svg/github.svg";

export const query = graphql`
query  {
    site {
      siteMetadata {
        social {
          github
          linkedin
          twitter
        }
      }
    }
  }
`

export default () => <>
    <h1>Siddhant Sharma</h1>
    <p>A high school senior from the East Bay.</p>
    <p>Loves making cool, useful things.</p>
    <a className="github-icon">
        <GitHub/> 
    </a>
</>
