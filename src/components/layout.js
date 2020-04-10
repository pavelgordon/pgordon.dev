import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Footer from "./footer"
import Header from "./header"



// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */


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
