import logo from '../public/logo_1x.png'
// import '../styles/globals.css'

export default function Nav() {
    console.log(logo)
    return (
        <div className="nav">
            <div className="title">
                <img src={logo.src} alt="logo" />
            </div>
            <div className="buttons">
                <div className="icon">F</div>
                <div className="icon">F</div>
                <div className="icon">F</div>
            </div>
        </div>
    )
}