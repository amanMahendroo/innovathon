import Content from '../assets/content.json'
import '../assets/css/about.css'
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRupeeSign, faGift} from '@fortawesome/free-solid-svg-icons'

export default function About() {
    return (
        // <div className="about section">
        //     <div className="aboutHeading">About Innovathon'21</div>
        //     {Content.About.text}
        //     <div className="regn">
        //         <div className="pre">Registration Starts on</div>
        //         <div className="info">22<sup>nd</sup> September 2021</div>
        //     </div>
        //     <div className="regn">
        //         <div className="pre">Win cash prizes worth</div>
        //         <div className="info">INR 68,000</div>
        //     </div>
        // </div>
        <div class="about">
            <h1 class="aboutHeading">About Innovathon'21</h1>
            <div class="aboutText">
                {Content.About.text}
            </div>
            <div class="aboutCards">
                <div class="aboutCard">
                    <span>Registration Starts on</span> <br/>
                    <FontAwesomeIcon icon={faUserPlus} class="aboutCardSvg1"/> <br/>
                    <span>25 <sup>th</sup> September 2021</span>
                </div>
                {/* <div class="aboutCard">
                    <span>Win cash prizes worth</span> <br/>
                    <FontAwesomeIcon icon={faRupeeSign} class="aboutCardSvg2"/> <br/>
                     <span>INR 68,000 </span>
                </div> */}
                <div class="aboutCard">
                    <span>Win cash prizes worth</span> <br/>
                    <FontAwesomeIcon icon={faRupeeSign} class="aboutCardSvg2"/> <br/>
                     <span>INR 68,000 </span>
                </div>
                <div class="aboutCard">
                    <span>Win amazing swags and</span> 
                    <span>Sponsor Prizes</span><br/> 
                    <FontAwesomeIcon icon={faGift} class="aboutCardSvg3"/> <br/>
                    <span> Upto 1 lakh</span>
                </div>
            </div>
        </div>

    )
}