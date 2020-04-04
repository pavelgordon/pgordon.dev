
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare,faGithub,faInstagram,faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Bio = () => {
  return (


    <section className='container centered'>
        <div className="about">

          <div className="avatar"><img src="https://pgordon.dev/images/avatar.jpg" alt="avatar" /></div>

          <h1>Pavel Gordon</h1>
          <h2>Backend(Java/Kotlin) Engineer</h2>

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
              <a href="https://instagram.com/gordon.pawel/" aria-label="Instagram" style={{ boxShadow: 'none' }}>
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
