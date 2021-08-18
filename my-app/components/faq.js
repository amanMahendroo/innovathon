import React from 'react'
import Content from '../content/content.json'
import {Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export default function Faq() {
    const [expanded, setExpanded] = React.useState(false);
    
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className="faq section">
            <div className="heading">FAQ</div>
            {Content.FAQ.map(c => (
                <Accordion expanded={expanded === c.key} onChange={handleChange(c.key)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${c.key}bh-content`} id={`${c.key}bh-header`}>
                        <Typography>{c.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails><Typography>{c.answer}</Typography></AccordionDetails>
                </Accordion>
            ))}
        </div>
    )
}