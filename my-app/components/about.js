import Content from '../content/content.json'

export default function About() {
    return (
        <div className="about section">
            <div className="heading">About Innovathon'21</div>
            {Content.About.text}
        </div>
    )
}