import Content from '../assets/content.json'

export default function About() {
    return (
        <div className="about section">
            <div className="heading">About Innovathon'21</div>
            {Content.About.text}
            <div className="regn">
                <div className="pre">Registration Starts on</div>
                <div className="info">22<sup>nd</sup> September 2021</div>
            </div>
            <div className="regn">
                <div className="pre">Win cash prizes worth</div>
                <div className="info">INR 68,000</div>
            </div>
        </div>
    )
}