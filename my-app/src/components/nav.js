import logo from "../assets/innovathon_logo.png"
import { SocialIcon } from 'react-social-icons'
import Content from "../assets/content.json"
import "../assets/css/globals.css"

export default function Nav() {
    return (
        <div className="nav">
            <div className="title">
                <img src={logo} alt="logo" />
            </div>
            <div className="buttons">
                <div className="icon">
                    <SocialIcon url={Content.Facebook} />
                </div>
                <div className="icon">
                    <SocialIcon url={Content.Discord} />
                </div>
                <div className="icon">
                    <SocialIcon url={Content.Instagram} />
                </div>
            </div>
        </div>
    )
}