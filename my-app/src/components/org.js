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
        // <div className="org section">
        //     {Content.People.map(sub => (
        //         <div className="sub">
        //             <div className="sub-head">{sub.name}</div>
        //             {sub.list.map(person => (
        //                 <div className="person-info">
        //                     <div className="person-img">
        //                         <img src={person.img_url} alt={person.img_alt} />
        //                     </div>
        //                     <div className="person-name">{person.name}</div>
        //                     <div className="person-sub">{person.sub}</div>
        //                     {/* Add social url and icon using react-icons */}
        //                 </div>
        //             ))}
        //         </div>
        //     ))}
        // </div>
        <div class="timelineSection">
            <h1 class="orgHeading">TEAM</h1>
            <div>
                {Content.People.map(sub => (
                    <div className="sub">
                        <h2 style={{
                            marginTop:'2em'
                        }}>{sub.name}</h2>
                        <div class="orgCards">
                            {sub.list.map(person => (
                                <div className="person-info">
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
                                            <FontAwesomeIcon class="person-social-icon" icon={faLinkedinIn} />
                                        </div>
                                    </div>
                                    {/* Add social url and icon using react-icons */}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}