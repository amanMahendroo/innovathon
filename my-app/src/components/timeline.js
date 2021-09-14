import Content from '../assets/content.json'

export default function Timeline() {
    return (
        <div className="timeline section">
            <div className="heading">Timeline</div>
            {
                Content.Timeline.map(c => {
                    return (
                    <div className="tl-cont">
                        <div className="title">
                            {c.title}
                        </div>
                        <div className="content">
                            {c.content}
                        </div>
                        <div className="datetime">
                            {c.datetime}
                        </div>
                    </div>
                )})
            }
        </div>
    )
}