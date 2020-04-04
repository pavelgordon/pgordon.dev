import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Layout from "../components/layout"

const About = ({ location, title, children }) => {

    return (
        <Layout>
        
            <section className='container page'>
                <h1>About me</h1>
                <p>
                    Hey! My name is Pavel Gordon. I am a backend (Java/Kotlin) software engineer with 4+ years of professional experience and passion for clean and performant code. I build distributed, robust and fault-tolerant services for businesses. <br />
                </p>
                <p>
                    Born in Russia, life brought me to Hamburg, where I write code for FreeNOW(former myTaxi), biggest European ride-hailing app. As an engineer in allocation team, I constantly improve our dispatching system - reduce waiting time for passengers, optimize the distribution of tours in different markets.  <br />
                </p>
                <p>
                    I always push myself to be a better developer and stay up to date with the latest technology trends. I participate and (occasionally) win at hackathons, visit various IT conferences across the globe. <br />
                </p>
                <p>
                    In my free time I learn new languages(currently Italian) and write small apps like <a href="https://objectrandomizer.pgordon.dev"> ObjectRandomizer </a> 
                    <br />
                </p>
            </section>
        </Layout>
    )
}

export default About