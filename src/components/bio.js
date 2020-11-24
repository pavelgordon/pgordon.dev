
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import "./bio.css"

import avatar from '../../content/assets/avatar.jpg'


import { rhythm } from "../utils/typography"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare,faGithub,faInstagram,faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Bio = () => {
  // const data = useStaticQuery(graphql`
  //   query BioQuery {
  //     avatar: file(absolutePath: { regex: "/avatar.jpg/" }) {
  //       childImageSharp {
  //         fixed(width: 400, height: 400) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //     site {
  //       siteMetadata {
  //         author {
  //           name
  //         }
  //         social {
  //           twitter
  //         }
  //       }
  //     }
  //   }
  // `)

  // const { author } = data.site.siteMetadata


  return (


    <section className='container centered'>
        <div className="about">

        <img alt='Pavel Gordon' src={avatar} style={{
          width: 200,
          height: 200,
          borderRadius: `60%`,
        }}/>

          <h1 className="name">Pavel Gordon</h1>
          <h2 className="position">Software Engineer</h2>

          <ul>
            <li>
              <a href="https://github.com/pavelgordon/" aria-label="Github" style={{ boxShadow: 'none' }}>
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/pavelgordon/" aria-label="Twitter" style={{ boxShadow: 'none' }}>
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/gordon.pav/" aria-label="Instagram" style={{ boxShadow: 'none' }}>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </li>
            <li>
              <a href="https://t.me/freemahn" aria-label="Telegram" style={{ boxShadow: 'none' }}>
                <FontAwesomeIcon icon={faTelegram} size="2x" />
              </a>
            </li>
          </ul>


    </div>
    </section>
  )
}

export default Bio
