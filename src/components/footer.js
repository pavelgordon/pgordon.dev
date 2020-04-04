import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Footer = ({ location, title, children }) => {

    return (
        <footer className="footer">
            <section className="container">
                © {new Date().getFullYear()}. Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a>
            </section>
        </footer>
    )
}

export default Footer