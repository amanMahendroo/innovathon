import React from 'react'
import Content from '../assets/content.json'
import {Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import '../assets/css/faq.css'

const Accordion = withStyles({
    root: {
    //   border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
      margin:'0.4em 0'
    },
    transition:'none',
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: "white",
      borderRadius:'1em',
      transition:'none',
    //   transition: "max-height .3s ease,background-color 0s ease .3s",
      boxShadow: "2px 2px 2px 2px rgb(214 93 32 / 25%)",
    //   backgroundColor: 'rgba(0, 0, 0, .03)',
    //   borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
        color:'rgba(254, 103, 57, 1)'
      },
    },
    expanded: {
        background: "rgb(255, 221, 201, 1)",
        borderBottomLeftRadius:'0',
        borderBottomRightRadius:'0',
        boxShadow:'none'
    },
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
        // backgroundColor: 'rgba(0, 0, 0, .03)',
        background: "rgb(255, 221, 201, 1)",
        padding: theme.spacing(2),
        borderBottomLeftRadius:'1em',
        borderBottomRightRadius:'1em',
    },
  }))(MuiAccordionDetails);
  

export default function Faq() {
    const [expanded, setExpanded] = React.useState(false);
    
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        // <div className="faq section">
        //     <div className="heading">FAQ</div>
        //     {Content.FAQ.map(c => (
        //         <Accordion expanded={expanded === c.key} onChange={handleChange(c.key)}>
        //             <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${c.key}bh-content`} id={`${c.key}bh-header`}>
        //                 <Typography>{c.question}</Typography>
        //             </AccordionSummary>
        //             <AccordionDetails><Typography>{c.answer}</Typography></AccordionDetails>
        //         </Accordion>
        //     ))}
        // </div>
        <div class="themes section">
            <h1 style={{
                fontSize:'3.2em',
                marginBottom:'0.3em',
                fontWeight:'600'
            }}>
                Frequently Asked Questions
            </h1>
            {Content.FAQ.map(c => (
                <div class="faqDiv">
                    <Accordion expanded={expanded === c.key} onChange={handleChange(c.key)}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${c.key}bh-content`} id={`${c.key}bh-header`}>
                            <span style={{
                              fontWeight:'500'
                            }}>{c.question}</span>
                        </AccordionSummary>
                        <AccordionDetails><Typography>{c.answer}</Typography></AccordionDetails>
                    </Accordion>
                </div>
            ))}
        </div>
    )
}