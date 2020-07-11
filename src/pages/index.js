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

    <div className="social">
    <a className="linkedin-icon" href={'https://linkedin.com/in/' + data.site.siteMetadata.social.linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedIn/>
      </a> 
      <a className="github-icon" href={'https://github.com/' + data.site.siteMetadata.social.github} target="_blank" rel="noopener noreferrer">
          <GitHub/> 
      </a>
      <a className="twitter-icon" href={'https://twitter.com/' + data.site.siteMetadata.social.twitter} target="_blank" rel="noopener noreferrer">
          <Twitter/>
      </a>  
      <a className="instagram-icon" href={'https://instagram.com/' + data.site.siteMetadata.social.instagram} target="_blank" rel="noopener noreferrer">
          <Instagram/> 
      </a>
    </div>

    <div class="container">
      <div>
        <a className="water-icon">
          <Water/>
        </a>
      </div>
      <div>
        <h2 className="about-me">About Me</h2>
        <p className="description">I'm a freshman at the University of California, Berkeley, studying electrical engineering and computer science. I love making cool, useful things in fields such as computer vision and prototyping. From data analysis to breadboarding with a Raspberry Pi, I'm always on the look out for problems to solve using tech.</p>
      </div>
    </div>
</> 
