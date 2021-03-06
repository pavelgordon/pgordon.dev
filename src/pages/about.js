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
                    Hey! My name is Pavel Gordon. I am a software engineer with 4+ years of professional experience and passion for clean and performant code. I build distributed, robust and fault-tolerant services for businesses. <br />
                </p>
                <p>
                    Born in Russia, I lived in Germany, Netherlands, and currently - Sweden. I contrubuted to <a href="https://spotify.com/">Spotify</a>, <a href="https://www.messagebird.com/en/">Messagebird</a>, <a href="https://free-now.com/">FreeNOW</a> and <a href="https://www.t-systems.com/de/en">Deutsche Telekom</a>.
                </p>
                <p>
                    I always push myself to be a better developer and stay up to date with the latest technology trends. I participate and (occasionally) win at hackathons, visit various IT conferences across the globe. <br />
                </p>
                <p>
                    In my free time I learn new languages, play <a href="https://lichess.org/@/freemahn">chess</a> and write small apps like <a href="https://objectrandomizer.pgordon.dev"> ObjectRandomizer </a> or <a href="https://chrome.google.com/webstore/detail/duolingo2anki/acheapdlofocdffphhiflflondmpfobm">Duolingo2Anki</a>.
                    <br />
                </p>
            </section>
        </Layout>
    )
}

export default About