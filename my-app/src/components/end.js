import '../assets/css/end.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'

export default function End() {


    return (
        <div className="section end">
            <a href="https://docs.google.com/document/d/1qO6x5PfJRv3tU2QCpdNbLLql-BdD12LCAPTrdN9wtFg/edit?usp=sharing" style={{
                textDecoration:'none'
            }} target="_blank">
                <h3 style={{
                    fontWeight:'400'
                }}>
                    Terms and Conditions &nbsp;
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