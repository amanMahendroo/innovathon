import React from 'react'
import '../assets/css/sponsor.css'
import devfolioImg from '../assets/devfolioImg.png'
import polygonImg from '../assets/polygonImg.png'
import tezosImg from '../assets/tezosImg.png'
import celoImg from '../assets/celoImg.png'
import filecoinImg from '../assets/filecoinImg.png'

function Sponsor() {
    return (
        <div class="section">
            <h1 class="sponsorHead">Devfolio Sponsors</h1>
            <div class="sponsorDiv">
                <h2>Gold Sponsor</h2>
                <a target="_blank" href="https://devfolio.co/"><img class="devfolio-img" src={devfolioImg}/></a>
            </div>
            <div class="sponsorDiv">
                <h2>Silver Sponsor</h2>
                <div class="silverSpon">
                    <a target="_blank" href="https://tezos.com/"><img src={tezosImg}/></a>
                    <a target="_blank" href="https://celo.org/"><img src={celoImg}/></a>
                    <a target="_blank" href="https://polygon.technology/"><img src={polygonImg}/></a>
                    <a target="_blank" href="https://filecoin.io/"><img src={filecoinImg}/></a>
                </div>
            </div>
        </div>
    )
}

export default Sponsor
