import React from "react"
import { Link, graphql } from "gatsby"

import "../styles/index.css"
import { ReactComponent as GitHub } from "../svg/github.svg";
import { ReactComponent as LinkedIn } from "../svg/linkedin.svg";
import { ReactComponent as Twitter } from "../svg/twitter.svg";
import { ReactComponent as Instagram } from "../svg/instagram.svg"
import { ReactComponent as Water }from "../svg/water.svg"

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
    <p className="intro">A high school senior from the East Bay.</p>
    <p className="intro">Loves making cool, useful things.</p>

    <div className="social">
    <a className="linkedin-icon" href={'https://linkedin.com/in/' + data.site.siteMetadata.social.linkedin} target="_blank">
          <LinkedIn/>
      </a> 
      <a className="github-icon" href={'https://github.com/' + data.site.siteMetadata.social.github} target="_blank">
          <GitHub/> 
      </a>
      <a className="twitter-icon" href={'https://twitter.com/' + data.site.siteMetadata.social.twitter} target="_blank">
          <Twitter/>
      </a>  
      <a className="instagram-icon" href={'https://instagram.com/' + data.site.siteMetadata.social.instagram} target="_blank">
          <Instagram/> 
      </a>
    </div>

  <div className="row">
    <div className="column">
      <a className="water-icon">
        <Water/>
      </a>
    </div>
    <div className="column">
      <h2>About Me</h2>
      <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus aliquet mauris, in vehicula dui rhoncus sed. Donec at pharetra enim. Donec ac tincidunt purus. Nam fermentum rhoncus vestibulum. </p>
    </div>
  </div>
</> 
