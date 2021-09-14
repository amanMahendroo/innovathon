import { useState, useEffect } from "react"

export default function Main() {
    function format(a) {
        let res = ""
        res += a.days + ":"
        let h = "" + a.hours
        while (h.length < 2) h = "0" + h;
        let m = "" + a.minutes
        while (m.length < 2) m = "0" + m;
        let s = "" + a.seconds
        while (s.length < 2) s = "0" + s;
        res += h + ":" + m + ":" + s
        return res
    }

    function getTimeFromMs(t) {
        t = Math.floor(t / 1000)
        let days = Math.floor(t/(24*60*60));
        t %= 24*60*60;
        let hours = Math.floor(t/(60*60));
        t %= 60*60;
        let minutes = Math.floor(t/(60));
        t %= 60;
        let seconds = t;
        return format({days, hours, minutes, seconds})
    }
    
    const [time, setTime] = useState(getTimeFromMs(new Date("2021-09-22T00:00:00") - new Date()))

    useEffect(() => {
        setInterval(() => {
            setTime(getTimeFromMs(new Date("2021-09-22T00:00:00") - new Date()))
        }, 1000)
    }, [])
    

    return (
        <div className="main section">
            <div className="heading">Innovathon'21</div>
            <div className="timer">
                {time}
            </div>
        </div>
    )
}