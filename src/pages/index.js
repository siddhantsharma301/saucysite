import React from "react"
import { Link, graphql } from "gatsby"

import "../styles/index.css"
import { ReactComponent as GitHub } from "../svg/github.svg";
import { ReactComponent as LinkedIn } from "../svg/linkedin.svg";
import { ReactComponent as Twitter } from "../svg/twitter.svg";
import { ReactComponent as Instagram } from "../svg/instagram.svg"

export const query = graphql`
query  {
    site {
      siteMetadata {
        social {
          github
          linkedin
          twitter
          instagram
        }
      }
    }
  }
`

export default ({ data }) => <>
    <h1>Siddhant Sharma</h1>
    <p>A high school senior from the East Bay.</p>
    <p>Loves making cool, useful things.</p>
    <a className="github-icon" href={'https://github.com/' + data.site.siteMetadata.social.github}>
        <GitHub/> 
    </a>
    <a className="linkedin-icon" href={'https://linkedin.com/in/' + data.site.siteMetadata.social.linkedin}>
        <LinkedIn/>
    </a> 
    <a className="twitter-icon" href={'https://twitter.com/' + data.site.siteMetadata.social.twitter}>
        <Twitter/>
    </a>  
    <a className="instagram-icon" href={'https://instagram.com/' + data.site.siteMetadata.social.instagram}>
        <Instagram/> 
    </a>
</> 


