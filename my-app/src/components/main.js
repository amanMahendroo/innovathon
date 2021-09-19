import { useState, useEffect } from "react"
import '../assets/css/main.css'
// import {Button} from '@material-ui/core'
import Logo from "../assets/logo_1x.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserFriends} from '@fortawesome/free-solid-svg-icons'
import {faDiscord} from '@fortawesome/free-brands-svg-icons'

export default function Main() {
    // function format(a) {
    //     let res = ""
    //     res += a.days + ":"
    //     let h = "" + a.hours
    //     while (h.length < 2) h = "0" + h;
    //     let m = "" + a.minutes
    //     while (m.length < 2) m = "0" + m;
    //     let s = "" + a.seconds
    //     while (s.length < 2) s = "0" + s;
    //     res += h + ":" + m + ":" + s
    //     return res
    // }

    function getTimeFromMs(t) {
        t = Math.floor(t / 1000)
        let days = Math.floor(t/(24*60*60));
        t %= 24*60*60;
        let hours = Math.floor(t/(60*60));
        t %= 60*60;
        let minutes = Math.floor(t/(60));
        t %= 60;
        let seconds = t;
        return ({days, hours, minutes, seconds})
    }
    
    const [time, setTime] = useState(getTimeFromMs(new Date("2021-09-29T23:59:59") - new Date()))

    useEffect(() => {
        setInterval(() => {
            setTime(getTimeFromMs(new Date("2021-09-29T23:59:59") - new Date()))
        }, 1000)
    }, [])
    
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    return (
        // <>
        // <h1>Hackatho</h1>
        // </>
        <div className="main section">
            <div>
                <div className="heading">
                    {/* <h1 style={{
                        marginBottom:'1rem'
                    }}>HACKATHON</h1>
                    <h1 style={{
                        marginTop:'1rem'
                    }}>2K21</h1> */}
                    <img src={Logo} alt="logo" class="logo"/>
                </div>
                <div className="timer">
                    <h1>
                        Registration open till :
                        </h1>
                        <div id="countdown">
                            <ul class="timeElemtsUl">
                                <li class="timeElem"><span id="days">{time.days}</span>days</li>
                                <li class="timeElem"><span id="hours">{time.hours}</span>Hours</li>
                                <li class="timeElem"><span id="minutes">{time.minutes}</span>Minutes</li>
                                <li class="timeElem"><span id="seconds">{time.seconds}</span>Seconds</li>
                            </ul>
                        </div>
                    
                </div>
            </div>
            <div class="mainBtns">
                <button>
                    <FontAwesomeIcon icon={faUserFriends} class="registerBtn"/>
                    Register Now
                </button>
                <button>
                    <FontAwesomeIcon icon={faDiscord} class="registerBtn"/>
                    Join Discord
                </button>
            </div>
        </div>
    )
}