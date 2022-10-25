import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { deepOrange} from '@mui/material/colors';
import {basicInfo, paperStyle, infoStyle} from "./constants";
import {Box, Divider, InputAdornment, Link, Typography} from "@mui/material";
import Paper from '@mui/material/Paper'
import {Breadcrumbs} from '@mui/material';

export const Signature = () =>{
    return (
        <Grid item>
            <Breadcrumbs aria-label="breadcrumb">
                <Typography sx={infoStyle.signature} color="textPrimary">Renxi Wang </Typography>
            </Breadcrumbs>
            {/*<Divider variant="light" />*/}
        </Grid>
    )
}

export const BasicInfoDisplay = () =>{
    return (
        // <Grid item>
        <Box sx={infoStyle}>
            <Avatar sx={infoStyle.avatar} >
                OP
            </Avatar>
            <p style={infoStyle.sign}>Undergraduate, Northeastern University</p>
            {basicInfo.map((item, index)=>{
                return (
                    <div style={infoStyle.info}>
                        {item.icon}
                        <Link underline="hover" href={item.link} style={infoStyle.info.text}>{item.label}</Link>
                        {/*<a download href={item.link} style={infoStyle.info.text}>{item.label}</a>*/}
                    </div>
                )
            })}
        </Box>
        // </Grid>
    )
}

export const AboutMe = () => {
    return (
        <Grid item>
            <div
                style={paperStyle}
            >
            <Paper elevation={0} square={true}>
                <h3 style={paperStyle.label}>About Me</h3>
                    <div style={infoStyle.about}>
                    <p>I am a senior student in School of Computer Science and Engineering of Northeastern University, China. My interests span from information retrieval to question answering, along with reinforcement learning, meachine learning.</p>
                    </div>
            </Paper>
            </div>
        </Grid>
    )
}
