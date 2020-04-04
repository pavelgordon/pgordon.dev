import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Footer from "./footer"
import Header from "./header"

import { faTwitterSquare, faGithub, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Layout = ({ location, title, children }) => {

    return (
        <main className="wrapper">
            <Header />

            <div className='content'>
                    {children}
            </div> 
            <Footer />

        </main>


        // <div
        // //   style={{
        // //     marginLeft: `auto`,
        // //     marginRight: `auto`,
        // //     maxWidth: rhythm(24),
        // //     padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        // //   }}
        // >

        //   <header>
        //       <Links/>
        //   </header>
        //   <main>
        //       <Content/>
        //   </main>
        //   <Footer/>
        // </div>
    )
}

export default Layout
