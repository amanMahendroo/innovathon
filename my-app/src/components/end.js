import '../assets/css/end.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'

export default function End() {


    return (
        <div className="section end">
            <a href="https://drive.google.com/file/d/18FutsAqwTMiIMQyOizcWXi3wFwdaSSyj/view?usp=sharing" style={{
                textDecoration:'none'
            }} target="_blank">
                <h3 style={{
                    fontWeight:'400'
                }}>
                    Hackathon Guidelines &nbsp;
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                </h3>
            </a>
            <h3 style={{
                fontWeight:'400'
            }}>
                &copy;
                2021
                Innovathon DTU
                All Rights Reserved
            </h3>
            
        </div>
    );
}