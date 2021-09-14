import Content from '../assets/content.json'

export default function Org() {
    return (
        <div className="org section">
            {Content.People.map(sub => (
                <div className="sub">
                    <div className="sub-head">{sub.name}</div>
                    {sub.list.map(person => (
                        <div className="person-info">
                            <div className="person-img">
                                <img src={person.img_url} alt={person.img_alt} />
                            </div>
                            <div className="person-name">{person.name}</div>
                            <div className="person-sub">{person.sub}</div>
                            {/* Add social url and icon using react-icons */}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}