import Content from '../assets/content.json'
import '../assets/css/timeline.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PeopleIcon from '@material-ui/icons/People';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
      boxShadow: ' 0 15px 30px 0 rgb(214 93 32 / 25%)',
      textAlign:'center'
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
  }));

export default function Schedule() {

    const classes = useStyles();


    return (
        // <div className="timeline section">
        //     <div className="heading">Timeline</div>
        //     {
        //         Content.Timeline.map(c => {
        //             return (
        //             <div className="tl-cont">
        //                 <div className="title">
        //                     {c.title}
        //                 </div>
        //                 <div className="content">
        //                     {c.content}
        //                 </div>
        //                 <div className="datetime">
        //                     {c.datetime}
        //                 </div>
        //             </div>
        //         )})
        //     }
        // </div>
        <div class="timelineSection">
            <h1 class="aboutHeading">Timeline</h1>
            <Timeline align="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                    <Typography color="textSecondary">
                        {Content.Timeline[0].date} <br/>
                        {Content.Timeline[0].time} <br/>
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="primary">
                        <PeopleIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                        {Content.Timeline[0].title}
                        </Typography>
                        <Typography>{Content.Timeline[0].content}</Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent>
                    <Typography color="textSecondary">
                        {Content.Timeline[1].date} <br/>
                        {Content.Timeline[1].time} <br/>
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <ReceiptIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                        {Content.Timeline[1].title}
                        </Typography>
                        <Typography>{Content.Timeline[1].content}</Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent>
                    <Typography color="textSecondary">
                        {Content.Timeline[2].date} <br/>
                        {Content.Timeline[2].time} <br/>
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outlined">
                        <PresentToAllIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                        {Content.Timeline[2].title}
                        </Typography>
                        <Typography>{Content.Timeline[2].content}</Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent>
                    <Typography color="textSecondary">
                        {Content.Timeline[3].date} <br/>
                        {Content.Timeline[3].time} <br/>
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                        {Content.Timeline[3].title}
                        </Typography>
                        <Typography>{Content.Timeline[3].content}</Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent>
                    <Typography color="textSecondary">
                        {Content.Timeline[4].date} <br/>
                        {Content.Timeline[4].time} <br/>
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                        <PresentToAllIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                        {Content.Timeline[4].title}
                        </Typography>
                        <Typography>{Content.Timeline[4].content}</Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent>
                    <Typography color="textSecondary">
                        {Content.Timeline[5].date} <br/>
                        {Content.Timeline[5].time} <br/>
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                        {Content.Timeline[5].title}
                        </Typography>
                        <Typography>{Content.Timeline[5].content}</Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent>
                    <Typography color="textSecondary">
                        {Content.Timeline[6].date} <br/>
                        {Content.Timeline[6].time} <br/>
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outlined">
                        <CardGiftcardIcon />
                    </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                        {Content.Timeline[6].title}
                        </Typography>
                        <Typography>{Content.Timeline[6].content}</Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
            
        </div>
    )
}