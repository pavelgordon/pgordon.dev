import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Header = ({ location, title, children }) => {

    return (

        <nav className="navigation">
            <section className="container">


                <Link className="navigation-title font-bold text-gray-900" to="/" activeStyle={{ boxShadow: 'none' }}>Pavel Gordon</Link>
                <input type="checkbox" id="menu-toggle" />
                <label className="menu-button float-right" htmlFor="menu-toggle"><i className="fas fa-bars"></i></label>
                <ul className="navigation-list">

                    <li className="navigation-item">
                        <Link className="navigation-link" to="about" activestyle={{ boxShadow: 'none' }}>About me</Link>
                    </li>

                    <li className="navigation-item">
                        {/* <Link className="navigation-link" to="https://github.com/pavelgordon" activeStyle={{ boxShadow: 'none' }}> Projects </Link> */}
                        <a href="https://github.com/pavelgordon" activestyle={{ boxShadow: 'none' }} >Projects</a>
                    </li>

                    <li className="navigation-item">
                        {/* <Link className="navigation-link" to="pavel_gordon_resume.pdf" activeStyle={{ boxShadow: 'none' }} >CV</Link> */}
                        <a href="/pavel_gordon_resume.pdf" activestyle={{ boxShadow: 'none' }} >CV</a>

                    </li>
                </ul>
            </section>
        </nav>


    )
}

export default Header