import Content from '../assets/content.json'
import '../assets/css/org.css'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import defaultImg from '../assets/default_user.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: 'auto',
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export default function Org() {

    const classes = useStyles();

    return (
         <div class="orgSection">
            <h1 class="orgHeading">TEAM</h1>
            <div>
                {Content.People.map(sub => (
                    <div className="sub">
                        <h2 style={{
                            marginTop:'2em',
                            fontSize:'1.7em',
                            fontWeight:'500'
                        }}>{sub.name}</h2>
                        <div class="orgCards">
                            {sub.list.map(person => (
                                (sub.name === "Organizers" || sub.name == "Patrons") ? <div className="person-info">
                                <div className="person-img">
                                    {person.img_url === "" ? <img src={defaultImg} alt={person.name} /> : <img src={person.img_url} alt={person.name} />}
                                    {/* <div className={classes.root}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                                    </div> */}
                                </div>
                                <div class="person-more-info-org">
                                    <div style={{
                                        // flexBasis:'80%',
                                        padding: "1em",
                                    }}>
                                        <div className="person-name">{person.name}</div>
                                        <div className="person-sub">{person.sub}</div>
                                    </div>
                                </div>
                                {/* Add social url and icon using react-icons */}
                            </div> : <div className="person-info">
                                    <div className="person-img">
                                        {person.img_url === "" ? <img src={defaultImg} alt={person.name} /> : <img src={person.img_url} alt={person.name} />}
                                        {/* <div className={classes.root}>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                                        </div> */}
                                    </div>
                                    <div class="person-more-info">
                                        <div style={{
                                            flexBasis:'80%',
                                            padding: "1em",
                                        }}>
                                            <div className="person-name">{person.name}</div>
                                            <div className="person-sub">{person.sub}</div>
                                        </div>
                                        <div class="person-social">
                                            <a style={{
                                                display:'flex',
                                                width:'100%',
                                                justifyContent:'end'
                                            }} href={person.social_url} target="_blank"><FontAwesomeIcon class="person-social-icon" icon={faLinkedinIn} /></a>
                                        </div>
                                    </div>
                                    {/* Add social url and icon using react-icons */}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <h2 style={{
                marginBottom:'1em',
                marginTop:'2em',
                fontWeight:'400'
            }}>Contact us at : <a target="_blank" href="mailto:innovathon.dtu@gmail.com">innovathon.dtu@gmail.com</a></h2>
        </div>

    )
}