import Content from '../assets/content.json'
import '../assets/css/themes.css'
import FullStackImg from '../assets/FullStackImg.png'
import MLImg from '../assets/MachineLearImg.png'
import HardwareImg from '../assets/HardwareImg.png'
import EntreprenImg from '../assets/EntreprenImg.png'

export default function Themes() {
    return (
        // <div className="themes section">
        //     <div className="heading">Themes</div>
        //     {
        //         Content.Themes.map(c => {
        //             return (
        //             <div className="t-cont">
        //                 <div className="title">
        //                     {c.title}
        //                 </div>
        //                 <div className="text">
        //                     {c.text}
        //                 </div>
        //             </div>
        //         )})
        //     }
        // </div>
        <div class="themes section">
            <h1 style={{
                fontSize:'3.5em',
                marginBottom:'0.3em',
                fontWeight:'600'
            }}>
                Themes
            </h1>
            <div class="themeCards">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front-1 flip-card-front-comm">
                            <h4 class="flip-card-front-head">{Content.Themes[0].title}</h4>
                            <img src={FullStackImg} alt="Avatar" class="themeCard" />
                        </div>
                        <div class="flip-card-back">
                            <div style={{padding:'0.6em'}}>
                            <h2 style={{
                                    fontWeight:'500'
                                }}>{Content.Themes[0].title}</h2>
                                <p style={{
                                    fontWeight:'300'
                                }}>{Content.Themes[0].text}</p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front-2 flip-card-front-comm">
                            <h4 class="flip-card-front-head">{Content.Themes[1].title}</h4>
                            <img src={EntreprenImg} alt="Avatar" class="themeCard" />
                        </div>
                        <div class="flip-card-back">
                            <div style={{padding:'0.6em'}}>
                            <h2 style={{
                                    fontWeight:'500'
                                }}>{Content.Themes[1].title}</h2>
                                <p style={{
                                    fontWeight:'300'
                                }}>{Content.Themes[1].text}</p> 
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front-3 flip-card-front-comm">
                            <h4 class="flip-card-front-head">{Content.Themes[2].title}</h4>
                            <img src={MLImg} alt="Avatar" class="themeCard" />
                        </div>
                        <div class="flip-card-back">
                            <div style={{padding:'0.6em'}}>
                                <h2 style={{
                                    fontWeight:'500'
                                }}>{Content.Themes[2].title}</h2>
                                <p style={{
                                    fontWeight:'300'
                                }}>{Content.Themes[2].text}</p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front-4 flip-card-front-comm">
                            <h4 class="flip-card-front-head">{Content.Themes[3].title}</h4>
                            {/* <h4 class="flip-card-front-head">Hardware or Roboticsssss</h4> */}
                            <img src={HardwareImg} alt="Avatar" class="themeCard" />
                        </div>
                        <div class="flip-card-back">
                            <div style={{padding:'0.6em'}}>
                            <h2 style={{
                                    fontWeight:'500'
                                }}>{Content.Themes[3].title}</h2>
                                <p style={{
                                    fontWeight:'300'
                                }}>{Content.Themes[3].text}</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}