import Content from '../assets/content.json'

export default function Themes() {
    return (
        <div className="themes section">
            <div className="heading">Themes</div>
            {
                Content.Themes.map(c => {
                    return (
                    <div className="t-cont">
                        <div className="title">
                            {c.title}
                        </div>
                        <div className="text">
                            {c.text}
                        </div>
                    </div>
                )})
            }
        </div>
    )
}