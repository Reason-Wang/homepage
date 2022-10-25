import Grid from "@mui/material/Grid";
import {experienceStyle, paperStyle} from "./constants";
import Paper from "@mui/material/Paper";
import {Box, Link} from "@mui/material";
import * as React from "react";
import {experienceList} from "./constants";
import Divider from '@mui/material/Divider';

const ExperienceItem=({Institue, Start, End, Mentor, MentorLink, Topic}) =>{
    return (
        <div style={experienceStyle}>
            <p style={experienceStyle.text}>{Institue} | {Start} - {End}</p>
            <p style={experienceStyle.text}>Mentor: <Link href={MentorLink}>{Mentor}</Link> | Topic: {Topic}</p>
            {/*<p style={experienceStyle.text}>Topic: {Topic}</p>*/}
        </div>
    )
}

export const Experience=() => {
    return (
        <Grid item>
            <div
                style={paperStyle}
            >
                <Paper elevation={0} square={true}>
                    {/*<h3 style={paperStyle.label}>Experience</h3>*/}
                    {experienceList.map((item, index) =>(
                        <Box>
                            <ExperienceItem
                                Institue={item.Institute}
                                Start={item.Start}
                                End={item.End}
                                Mentor={item.Mentor}
                                Topic={item.Topic}
                                MentorLink={item.MentorLink}
                            />
                            {index < experienceList.length-1 ? <Divider light /> : null}
                        </Box>
                    ))}
                </Paper>
            </div>
        </Grid>
    )
}