import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
function App() {
    return (
        <div className="row">
            <div className="col-6">
                <img
                    src="https://uploads-ssl.webflow.com/63bd7424d1bf3f5917e2040c/63bd763ed1bf3fb27ee23365_logof22.png"
                    loading="lazy"

                    alt="" className="image"/>
            </div>
            <div className="col-6">
                <h1 className="heading">What is $MEME?</h1>
                <div className="text-block">
                    We all have stressors in our life. Bad things happen.
                    <br/>We MEME by
                    looking for those silver linings, telling ourselves that other people's opinions don't matter,
                    that it's not so bad or we didn't really want it.
                    <br/>&zwj;<br/>We lie to ourselves to make
                    ourselves feel better.
                    <br/>We MEME.<br/>&zwj;<br/>$COPE is a movement.<br/>Join us, MEME with
                    us!
                </div>
                <a href="#" target="_blank" className="button">JOIN US</a>
                <div className="twitter">
                    <iframe title="Twitter Follow Button" frameBorder="0" scrolling="no"
                            src="//platform.twitter.com/widgets/follow_button.html#dnt=true&amp;height=28&amp;screen_name=nhatanhvt1233&amp;show_count=true&amp;size=l&amp;width=100%25"
                            style={{border: "none", height: "28px", overflow: "hidden", width: "100%"}}></iframe>
                </div>
                <a href="/tokenomics" className="link">Tokenomics<br/>&zwj;</a></div>
        </div>
    )
}

export default App
