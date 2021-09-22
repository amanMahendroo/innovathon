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
                <img class="devfolio-img" src={devfolioImg}/>
            </div>
            <div class="sponsorDiv">
                <h2>Silver Sponsor</h2>
                <div class="silverSpon">
                    <img src={tezosImg}/>
                    <img src={celoImg}/>
                    <img src={polygonImg}/>
                    <img src={filecoinImg}/>
                </div>
            </div>
        </div>
    )
}

export default Sponsor
