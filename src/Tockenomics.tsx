import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function Tokenomics() {
    return (
        <div className="row">
            <div className="col-6">
                <img
                    src="https://uploads-ssl.webflow.com/63bd7424d1bf3f5917e2040c/63bd94135eaabc5048458a1e_Progetto%20senza%20titolo%20(1).png"
                    loading="lazy"
                    style={{width:"44vw"}}
                    alt="" className="image"/>
            </div>
            <div className="col-6">
                <h1 className="heading">$MEME Tokenomics</h1>
                <div className="text-block">Supply: 100 T<br/><br/><strong>Airdrop: 50%<br/>&zwj;</strong>These will
                    include people that compiled the form on Twitter, <strong>@OG</strong> and active Solana NFT
                    projects (spread between high, middle and low cap collections).<br/><br/>&zwj;<strong>Team:
                        10%<br/>&zwj;</strong>Allocated to the core team of the project who helped launch and continue
                    to
                    advance MEME since its inception. Each individual remains dedicated to driving MEME's long-term
                    success, and will be reflected with a 1-year linear token vesting period.<br/><br/>&zwj;<strong>DAO:
                        10%<br/>&zwj;</strong>Towards a MEME DAO to be used for initiatives conceived by the MEME
                    community.<br/><br/>&zwj;<strong>Liquidity: 15%<br/>&zwj;</strong>Allocated towards initial
                    liquidity distribution, this is being used in Raydium, Orca, Solend, alongside other
                    platforms.<br/><br/>&zwj;<strong>Future development: 5%<br/>&zwj;</strong>Set aside for
                    future contribution and development incentives.<br/><br/>&zwj;<strong>Marketing:
                        5%<br/>&zwj;</strong>Used for marketing promotions, further giveaways and
                    incentives for the promotion of MEME.<br/><br/>&zwj;<strong>Charity:
                        5%<br/>&zwj;</strong>Donated to associations chosen by the MEME DAO mid-Q1.
                </div>
            </div>
        </div>
    )
}

export default Tokenomics
